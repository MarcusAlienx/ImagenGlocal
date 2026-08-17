"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitNetlifyForm } from "@/lib/forms"

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
}

export function ContactSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [whatsappUrl, setWhatsappUrl] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      await submitNetlifyForm("contact", {
        ...formData,
        language,
        subject: "Nuevo lead — Formulario de contacto",
      })

      const whatsappMessage = language === "es"
        ? `¡Hola! Me contacto desde el sitio web de Conexión Glocal.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No indicado"}\nServicio: ${formData.service || "Por definir"}\n\nMensaje:\n${formData.message}`
        : `Hello! I am contacting you from the Conexión Glocal website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nService: ${formData.service || "To be defined"}\n\nMessage:\n${formData.message}`

      setWhatsappUrl(`https://api.whatsapp.com/send?phone=529989203002&text=${encodeURIComponent(whatsappMessage)}`)
      setIsSubmitted(true)
    } catch {
      setSubmitError(
        language === "es"
          ? "No pudimos registrar tu solicitud. Intenta nuevamente o contáctanos por WhatsApp."
          : "We could not register your request. Please try again or contact us on WhatsApp.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  const resetForm = () => {
    setFormData(emptyForm)
    setIsSubmitted(false)
    setWhatsappUrl("")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phoneLabel,
      value: "+52 998 920 3002",
      link: "tel:+529989203002",
    },
    {
      icon: Mail,
      title: t.contact.emailLabel.replace(" *", ""),
      value: "hola@imagen-glocal.com",
      link: "mailto:hola@imagen-glocal.com",
    },
    {
      icon: MapPin,
      title: t.contact.locationTitle,
      value: t.contact.locationValue,
      link: "https://www.google.com/maps/search/?api=1&query=Imagen+Glocal+Cancun+Quintana+Roo",
      external: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.nav.contact}</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t.contact.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}>
            <Card className="p-8 border-0 shadow-xl bg-background/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">{t.contact.formTitle}</h3>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10" aria-live="polite">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                    <h4 className="text-xl font-semibold mb-2">{t.contact.successTitle}</h4>
                    <p className="text-muted-foreground mb-6">{t.contact.successDescription}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <Button asChild className="bg-gradient-primary text-white">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                          {t.contact.whatsappButton}
                        </a>
                      </Button>
                      <Button variant="outline" onClick={resetForm}>
                        {language === "es" ? "Enviar otra solicitud" : "Send another request"}
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form name="contact" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="subject" data-remove-prefix value="Nuevo lead — Formulario de contacto" />
                    <p className="hidden">
                      <label htmlFor="contact-bot-field">Do not fill this out</label>
                      <input id="contact-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium mb-2">{t.contact.nameLabel}</label>
                        <Input id="contact-name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder={t.contact.namePlaceholder} />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium mb-2">{t.contact.emailLabel}</label>
                        <Input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" placeholder={t.contact.emailPlaceholder} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">{t.contact.phoneLabel}</label>
                        <Input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder={t.contact.phonePlaceholder} />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-sm font-medium mb-2">{t.contact.serviceLabel}</label>
                        <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border border-input rounded-md bg-background">
                          <option value="">{t.contact.servicePlaceholder}</option>
                          {t.contact.services.map((service) => <option key={service} value={service}>{service}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-2">{t.contact.messageLabel}</label>
                      <Textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required placeholder={t.contact.messagePlaceholder} rows={5} />
                    </div>

                    {submitError && (
                      <div className="flex items-start gap-2 text-sm text-destructive" role="alert">
                        <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 text-white py-3" size="lg">
                      {isSubmitting ? <span className="animate-pulse">{t.contact.submitting}</span> : <><Send className="w-5 h-5 mr-2" aria-hidden="true" />{t.contact.submitButton}</>}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.contactInfoTitle}</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a key={info.title} href={info.link} target={info.external ? "_blank" : undefined} rel={info.external ? "noopener noreferrer" : undefined} variants={itemVariants} className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div><p className="font-medium text-foreground">{info.title}</p><p className="text-muted-foreground">{info.value}</p></div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-primary text-white border-0">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-8 h-8" aria-hidden="true" />
                    <div><h4 className="font-bold text-lg">{t.contact.whatsappTitle}</h4><p className="text-white/80">{t.contact.whatsappSubtitle}</p></div>
                  </div>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90">
                    <a href={`https://api.whatsapp.com/send?phone=529989203002&text=${encodeURIComponent(language === "es" ? "¡Hola! Me gustaría conocer más sobre sus servicios." : "Hello! I would like to learn more about your services.")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />{t.contact.whatsappButton}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">{t.contact.hoursTitle}</h4>
              <div className="space-y-2 text-muted-foreground"><p>{t.contact.hoursWeekdays}</p><p>{t.contact.hoursSaturday}</p><p>{t.contact.hoursSunday}</p></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
