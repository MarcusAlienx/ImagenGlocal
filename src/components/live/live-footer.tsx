import { WhatsAppLink } from "./whatsapp-link";

const columns = [
  { title: "Explorar", links: [["Eventos", "#eventos"], ["Experiencias", "#experiencia"], ["Categorías", "#eventos"]] },
  { title: "Organizadores", links: [["Crear evento", "#organizadores"], ["Solicitar información", "#contact"], ["Ayuda", "#contact"]] },
  { title: "Glocal Live", links: [["Nosotros", "#top"], ["Contacto", "#contact"], ["Privacidad", "/privacy"], ["Términos", "/terms"]] },
];

export function LiveFooter() {
  return <footer className="live-footer"><div className="shell"><div className="footer-main"><div><a className="live-wordmark footer-mark" href="#top"><span>GLOCAL</span><b>LIVE</b></a><p>La ciudad está pasando.<br />Encuentra tu lugar.</p><WhatsAppLink /></div><div className="footer-columns">{columns.map((column) => <div key={column.title}><strong>{column.title}</strong>{column.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>)}</div></div><div className="footer-bottom"><span>© 2026 Glocal Live</span><span>Hecho para vivir en presente.</span></div><div className="footer-line" /></div></footer>;
}
