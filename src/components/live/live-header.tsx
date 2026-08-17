"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";

const links = [{ label: "Eventos", href: "#eventos" }, { label: "Experiencias", href: "#experiencia" }, { label: "Organizadores", href: "#organizadores" }, { label: "Cómo funciona", href: "#como-funciona" }];

export function LiveHeader() {
  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menu]);
  function navigate(href: string) { setMenu(false); window.location.hash = href.slice(1); }
  return <header className={`live-header ${compact ? "is-compact" : ""}`}>
    <a className="live-wordmark" href="#top" aria-label="Glocal Live, inicio"><span>GLOCAL</span><b>LIVE</b></a>
    <nav className="live-nav-pill" aria-label="Navegación principal">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <div className="live-header-actions"><WhatsAppLink className="whatsapp-link header-whatsapp" compact /><a className="gradient-button header-cta" href="#organizadores">Crear evento</a><button type="button" className="menu-button" onClick={() => setMenu(true)} aria-expanded={menu} aria-label="Abrir menú"><Menu /></button></div>
    {menu && <div className="mobile-menu"><button type="button" onClick={() => setMenu(false)} aria-label="Cerrar menú"><X /></button><nav>{links.map((link) => <button type="button" key={link.href} onClick={() => navigate(link.href)}>{link.label}</button>)}</nav><div className="mobile-menu-actions"><WhatsAppLink /><button type="button" className="gradient-button" onClick={() => navigate("#organizadores")}>Crear evento</button></div></div>}
  </header>;
}
