import type { CheckoutMode, TicketTypeView } from "@/types/glocal";
export type TicketEvent = { id: string; externalId: string; name: string };
export type Availability = { status: TicketTypeView["availability"]; remaining?: number };
export type CheckoutInput = { eventId: string; ticketTypeId: string; quantity: number; mode?: CheckoutMode; returnUrl?: string };
export type CheckoutResult = CheckoutInput & { providerId: string; mode: CheckoutMode; checkoutUrl: string; expiresAt: string; unitPrice: number; total: number; currency: string };
