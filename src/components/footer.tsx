"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Music2, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitNetlifyForm } from "@/lib/forms"
import { usePathname } from "next/navigation"

export function Footer() {
  const { t, language } = useLanguage()
  const pathname = usePathname()
  const [email, setEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1E4jzo55sd/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/imagenglocal?t=_clkeYb0IbyBHTeMP8vbBg&s=09", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/imagenglocal/", label: "Instagram" },
    { icon: Music2, href: "https://www.tiktok.com/@imagen.glocal?_t=ZM-8uO8oN4oZHC&_r=1", label: "TikTok" },
  ]

  const navigationLinks = [
    { href: pathname === "/" ? "#home" : "/#home", label: t.nav.home },
    { href: pathname === "/" ? "#services" : "/#services", label: t.nav.services },
    { href: pathname === "/" ? "#about" : "/#about", label: t.nav.about },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: pathname === "/" ? "#plans" : "/#plans", label: t.nav.plans },
    { href: pathname === "/" ? "#creative-process" : "/#creative-process", label: t.nav.creativeProcess },
    { href: pathname === "/" ? "#contact" : "/#contact", label: t.nav.contact },
  ]

  const supportLinks = [
    { href: "/privacy", label: language === "es" ? "Política de privacidad" : "Privacy policy" },
    { href: "/terms", label: language === "es" ? "Términos y condiciones" : "Terms and conditions" },
    { href: "mailto:hola@imagen-glocal.com?subject=Consulta%20desde%20el%20sitio", label: "FAQ" },
    { href: pathname === "/" ? "#contact" : "/#contact", label: language === "es" ? "Soporte" : "Support" },
  ]

  const handleNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewsletterStatus("submitting")

    try {
      await submitNetlifyForm("newsletter", {
        email,
        language,
        subject: "Nueva suscripción — Newsletter Glocal",
      })
      setNewsletterStatus("success")
      setEmail("")
    } catch {
      setNewsletterStatus("error")
    }
  }

  return (
    <>
      <section id="newsletter" className="py-20 bg-gradient-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.newsletter.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{t.newsletter.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.newsletter.description}</p>

            {newsletterStatus === "success" ? (
              <output className="flex items-center justify-center gap-2 text-green-600 font-medium">
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                {language === "es" ? "Suscripción registrada. Gracias." : "Subscription registered. Thank you."}
              </output>
            ) : (
              <form name="newsletter" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleNewsletter} className="max-w-md mx-auto">
                <input type="hidden" name="form-name" value="newsletter" />
                <input type="hidden" name="subject" data-remove-prefix value="Nueva suscripción — Newsletter Glocal" />
                <p className="hidden"><label htmlFor="newsletter-bot-field">Do not fill this out</label><input id="newsletter-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" /></p>
                <label htmlFor="newsletter-email" className="sr-only">{t.newsletter.placeholder}</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input id="newsletter-email" name="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t.newsletter.placeholder} className="flex-1" />
                  <Button type="submit" disabled={newsletterStatus === "submitting"} className="bg-gradient-primary hover:opacity-90 text-white">
                    {newsletterStatus === "submitting" ? (language === "es" ? "Registrando…" : "Registering…") : t.newsletter.button}
                  </Button>
                </div>
                {newsletterStatus === "error" && (
                  <div className="flex items-center justify-center gap-2 text-sm text-destructive mt-3" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {language === "es" ? "No pudimos registrar tu correo. Intenta nuevamente." : "We could not register your email. Please try again."}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6" aria-label="Conexión Glocal - inicio">
                <Image src="/logo-dark.png" alt="Conexión Glocal" width={187} height={73} className="h-16 w-auto dark:hidden" />
                <Image src="/logo-light.png" alt="" aria-hidden="true" width={187} height={73} className="hidden h-16 w-auto dark:block" />
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">{t.footer.description}</p>
              <p className="mb-2 text-muted-foreground"><a href="mailto:hola@imagen-glocal.com" className="transition-colors hover:text-primary">hola@imagen-glocal.com</a></p>
              <p className="mb-6 text-muted-foreground"><a href="https://api.whatsapp.com/send?phone=523319627565&text=Hola%2C%20vengo%20del%20sitio%20de%20Conexi%C3%B3n%20Glocal" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">WhatsApp: +52 33 1962 7565</a></p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6">{t.footer.navigation}</h3>
              <ul className="space-y-3">{navigationLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link></li>)}</ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6">{t.footer.support}</h3>
              <ul className="space-y-3">{supportLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link></li>)}</ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
              <div>{t.footer.company}</div>
              <div>Copyright © {new Date().getFullYear()} Conexión Glocal. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
