"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AdditionalServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      title: t.additionalServices.socialMedia.title,
      image: "https://ext.same-assets.com/4272769446/2058064714.png",
      description: "Potenciamos tu marca en todas las plataformas digitales con estrategias creativas y contenido que conecta.",
    },
    {
      title: t.additionalServices.webDesign.title,
      image: "https://ext.same-assets.com/4272769446/3880356279.png",
      description: "Diseñamos experiencias web que convierten visitantes en clientes con tecnología de vanguardia.",
    },
    {
      title: t.additionalServices.communication.title,
      image: "https://ext.same-assets.com/4272769446/2838483477.png",
      description: "Desarrollamos estrategias de comunicación integral que amplifican tu mensaje y fortalecen tu marca.",
    },
    {
      title: t.additionalServices.audiovisual.title,
      image: "https://ext.same-assets.com/4272769446/4291736334.png",
      description: "Creamos contenido audiovisual de alta calidad que cuenta tu historia de manera impactante.",
    },
    {
      title: t.additionalServices.chatbot.title,
      image: "https://ext.same-assets.com/2746524643/3039304126.jpeg",
      description: "Automatización inteligente con IA para mejorar la experiencia de tus clientes 24/7.",
    },
    {
      title: t.additionalServices.ecommerce.title,
      image: "https://ext.same-assets.com/2746524643/3195783688.jpeg",
      description: "Soluciones completas de comercio electrónico que maximizan tus ventas online.",
    },
    {
      title: t.additionalServices.production.title,
      image: "https://ext.same-assets.com/2746524643/870499112.jpeg",
      description: "Producción profesional de comerciales y podcasts que elevan tu presencia mediática.",
    },
    {
      title: t.additionalServices.branding.title,
      image: "https://ext.same-assets.com/2746524643/3652059870.jpeg",
      description: "Desarrollamos identidades de marca memorables que conectan emocionalmente con tu audiencia.",
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
    <section className="py-20 bg-gradient-secondary">
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

          <motion.div variants={itemVariants} className="mb-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white"
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
            >
              {t.additionalServices.techCta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
