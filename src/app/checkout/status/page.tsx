import Link from "next/link";

const copy = {
  success: { title: "Pago recibido", message: "Mercado Pago reportó el regreso como aprobado. Confirmaremos tu acceso cuando la notificación oficial sea validada." },
  pending: { title: "Pago pendiente", message: "Tu operación sigue en proceso. No necesitas volver a pagar; espera la confirmación del proveedor." },
  failure: { title: "No se completó el pago", message: "Mercado Pago no pudo completar la operación. Puedes regresar e intentarlo nuevamente." },
} as const;

export default async function CheckoutStatusPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const result = copy[status as keyof typeof copy] ?? copy.pending;
  return <main className="grid min-h-screen place-items-center bg-[#090a08] px-5 text-white"><section className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/[.04] p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-lime-300">Checkout Pro · Mercado Pago</p><h1 className="mt-3 text-3xl font-semibold">{result.title}</h1><p className="mt-4 leading-7 text-white/60">{result.message}</p><p className="mt-5 rounded-xl bg-white/[.04] p-4 text-xs text-white/45">Esta pantalla de retorno no emite boletos por sí sola. La confirmación definitiva debe provenir de un webhook validado del proveedor.</p><Link href="/" className="mt-7 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-bold text-black">Volver a Glocal Live</Link></section></main>;
}
