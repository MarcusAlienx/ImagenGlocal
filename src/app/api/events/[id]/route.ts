import { NextResponse } from "next/server";
import { eventsRepository } from "@/lib/database/events-repository";
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) { const { id } = await context.params; const event = await eventsRepository.getById(id); return event ? NextResponse.json({ event }) : NextResponse.json({ error: "event_not_found" }, { status: 404 }); }
