"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AdditionalServicesSection() {
  const { t, language } = useLanguage()

  const descriptions = language === "es"
    ? [
        "Potenciamos tu marca en plataformas digitales con estrategia y contenido relevante.",
        "Diseñamos experiencias web claras, rápidas y orientadas a conversión.",
        "Desarrollamos estrategias de comunicación que fortalecen tu mensaje y reputación.",
        "Creamos contenido audiovisual profesional para contar tu historia con impacto.",
        "Automatizamos atención y calificación de oportunidades con asistentes conversacionales.",
        "Construimos experiencias de comercio electrónico enfocadas en ventas y operación.",
        "Producimos comerciales y podcasts que elevan tu presencia de marca.",
        "Diseñamos identidades de marca coherentes, memorables y fáciles de aplicar.",
      ]
    : [
        "We grow your brand across digital platforms with strategy and relevant content.",
        "We design clear, fast web experiences focused on conversion.",
        "We build communication strategies that strengthen your message and reputation.",
        "We create professional audiovisual content that tells your story with impact.",
        "We automate support and lead qualification with conversational assistants.",
        "We build e-commerce experiences focused on sales and operations.",
        "We produce commercials and podcasts that elevate your brand presence.",
        "We design coherent, memorable brand identities that are easy to apply.",
      ]

  const services = [
    {
      title: t.additionalServices.socialMedia.title,
      image: "/services/social.webp",
      description: descriptions[0],
    },
    {
      title: t.additionalServices.webDesign.title,
      image: "/services/web-design.webp",
      description: descriptions[1],
    },
    {
      title: t.additionalServices.communication.title,
      image: "/services/communication.webp",
      description: descriptions[2],
    },
    {
      title: t.additionalServices.audiovisual.title,
      image: "/services/audiovisual.webp",
      description: descriptions[3],
    },
    {
      title: t.additionalServices.chatbot.title,
      image: "/services/chatbot.webp",
      description: descriptions[4],
    },
    {
      title: t.additionalServices.ecommerce.title,
      image: "/services/ecommerce.webp",
      description: descriptions[5],
    },
    {
      title: t.additionalServices.production.title,
      image: "/services/production.webp",
      description: descriptions[6],
    },
    {
      title: t.additionalServices.branding.title,
      image: "/services/branding.webp",
      description: descriptions[7],
    },
    {
      title: t.additionalServices.brandDna.title,
      image: "/services/dna.webp",
      description: t.additionalServices.brandDna.description,
    },
    {
      title: t.additionalServices.aiMicroApps.title,
      image: "/services/microapps.webp",
      description: t.additionalServices.aiMicroApps.description,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="additional-services" className="py-20 bg-gradient-secondary scroll-mt-20">
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
              Los mejores servicios
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t.additionalServices.title}
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-8 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white"
              onClick={() => {
                const el = document.getElementById('brand-dna')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              {t.brandDna.submitButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.additionalServices.consulting}
            </Button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover overlay with arrow */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              {t.additionalServices.techDescription}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {t.additionalServices.techTitle}
            </h3>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                const el = document.getElementById('brand-dna')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t.brandDna.submitButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
