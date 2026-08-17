"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Loader2, CheckCircle, ArrowRight, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { submitNetlifyForm } from "@/lib/forms"

const emptyForm = { url: "", name: "", email: "", phone: "" }

export function BrandDnaSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    setError("")

    try {
      await submitNetlifyForm("brand-dna", {
        ...formData,
        language,
        subject: "Nueva solicitud — Diagnóstico de ADN de Marca",
      })
      setStatus("success")
    } catch {
      setStatus("idle")
      setError(language === "es" ? "No pudimos registrar tu solicitud. Intenta nuevamente." : "We could not register your request. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  return (
    <section id="brand-dna" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">{t.brandDna.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.brandDna.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.brandDna.description}</p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.form key="form" name="brand-dna" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="form-name" value="brand-dna" />
                    <input type="hidden" name="subject" data-remove-prefix value="Nueva solicitud — Diagnóstico de ADN de Marca" />
                    <p className="hidden"><label htmlFor="brand-dna-bot-field">Do not fill this out</label><input id="brand-dna-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" /></p>
                    <div>
                      <label htmlFor="brand-dna-url" className="block text-sm font-medium mb-2 text-foreground/80">{t.brandDna.formUrlLabel}</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
                        <Input id="brand-dna-url" name="url" type="url" placeholder={t.brandDna.formUrlPlaceholder} required value={formData.url} onChange={handleChange} className="pl-10 py-6 text-lg bg-background/50" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><label htmlFor="brand-dna-name" className="block text-sm font-medium mb-2 text-foreground/80">{t.brandDna.formNameLabel}</label><Input id="brand-dna-name" name="name" placeholder={t.brandDna.formNamePlaceholder} required value={formData.name} onChange={handleChange} autoComplete="name" className="py-5 bg-background/50" /></div>
                      <div><label htmlFor="brand-dna-email" className="block text-sm font-medium mb-2 text-foreground/80">{t.contact.emailLabel}</label><Input id="brand-dna-email" name="email" type="email" placeholder={t.contact.emailPlaceholder} required value={formData.email} onChange={handleChange} autoComplete="email" className="py-5 bg-background/50" /></div>
                      <div className="md:col-span-2"><label htmlFor="brand-dna-phone" className="block text-sm font-medium mb-2 text-foreground/80">{t.contact.phoneLabel}</label><Input id="brand-dna-phone" name="phone" type="tel" placeholder={t.contact.phonePlaceholder} value={formData.phone} onChange={handleChange} autoComplete="tel" className="py-5 bg-background/50" /></div>
                    </div>
                    {error && <div className="flex items-start gap-2 text-sm text-destructive" role="alert"><AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" /><span>{error}</span></div>}
                    <Button type="submit" className="w-full py-6 text-lg bg-gradient-primary hover:opacity-90 text-white group mt-4 shadow-lg shadow-primary/25">{t.brandDna.submitButton}<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></Button>
                  </motion.form>
                )}

                {status === "submitting" && (
                  <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-center" aria-live="polite">
                    <Loader2 className="w-14 h-14 text-primary animate-spin mx-auto mb-6" aria-hidden="true" />
                    <p className="text-xl font-medium">{language === "es" ? "Registrando tu solicitud…" : "Registering your request…"}</p>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center" aria-live="polite">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" aria-hidden="true" />
                    <h3 className="text-2xl font-bold mb-4">{t.brandDna.successTitle}</h3>
                    <p className="text-muted-foreground mb-8 text-lg">{t.brandDna.successDescription}</p>
                    <Button variant="outline" onClick={() => { setStatus("idle"); setFormData(emptyForm) }} className="border-primary text-primary hover:bg-primary/5">{t.brandDna.analyzeAnother}</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
