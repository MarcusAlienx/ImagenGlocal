"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

export function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1E4jzo55sd/",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://x.com/imagenglocal?t=_clkeYb0IbyBHTeMP8vbBg&s=09",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/imagenglocal/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.tiktok.com/@imagen.glocal?_t=ZM-8uO8oN4oZHC&_r=1",
      label: "LinkedIn",
    },
  ]

  const navigationLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#plans", label: t.nav.plans },
    { href: "#creative-process", label: t.nav.creativeProcess },
    { href: "#contact", label: t.nav.contact },
  ]

  const supportLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Terms & Conditions" },
  ]

  return (
    <>
      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t.newsletter.subtitle}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.newsletter.title}
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              {t.newsletter.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:opacity-90 text-white">
                {t.newsletter.button}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={
                    theme === "light"
                      ? "/logo-dark.png"
                      : "/logo-light.png"
                  }
                  alt="Imagen Glocal"
                  width={200}
                  height={68}
                  className="h-12 w-auto"
                />
              </Link>

              <p className="text-muted-foreground mb-6 max-w-md">
                {t.footer.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">
                {t.footer.navigation}
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">
                {t.footer.support}
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                {t.footer.company}
              </div>
              <div className="text-muted-foreground text-sm">
                {t.footer.copyright}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
