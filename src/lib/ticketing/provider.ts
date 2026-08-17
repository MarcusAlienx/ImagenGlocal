import type { Availability, CheckoutInput, CheckoutResult, TicketEvent } from "./types";
import type { TicketTypeView } from "@/types/glocal";
export interface TicketingProvider {
  readonly id: string;
  getEvent(eventId: string): Promise<TicketEvent | undefined>;
  getTicketTypes(eventId: string): Promise<TicketTypeView[]>;
  getAvailability(eventId: string, ticketTypeId: string): Promise<Availability>;
  prepareCheckout(input: CheckoutInput): Promise<CheckoutResult>;
}
