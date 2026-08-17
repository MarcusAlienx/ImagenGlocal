import type { Event } from "@/types/glocal";

export const discoveryTabs = ["Para ti", "Hoy", "Esta semana", "Cerca de ti", "Música", "Networking", "Experiencias"] as const;

export const eventMeta: Record<string, { price: string; organizer: string; filter: string[] }> = {
  "evt-campus-night": { price: "$350", organizer: "Glocal Live", filter: ["Para ti", "Hoy", "Esta semana", "Cerca de ti", "Música"] },
  "evt-rooftop": { price: "$850", organizer: "Glocal Experiences", filter: ["Para ti", "Esta semana", "Experiencias"] },
  "evt-festival": { price: "$990", organizer: "Glocal Presents", filter: ["Para ti", "Música", "Experiencias"] },
};

export const socialStats = [
  { value: "+250", label: "Eventos" },
  { value: "+35K", label: "Asistentes" },
  { value: "+120", label: "Organizadores" },
  { value: "98%", label: "Check-in digital" },
] as const;

export const purchaseSteps = [
  { number: "01", title: "Elige tu evento", text: "Explora por ciudad, fecha o mood." },
  { number: "02", title: "Compra tu acceso", text: "Selecciona tu entrada y paga seguro." },
  { number: "03", title: "Recibe tu QR", text: "Tu boletera entrega el acceso digital." },
  { number: "04", title: "Entra y vívelo", text: "Presenta tu QR en el acceso." },
] as const;

export function matchesTab(event: Event, tab: string) {
  return eventMeta[event.id]?.filter.includes(tab) ?? tab === "Para ti";
}
