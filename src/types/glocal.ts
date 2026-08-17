export type EventCategory = "music" | "festival" | "sports" | "culture" | "business" | "experience";
export type CheckoutMode = "embedded" | "modal" | "redirect";

export interface Venue { id: string; name: string; address: string; city: string; state: string; country: string; latitude: number; longitude: number; capacity: number }
export interface Artist { id: string; name: string; slug: string; description: string; image?: string; externalReference?: string }
export interface LineupItem { artist: Artist; stage: string; performanceTime: string; position: number }
export interface Event { id: string; slug: string; name: string; description: string; shortDescription: string; category: EventCategory; tags: string[]; status: "published" | "draft" | "cancelled"; startDate: string; endDate: string; venue: Venue; city: string; state: string; country: string; heroImage: string; organizerId: string; ticketingProvider: string; externalEventId: string; lineup: LineupItem[] }

export type StructuredUI =
  | { type: "event_card"; event: Event }
  | { type: "event_list"; events: Event[] }
  | { type: "lineup"; eventName: string; lineup: LineupItem[] }
  | { type: "ticket_options"; eventId: string; tickets: TicketTypeView[] }
  | { type: "checkout"; providerId: string; eventId: string; eventName: string; ticketTypeId: string; ticketName: string; quantity: number; unitPrice: number; total: number; currency: string; checkoutMode: CheckoutMode; checkoutUrl: string };

export interface TicketTypeView { id: string; name: string; description: string; price: number; priceDisplay: string; currency: string; availability: "available" | "low" | "sold_out" }
export interface AgentResponse { message: string; ui?: StructuredUI[]; conversationId: string }
