"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { socialStats } from "./live-data";

export function OrganizerSection() {
  return <section id="organizadores" className="organizer-section"><div className="shell organizer-layout"><div><p className="eyebrow"><span /> Para organizadores</p><h2>Tu evento.<br />Tu audiencia.<br /><span>Tu control.</span></h2><p className="section-copy">Crea experiencias, conecta tu boletera, vende accesos y sigue la operación desde un solo lugar.</p><a href="#contact" className="gradient-button">Crear mi evento <ArrowUpRight size={17} /></a></div><OrganizerDashboard /></div></section>;
}

function OrganizerDashboard() {
  const bars = [30, 43, 37, 57, 51, 69, 62, 81, 73, 93, 86, 100].map((height, day) => ({ id: `day-${day + 1}`, height }));
  return <div className="dashboard-shell"><div className="dash-top"><div><span className="dash-mark">G</span><div><strong>Campus Night</strong><small>Dashboard en vivo</small></div></div><span className="live-chip"><i /> Live</span></div><div className="dash-stats"><div><small>Ventas</small><strong>$128,450</strong><span>MXN</span></div><div><small>Tickets vendidos</small><strong>847</strong><span><TrendingUp /> +12.4%</span></div></div><div className="chart"><div className="chart-label"><span>Rendimiento de venta</span><b>Últimos 12 días</b></div><div className="bars">{bars.map((bar) => <i key={bar.id} style={{ height: `${bar.height}%` }} />)}</div></div><div className="dash-bottom"><div><Users /><span><b>623</b> check-ins</span></div><div><CheckCircle2 /><span><b>8.4%</b> conversión</span></div></div></div>;
}

export function SocialProof() {
  return <section className="proof-section"><div className="shell"><p className="eyebrow"><span /> En movimiento</p><h2>Eventos que<br />conectan personas.</h2><div className="proof-grid">{socialStats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ delay: index * .08 }}><strong>{stat.value}</strong><span>{stat.label}</span></motion.div>)}</div></div></section>;
}
