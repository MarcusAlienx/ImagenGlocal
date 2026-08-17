import { eventsRepository } from "@/lib/database/events-repository";
import { getTicketingProvider } from "@/lib/ticketing/registry";

export const agentTools = {
  getEvents: () => eventsRepository.list(),
  getEventDetails: (eventId: string) => eventsRepository.getById(eventId),
  searchEvents: (query: string) => eventsRepository.search(query),
  getEventLineup: async (eventId: string) => (await eventsRepository.getById(eventId))?.lineup ?? [],
  getTicketTypes: (eventId: string) => getTicketingProvider().getTicketTypes(eventId),
  getTicketAvailability: (eventId: string, ticketTypeId: string) => getTicketingProvider().getAvailability(eventId, ticketTypeId),
  prepareTicketCheckout: (eventId: string, ticketTypeId: string, quantity: number) => getTicketingProvider().prepareCheckout({ eventId, ticketTypeId, quantity, mode: "modal" as const }),
};
