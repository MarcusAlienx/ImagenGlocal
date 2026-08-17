import { NextResponse } from "next/server";
import { eventsRepository } from "@/lib/database/events-repository";
export async function GET(request: Request) { const query = new URL(request.url).searchParams.get("q")?.trim().slice(0, 100); const events = query ? await eventsRepository.search(query) : await eventsRepository.list(); return NextResponse.json({ events }, { headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=300" } }); }
