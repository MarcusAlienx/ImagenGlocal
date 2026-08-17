import { ArrowDown, CalendarCheck, QrCode, ShieldCheck } from "lucide-react";

export function HeroVideo() {
  return <section className="live-hero" aria-labelledby="hero-title">
    <div className="hero-media" role="img" aria-label="Luces violetas y azules de una experiencia en vivo" />
    <div className="hero-grid" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" />
    <div className="hero-content shell"><p className="eyebrow"><span /> Eventos · Experiencias · En vivo</p><h1 id="hero-title">Vive lo que está<br /><span>pasando ahora.</span></h1><p className="hero-copy">Descubre experiencias, compra tu acceso y recibe tu QR en segundos.</p><div className="hero-actions"><a href="#eventos" className="gradient-button">Explorar eventos <ArrowDown size={17} /></a><a href="#organizadores" className="outline-button">Crear evento</a></div><div className="trust-row"><span><ShieldCheck /> Pago seguro</span><span><QrCode /> QR inmediato</span><span><CalendarCheck /> Acceso digital</span></div></div>
    <div className="hero-index" aria-hidden="true"><span>GLOCAL / LIVE</span><span>20°40&apos;N · 103°21&apos;W</span></div>
  </section>;
}
