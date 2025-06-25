"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Create WhatsApp message
    const whatsappMessage = `¡Hola! Me contacto desde el sitio web de Imagen Glocal.

*Datos de contacto:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Servicio de interés: ${formData.service}

*Mensaje:*
${formData.message}

¡Espero su respuesta!`

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=523319627565&text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 33 1962 7565",
      link: "tel:+523319627565",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contacto@imagen-glocal.com",
      link: "mailto:contacto@imagen-glocal.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Guadalajara, Jalisco, México",
      link: "https://maps.google.com",
    },
  ]

  const services = [
    "Estrategia y Creatividad",
    "Publicidad y Posicionamiento",
    "Transformación Digital",
    "Desarrollo Web y E-Commerce",
    "Consultoría Integral",
    "Otro servicio",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contacto
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            ¿Listo para transformar tu marca?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Contáctanos y descubre cómo podemos impulsar tu negocio al siguiente nivel con estrategias digitales innovadoras.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <Card className="p-8 border-0 shadow-xl bg-background/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h4>
                    <p className="text-muted-foreground">
                      Te hemos redirigido a WhatsApp. Responderemos pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Teléfono
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+52 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Servicio de interés
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-input rounded-md bg-background"
                        >
                          <option value="">Selecciona un servicio</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 text-white py-3"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-primary text-white border-0">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <h4 className="font-bold text-lg">¿Prefieres WhatsApp?</h4>
                      <p className="text-white/80">Respuesta inmediata</p>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=523319627565&text=¡Hola! Me gustaría conocer más sobre sus servicios de marketing digital.', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chatear ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Horarios de atención</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
