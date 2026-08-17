"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { demoEvents } from "@/lib/database/demo-data";
import type { Event } from "@/types/glocal";
import { discoveryTabs, eventMeta, matchesTab } from "./live-data";

const date = new Intl.DateTimeFormat("es-MX", { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });

function EventPoster({ event, featured = false }: { event: Event; featured?: boolean }) {
  const meta = eventMeta[event.id];
  return <motion.article layout className={`event-poster ${event.heroImage} ${featured ? "is-featured" : ""}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .36 }}><div className="poster-visual" /><div className="poster-shade" /><div className="poster-top"><span>{event.tags[0]}</span><span className="poster-date">{date.format(new Date(event.startDate)).split(",")[0]}</span></div><div className="poster-content"><p>{meta.organizer}</p><h3>{event.name}</h3><div className="poster-details"><span><CalendarDays />{date.format(new Date(event.startDate))}</span><span><MapPin />{event.city}</span></div><div className="poster-bottom"><span>Desde <b>{meta.price} MXN</b></span><button type="button" aria-label={`Ver ${event.name}`}>Ver evento <ArrowUpRight /></button></div></div></motion.article>;
}

export function EventDiscovery() {
  const [active, setActive] = useState<(typeof discoveryTabs)[number]>("Para ti");
  const events = demoEvents.filter((event) => matchesTab(event, active));
  return <section id="eventos" className="discovery-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Selección en vivo</p><h2>Descubre lo que<br />está pasando.</h2></div><p>Experiencias curadas para salir de la rutina y entrar en el momento.</p></div><div className="tabs-wrap" role="tablist" aria-label="Filtros de eventos">{discoveryTabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={active === tab} onClick={() => setActive(tab)}>{tab}{active === tab && <motion.span layoutId="active-tab" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}</button>)}</div><motion.div layout className="event-grid"><AnimatePresence mode="popLayout">{events.map((event, index) => <EventPoster key={event.id} event={event} featured={index === 0 && events.length > 1} />)}</AnimatePresence></motion.div></div></section>;
}

export function FeaturedEvent() {
  const event = demoEvents[0];
  return <section id="experiencia" className="featured-event"><div className={`featured-media ${event.heroImage}`} /><div className="featured-overlay" /><div className="featured-copy shell"><p className="eyebrow"><span /> Live experience 001</p><h2>La noche<br />cambia aquí.</h2><p>{event.name} · {event.city}<br />Viernes 21 de agosto · 20:00</p><div><strong>Desde $350 MXN</strong><a href="#eventos" className="gradient-button">Comprar acceso <ArrowUpRight size={17} /></a></div></div></section>;
}
