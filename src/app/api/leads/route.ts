import { NextResponse } from "next/server";

export const runtime = "nodejs";
type LeadInput = { name: string; email: string; phone?: string; city: string; interest: string; message?: string; consent: true };
const requestLog = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRateLimited(ip: string) { const now = Date.now(); const attempts = (requestLog.get(ip) ?? []).filter((time) => now - time < 10 * 60_000); attempts.push(now); requestLog.set(ip, attempts); return attempts.length > 5; }
function clean(value: unknown, maxLength: number) { if (typeof value !== "string") return ""; return [...value.trim()].map((character) => character.charCodeAt(0) < 32 ? " " : character).join("").replace(/\s+/g, " ").slice(0, maxLength); }
function parseLead(value: unknown): LeadInput | undefined {
  if (!value || typeof value !== "object") return;
  const body = value as Record<string, unknown>;
  if (clean(body.website, 200)) return;
  const name = clean(body.name, 100); const email = clean(body.email, 160).toLowerCase(); const phone = clean(body.phone, 30); const city = clean(body.city, 100); const interest = clean(body.interest, 120); const message = clean(body.message, 800);
  if (name.length < 2 || !emailPattern.test(email) || !city || !interest || body.consent !== true) return;
  return { name, email, phone: phone || undefined, city, interest, message: message || undefined, consent: true };
}
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character); }

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  let lead: LeadInput | undefined;
  try { lead = parseLead(await request.json()); } catch { return NextResponse.json({ error: "invalid_json" }, { status: 400 }); }
  if (!lead) return NextResponse.json({ error: "invalid_lead" }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY; const recipient = process.env.GLOCAL_LEADS_EMAIL; const sender = process.env.GLOCAL_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return NextResponse.json({ error: "email_not_configured", fallback: "netlify" }, { status: 503 });
  const rows = [["Nombre", lead.name], ["Correo", lead.email], ["Teléfono", lead.phone || "No proporcionado"], ["Ciudad", lead.city], ["Interés", lead.interest], ["Mensaje", lead.message || "Sin mensaje"]];
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: sender, to: [recipient], reply_to: lead.email, subject: `Nuevo lead Glocal Live — ${lead.interest}`, html: `<h1>Nuevo lead de Glocal Live</h1>${rows.map(([label, content]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(content)}</p>`).join("")}<p><small>El contacto aceptó ser contactado sobre eventos y experiencias de Glocal Live.</small></p>` }), signal: AbortSignal.timeout(10_000) });
  } catch {
    return NextResponse.json({ error: "email_delivery_failed" }, { status: 502 });
  }
  if (!response.ok) return NextResponse.json({ error: "email_delivery_failed" }, { status: 502 });
  return NextResponse.json({ ok: true, delivery: "email" }, { status: 201 });
}
