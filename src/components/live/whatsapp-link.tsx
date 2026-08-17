import { MessageCircle } from "lucide-react";

export function WhatsAppLink({ className = "whatsapp-link", compact = false }: { className?: string; compact?: boolean }) {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  if (!/^\d{8,15}$/.test(number)) return null;
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hola, quiero información sobre Glocal Live.";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Glocal Live por WhatsApp"><MessageCircle size={17} />{compact ? null : <span>WhatsApp</span>}</a>;
}
