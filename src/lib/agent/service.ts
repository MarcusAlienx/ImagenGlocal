import { randomUUID } from "node:crypto";
import type { AgentResponse, Event, StructuredUI } from "@/types/glocal";
import { getOpenAIClient } from "@/lib/openai/client";
import { agentTools } from "./tools";
import { conversationMemory, type ConversationMemory } from "./memory";

function selectedFromMessage(message: string, events: Event[], memory: ConversationMemory) {
  const normalized = message.toLocaleLowerCase("es-MX");
  const ordinal = normalized.match(/(?:el|la)\s+(primero|primer|segundo|tercero)/)?.[1];
  if (ordinal) { const index = ordinal.startsWith("primer") ? 0 : ordinal === "segundo" ? 1 : 2; return events.find((event) => event.id === memory.lastEventIds[index]); }
  return events.find((event) => [event.name, event.city, event.state].some((value) => normalized.includes(value.toLocaleLowerCase("es-MX")))) ?? events.find((event) => event.id === memory.selectedEventId);
}

export async function runAgent(message: string, requestedConversationId?: string): Promise<AgentResponse> {
  const conversationId = requestedConversationId || randomUUID();
  const memory = (await conversationMemory.get(conversationId)) ?? { conversationId, lastEventIds: [], updatedAt: Date.now() };
  const normalized = message.toLocaleLowerCase("es-MX");
  const events = await agentTools.getEvents();
  let selected = selectedFromMessage(message, events, memory);
  const cityMatch = events.find((event) => normalized.includes(event.city.toLocaleLowerCase("es-MX")) || (event.city === "Ciudad de México" && /cdmx|méxico/.test(normalized)));
  if (cityMatch) { selected = cityMatch; memory.city = cityMatch.city; memory.selectedEventId = cityMatch.id; }
  if (selected) memory.selectedEventId = selected.id;
  let responseMessage = "Puedo ayudarte a descubrir eventos, consultar lineups y preparar tu acceso. ¿Qué te gustaría vivir?";
  let ui: StructuredUI[] | undefined;

  if (/evento|este fin|fin de semana|qué tienen|que tienen|salir/.test(normalized) && !/boleto|ticket|vip|general/.test(normalized)) {
    const matches = cityMatch ? [cityMatch] : events;
    memory.lastEventIds = matches.map((event) => event.id);
    responseMessage = cityMatch ? `Encontré esta experiencia en ${cityMatch.city}.` : "Estas son las próximas experiencias disponibles en Glocal Live.";
    ui = cityMatch ? [{ type: "event_card", event: cityMatch }] : [{ type: "event_list", events: matches }];
  } else if (cityMatch || /muéstrame|muestrame|el segundo|el primero|el tercero/.test(normalized)) {
    if (selected) { responseMessage = `Este es ${selected.name}: ${selected.shortDescription}`; ui = [{ type: "event_card", event: selected }]; }
  } else if (/quién toca|quien toca|lineup|artista|horario/.test(normalized)) {
    if (!selected) responseMessage = "¿De cuál evento quieres ver el lineup?";
    else { const lineup = await agentTools.getEventLineup(selected.id); responseMessage = `Este es el lineup confirmado de ${selected.name}.`; ui = [{ type: "lineup", eventName: selected.name, lineup }]; }
  } else if (/boleto|ticket|entrada|vip|general|cuánto cuesta|cuanto cuesta/.test(normalized) && !/quiero|comprar|dame|llevo/.test(normalized)) {
    if (!selected) responseMessage = "Primero elige un evento y te mostraré sus accesos oficiales.";
    else { const tickets = await agentTools.getTicketTypes(selected.id); const named = tickets.find((ticket) => normalized.includes(ticket.name.toLowerCase())); if (named) memory.selectedTicketTypeId = named.id; responseMessage = `Estos son los accesos oficiales disponibles para ${selected.name}.`; ui = [{ type: "ticket_options", eventId: selected.id, tickets }]; }
  } else if (/quiero|comprar|dame|llevo/.test(normalized)) {
    if (!selected) responseMessage = "¿Para cuál evento quieres tus accesos?";
    else {
      const tickets = await agentTools.getTicketTypes(selected.id);
      const ticket = tickets.find((item) => normalized.includes(item.name.toLowerCase())) ?? tickets.find((item) => item.id === memory.selectedTicketTypeId);
      const quantity = Number(normalized.match(/\b([1-8])\b/)?.[1] ?? memory.quantity ?? 1);
      if (!ticket) responseMessage = "¿Qué tipo de acceso prefieres?";
      else { const checkout = await agentTools.prepareTicketCheckout(selected.id, ticket.id, quantity); memory.selectedTicketTypeId = ticket.id; memory.quantity = quantity; responseMessage = `Perfecto. Preparé ${quantity} ${ticket.name}${quantity > 1 ? "" : ""} para ${selected.name}. El pago y la emisión del boleto ocurren con el proveedor externo.`; ui = [{ type: "checkout", providerId: checkout.providerId, eventId: selected.id, eventName: selected.name, ticketTypeId: ticket.id, ticketName: ticket.name, quantity, unitPrice: checkout.unitPrice, total: checkout.total, currency: checkout.currency, checkoutMode: checkout.mode, checkoutUrl: checkout.checkoutUrl }]; }
    }
  } else {
    const client = getOpenAIClient();
    if (client) try { const result = await client.responses.create({ model: process.env.OPENAI_MODEL || "gpt-5.6", store: false, max_output_tokens: 180, instructions: `Eres Glocal Agent, asistente oficial de eventos. Responde en español, breve y premium. No inventes eventos, precios, disponibilidad, pagos o boletos. No solicites datos financieros. Si falta información, haz una pregunta concreta. Los únicos eventos actuales son: ${events.map((event) => `${event.name} en ${event.city}`).join(", ")}`, input: message }); responseMessage = result.output_text.trim() || responseMessage; } catch { /* deterministic fallback remains available */ }
  }
  memory.updatedAt = Date.now(); await conversationMemory.set(memory);
  return { message: responseMessage, ui, conversationId };
}
