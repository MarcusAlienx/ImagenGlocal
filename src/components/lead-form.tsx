"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { submitNetlifyForm } from "@/lib/forms";

type FormStatus = "idle" | "sending" | "success" | "error";
const fieldClass = "w-full rounded-xl border border-white/12 bg-white/[.05] px-4 py-3 outline-none focus:border-violet-400";

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  async function submit(form: HTMLFormElement) {
    setStatus("sending");
    const data = new FormData(form);
    const lead = { name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), phone: String(data.get("phone") ?? ""), city: String(data.get("city") ?? ""), interest: String(data.get("interest") ?? ""), message: String(data.get("message") ?? ""), website: String(data.get("website") ?? ""), consent: data.get("consent") === "on" };
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
      if (response.status === 503) await submitNetlifyForm("glocal-live-lead", { ...lead, consent: lead.consent ? "Sí" : "No" });
      else if (!response.ok) throw new Error("Lead submission failed");
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }

  return <section id="contact" className="bg-[#0b0b10] px-5 py-24 text-white sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-violet-400">Mantente cerca</p><h2 className="mt-5 max-w-xl text-5xl font-medium leading-[.92] tracking-[-.06em] sm:text-7xl">La próxima experiencia puede empezar aquí.</h2><p className="mt-7 max-w-md text-sm leading-relaxed text-white/50">Déjanos tus datos y el equipo de Glocal Live podrá contactarte con información de eventos, accesos o colaboraciones.</p></div><div className="rounded-[2rem] border border-white/10 bg-[#12121a] p-5 text-white shadow-[0_30px_80px_rgba(51,20,100,.2)] sm:p-8">{status === "success" ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><CheckCircle2 size={52} className="text-violet-400" /><h3 className="mt-5 text-3xl font-semibold">Ya estás en la lista.</h3><p className="mt-3 max-w-sm text-sm text-white/50">Recibimos tus datos. Te contactaremos en el correo proporcionado cuando tengamos información relevante.</p><button type="button" onClick={() => setStatus("idle")} className="mt-7 rounded-full border border-white/15 px-5 py-2.5 text-sm">Enviar otro registro</button></div> : <form onSubmit={(event) => { event.preventDefault(); submit(event.currentTarget); }} className="grid gap-5 sm:grid-cols-2"><Field id="lead-name" name="name" label="Nombre *" required autoComplete="name" maxLength={100} /><Field id="lead-email" name="email" label="Correo *" type="email" required autoComplete="email" maxLength={160} /><Field id="lead-phone" name="phone" label="Teléfono" type="tel" autoComplete="tel" maxLength={30} /><Field id="lead-city" name="city" label="Ciudad *" required autoComplete="address-level2" maxLength={100} /><div className="sm:col-span-2"><label htmlFor="lead-interest" className="mb-2 block text-xs text-white/55">¿Qué te interesa? *</label><select id="lead-interest" name="interest" required defaultValue="" className={`${fieldClass} bg-[#181820]`}><option value="" disabled>Selecciona una opción</option><option>Recibir próximos eventos</option><option>Comprar accesos</option><option>Organizar un evento</option><option>Alianza o patrocinio</option><option>Otra consulta</option></select></div><div className="sm:col-span-2"><label htmlFor="lead-message" className="mb-2 block text-xs text-white/55">Mensaje</label><textarea id="lead-message" name="message" rows={3} maxLength={800} className={`${fieldClass} resize-none`} /></div><div className="hidden" aria-hidden="true"><label htmlFor="lead-website">No completar</label><input id="lead-website" name="website" tabIndex={-1} autoComplete="off" /></div><label className="flex gap-3 text-xs leading-relaxed text-white/45 sm:col-span-2"><input name="consent" type="checkbox" required className="mt-0.5 size-4 accent-violet-500" />Acepto que Glocal Live use estos datos para responder mi solicitud y contactarme sobre eventos o experiencias relacionadas.</label>{status === "error" && <p role="alert" className="text-sm text-red-300 sm:col-span-2">No pudimos enviar tus datos. Revisa la información o inténtalo más tarde.</p>}<button type="submit" disabled={status === "sending"} className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-600 to-blue-500 px-5 py-4 font-bold text-white disabled:opacity-60 sm:col-span-2">{status === "sending" ? <><LoaderCircle size={18} className="animate-spin" /> Enviando…</> : <>Enviar mis datos <ArrowUpRight size={18} /></>}</button></form>}</div></div></section>;
}

function Field({ id, name, label, ...inputProps }: { id: string; name: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) { return <div><label htmlFor={id} className="mb-2 block text-xs text-white/55">{label}</label><input id={id} name={name} className={fieldClass} {...inputProps} /></div>; }
