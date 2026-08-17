import type { TicketingProvider } from "../provider";
import type { CheckoutInput } from "../types";
import type { TicketTypeView } from "@/types/glocal";
import { demoEvents } from "@/lib/database/demo-data";

const prices: Record<string, TicketTypeView[]> = {
  "evt-campus-night": [
    { id: "ticket-general", name: "General", description: "Acceso general al evento", price: 350, priceDisplay: "$350 MXN", currency: "MXN", availability: "available" },
    { id: "ticket-vip", name: "VIP", description: "Acceso preferente y zona VIP", price: 650, priceDisplay: "$650 MXN", currency: "MXN", availability: "available" },
  ],
  "evt-rooftop": [{ id: "ticket-rooftop", name: "Experience", description: "Acceso y welcome drink", price: 850, priceDisplay: "$850 MXN", currency: "MXN", availability: "low" }],
  "evt-festival": [{ id: "ticket-festival", name: "General", description: "Acceso a ambos escenarios", price: 990, priceDisplay: "$990 MXN", currency: "MXN", availability: "available" }],
};

export class MockTicketingProvider implements TicketingProvider {
  readonly id = "mock";
  async getEvent(eventId: string) { const event = demoEvents.find((item) => item.id === eventId); return event ? { id: event.id, externalId: event.externalEventId, name: event.name } : undefined; }
  async getTicketTypes(eventId: string) { return prices[eventId] ?? []; }
  async getAvailability(eventId: string, ticketTypeId: string) { const ticket = (prices[eventId] ?? []).find((item) => item.id === ticketTypeId); return { status: ticket?.availability ?? "sold_out", remaining: ticket?.availability === "available" ? 50 : 0 } as const; }
  async prepareCheckout(input: CheckoutInput) {
    if (!Number.isInteger(input.quantity) || input.quantity < 1 || input.quantity > 8) throw new Error("invalid_quantity");
    const ticket = (prices[input.eventId] ?? []).find((item) => item.id === input.ticketTypeId);
    if (!ticket || ticket.availability === "sold_out") throw new Error("ticket_unavailable");
    return { ...input, providerId: this.id, mode: input.mode ?? "modal", checkoutUrl: `/checkout/mock?event=${encodeURIComponent(input.eventId)}&ticket=${encodeURIComponent(input.ticketTypeId)}&quantity=${input.quantity}`, expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(), unitPrice: ticket.price, total: ticket.price * input.quantity, currency: ticket.currency };
  }
}
