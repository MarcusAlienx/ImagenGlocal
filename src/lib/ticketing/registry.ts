import type { TicketingProvider } from "./provider";
import { MockTicketingProvider } from "./adapters/mock-provider";
import { MercadoPagoTicketingProvider } from "./adapters/mercado-pago-provider";
const providers = new Map<string, TicketingProvider>([["mock", new MockTicketingProvider()], ["mercado-pago", new MercadoPagoTicketingProvider()]]);
export function getTicketingProvider(id = process.env.TICKETING_PROVIDER || "mock") { const provider = providers.get(id); if (!provider) throw new Error(`Unknown ticketing provider: ${id}`); return provider; }
export function registerTicketingProvider(provider: TicketingProvider) { providers.set(provider.id, provider); }
