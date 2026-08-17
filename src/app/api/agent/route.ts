import { NextResponse } from "next/server";
import { runAgent } from "@/lib/agent/service";
export const runtime = "nodejs";
const requests = new Map<string, number[]>();
function limited(ip: string) { const now = Date.now(); const recent = (requests.get(ip) ?? []).filter((time) => now - time < 60_000); recent.push(now); requests.set(ip, recent); return recent.length > 30; }
function parseInput(value: unknown): { message: string; conversationId?: string } | undefined { if (!value || typeof value !== "object") return; const body = value as Record<string, unknown>; if (typeof body.message !== "string") return; const message = [...body.message.trim()].map((character) => character.charCodeAt(0) < 32 ? " " : character).join("").slice(0, 600); if (!message) return; if (body.conversationId !== undefined && (typeof body.conversationId !== "string" || body.conversationId.length > 100)) return; return { message, conversationId: body.conversationId as string | undefined }; }
export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "rate_limited", message: "Demasiados mensajes. Intenta de nuevo en un minuto." }, { status: 429 });
  try { const input = parseInput(await request.json()); if (!input) return NextResponse.json({ error: "invalid_request" }, { status: 400 }); const response = await runAgent(input.message, input.conversationId); return NextResponse.json(response, { headers: { "Cache-Control": "no-store" } }); } catch { return NextResponse.json({ error: "agent_unavailable", message: "Glocal Agent no está disponible por el momento." }, { status: 500 }); }
}
