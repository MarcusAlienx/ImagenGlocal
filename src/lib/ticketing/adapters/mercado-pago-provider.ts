import "server-only";
import { randomUUID } from "node:crypto";
import { demoEvents } from "@/lib/database/demo-data";
import type { TicketTypeView } from "@/types/glocal";
import type { TicketingProvider } from "../provider";
import type { CheckoutInput, CheckoutResult } from "../types";
import { MockTicketingProvider } from "./mock-provider";

const catalog = new MockTicketingProvider();
const preferencesEndpoint = "https://api.mercadopago.com/checkout/preferences";

type PreferenceResponse = { init_point?: string; sandbox_init_point?: string };

function getPublicAppUrl() {
  const value = process.env.NEXT_PUBLIC_APP_URL;
  if (!value) throw new Error("mercado_pago_app_url_missing");
  const url = new URL(value);
  if (process.env.NODE_ENV === "production" && url.protocol !== "https:") {
    throw new Error("mercado_pago_app_url_must_use_https");
  }
  return url;
}

function getWebhookUrl() {
  const value = process.env.MERCADOPAGO_WEBHOOK_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("mercado_pago_webhook_must_use_https");
  return url.toString();
}

function getCheckoutUrl(response: PreferenceResponse) {
  const value = process.env.MERCADOPAGO_USE_SANDBOX === "true"
    ? response.sandbox_init_point
    : response.init_point;
  if (!value) throw new Error("mercado_pago_checkout_url_missing");
  const url = new URL(value);
  if (url.protocol !== "https:" || !/(^|\.)mercadopago\.com$/.test(url.hostname)) {
    throw new Error("mercado_pago_checkout_url_invalid");
  }
  return url.toString();
}

export class MercadoPagoTicketingProvider implements TicketingProvider {
  readonly id = "mercado-pago";

  getEvent(eventId: string) {
    return catalog.getEvent(eventId);
  }

  getTicketTypes(eventId: string) {
    return catalog.getTicketTypes(eventId);
  }

  getAvailability(eventId: string, ticketTypeId: string) {
    return catalog.getAvailability(eventId, ticketTypeId);
  }

  async prepareCheckout(input: CheckoutInput): Promise<CheckoutResult> {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) throw new Error("mercado_pago_not_configured");
    if (!Number.isInteger(input.quantity) || input.quantity < 1 || input.quantity > 8) {
      throw new Error("invalid_quantity");
    }

    const event = demoEvents.find((item) => item.id === input.eventId);
    const tickets: TicketTypeView[] = await this.getTicketTypes(input.eventId);
    const ticket = tickets.find((item) => item.id === input.ticketTypeId);
    if (!event || !ticket || ticket.availability === "sold_out") throw new Error("ticket_unavailable");

    const availability = await this.getAvailability(input.eventId, input.ticketTypeId);
    if (availability.status === "sold_out" || (availability.remaining ?? input.quantity) < input.quantity) {
      throw new Error("ticket_unavailable");
    }

    const appUrl = getPublicAppUrl();
    const expiresAt = new Date(Date.now() + 30 * 60_000);
    const reference = `glocal-${randomUUID()}`;
    const response = await fetch(preferencesEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-Idempotency-Key": randomUUID(),
      },
      body: JSON.stringify({
        items: [{
          id: ticket.id,
          title: `${event.name} — ${ticket.name}`,
          description: ticket.description,
          category_id: "tickets",
          quantity: input.quantity,
          currency_id: ticket.currency,
          unit_price: ticket.price,
        }],
        external_reference: reference,
        back_urls: {
          success: new URL(`/checkout/status?status=success&reference=${reference}`, appUrl).toString(),
          pending: new URL(`/checkout/status?status=pending&reference=${reference}`, appUrl).toString(),
          failure: new URL(`/checkout/status?status=failure&reference=${reference}`, appUrl).toString(),
        },
        auto_return: "approved",
        expires: true,
        expiration_date_from: new Date().toISOString(),
        expiration_date_to: expiresAt.toISOString(),
        notification_url: getWebhookUrl(),
        statement_descriptor: "GLOCAL LIVE",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`mercado_pago_preference_failed:${response.status}`);
    const preference = (await response.json()) as PreferenceResponse;

    return {
      ...input,
      providerId: this.id,
      mode: "redirect",
      checkoutUrl: getCheckoutUrl(preference),
      expiresAt: expiresAt.toISOString(),
      unitPrice: ticket.price,
      total: ticket.price * input.quantity,
      currency: ticket.currency,
    };
  }
}
