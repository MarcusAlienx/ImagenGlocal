"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote, ArrowRight, TrendingUp, Users, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      company: "Startup Tecnológica",
      image: "https://images.unsplash.com/photo-1494790108755-2616c7d58b1c?w=150&h=150&fit=crop&crop=face",
      quote: "Imagen Glocal transformó completamente nuestra presencia digital. En 6 meses aumentamos nuestras ventas en un 300% y posicionamos nuestra marca como líder en el sector.",
      rating: 5,
      results: {
        metric: "300%",
        description: "Aumento en ventas"
      }
    },
    {
      name: "Carlos Mendoza",
      position: "Director de Marketing",
      company: "Grupo Comercial del Bajío",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "El equipo de Imagen Glocal entiende perfectamente el mercado local y global. Su estrategia de social media nos ayudó a conectar con nuevas audiencias y aumentar el engagement significativamente.",
      rating: 5,
      results: {
        metric: "450%",
        description: "Más engagement"
      }
    },
    {
      name: "Ana Ruiz",
      position: "Fundadora",
      company: "EcoVerde Sustentable",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Trabajar con Imagen Glocal fue la mejor decisión. No solo crearon una identidad visual increíble, sino que desarrollaron una estrategia integral que nos posicionó como referente en sustentabilidad.",
      rating: 5,
      results: {
        metric: "200%",
        description: "Reconocimiento de marca"
      }
    },
  ]

  const caseStudies = [
    {
      title: "Transformación Digital Completa",
      client: "Restaurante La Tradición",
      challenge: "Modernizar su imagen y presencia digital para atraer nuevos clientes",
      solution: "Rediseño de marca, sitio web, estrategia de redes sociales y sistema de pedidos online",
      results: [
        { metric: "85%", description: "Aumento en reservas online" },
        { metric: "60%", description: "Nuevos clientes mensuales" },
        { metric: "40%", description: "Incremento en ventas" },
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Expansión Internacional",
      client: "Artesanías Mexicanas Premium",
      challenge: "Llevar productos artesanales mexicanos al mercado internacional",
      solution: "E-commerce multiidioma, estrategia de marketing internacional y logística digital",
      results: [
        { metric: "15", description: "Países de exportación" },
        { metric: "500%", description: "Ventas internacionales" },
        { metric: "90%", description: "Satisfacción del cliente" },
      ],
      image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?w=600&h=400&fit=crop",
      icon: Users,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Startup Unicornio",
      client: "FinTech Innovadora",
      challenge: "Posicionar una startup financiera en un mercado saturado",
      solution: "Branding disruptivo, campañas de thought leadership y estrategia de growth hacking",
      results: [
        { metric: "$50M", description: "Valuación alcanzada" },
        { metric: "100K", description: "Usuarios en 12 meses" },
        { metric: "95%", description: "Retención de usuarios" },
      ],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Testimonials Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Testimonios
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Historias reales de transformación y éxito que hablan por sí solas.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                <CardContent className="p-0">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`star-${testimonial.name}-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Resultado:</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {testimonial.results.metric} {testimonial.results.description}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Casos de Éxito
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proyectos que transformaron negocios
          </h2>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Icon overlay */}
                <div className={`absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center`}>
                  <study.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Badge className="mb-4 bg-primary/10 text-primary">
                  {study.client}
                </Badge>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Desafío:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solución:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <div key={`${study.title}-result-${i}`} className="text-center p-4 rounded-lg bg-gradient-secondary">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium group">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
