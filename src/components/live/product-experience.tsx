import { Check, ChevronRight, QrCode, Search, TicketCheck, WalletCards } from "lucide-react";
import { purchaseSteps } from "./live-data";

export function HowItWorks() {
  return <section id="como-funciona" className="how-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Sin fricción</p><h2>Del plan al acceso<br />en cuatro momentos.</h2></div><p>Glocal conecta el descubrimiento con el checkout de la boletera oficial.</p></div><ol className="purchase-steps">{purchaseSteps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ChevronRight aria-hidden="true" /></li>)}</ol></div></section>;
}

function DemoQr() {
  const cells = [0,1,2,4,5,6,8,10,12,13,14,16,18,20,22,24,25,26,28,30,32,34,36,37,38,40,41,42,44,46,48];
  const grid = Array.from({ length: 49 }, (_, index) => ({ id: `qr-cell-${index + 1}`, active: cells.includes(index) }));
  return <div className="demo-qr" aria-label="Representación conceptual de código QR">{grid.map((cell) => <i key={cell.id} className={cell.active ? "on" : ""} />)}<span className="scan-line" /></div>;
}

export function QRExperience() {
  return <section className="qr-section"><div className="shell qr-layout"><div><p className="eyebrow"><span /> Acceso digital</p><h2>Tu acceso.<br /><span>En tu teléfono.</span></h2><p className="section-copy">La boletera oficial entrega tu acceso digital después del pago. Listo para presentar en la entrada.</p><ul className="feature-list"><li><Check /> Confirmación inmediata</li><li><Check /> Acceso protegido por el proveedor</li><li><Check /> Siempre disponible en tu correo</li></ul></div><div className="phone-stage"><div className="phone-glow" /><div className="phone"><div className="phone-bar" /><div className="ticket-brand">GLOCAL <b>LIVE</b></div><div className="ticket-art"><span>LIVE<br />NIGHT</span></div><div className="ticket-info"><span>21 AGO · 20:00</span><strong>Campus Night</strong><small>Distrito Glocal · Guadalajara</small></div><DemoQr /><div className="confirmed"><span><Check /></span> Acceso confirmado</div></div></div></div></section>;
}

export function ProductDemo() {
  return <section className="demo-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Producto en acción</p><h2>Así funciona<br />Glocal Live.</h2></div><p>Una experiencia conectada desde la búsqueda hasta la puerta.</p></div><div className="product-window"><div className="window-bar"><div><i /><i /><i /></div><span>glocal.live / experience</span><span className="demo-label">Recorrido del producto</span></div><div className="demo-canvas"><div className="demo-flow"><div className="demo-node active"><Search /><span>Descubre</span><small>Encuentra tu plan</small></div><i /><div className="demo-node"><TicketCheck /><span>Selecciona</span><small>Elige tu acceso</small></div><i /><div className="demo-node"><WalletCards /><span>Paga</span><small>Checkout seguro</small></div><i /><div className="demo-node"><QrCode /><span>Entra</span><small>Presenta tu QR</small></div></div><div className="demo-event-card"><span>RECOMENDADO PARA TI</span><div className="demo-event-art" /><h3>Glocal Live Campus Night</h3><p>Guadalajara · Viernes 21</p></div></div></div></div></section>;
}
