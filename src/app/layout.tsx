import type { Metadata } from "next";
import "./globals.css";
import { GlocalAgent } from "@/components/glocal-agent/glocal-agent";
import { LanguageProvider } from "@/contexts/language-context";
export const metadata: Metadata = { title: "Glocal Live — Vive lo que está pasando ahora", description: "Descubre eventos y experiencias, compra tu acceso y conecta con organizadores en Glocal Live.", metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000") };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="antialiased"><LanguageProvider>{children}<GlocalAgent /></LanguageProvider></body></html>; }
