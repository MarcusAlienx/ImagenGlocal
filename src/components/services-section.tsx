"use client"

import { motion } from "framer-motion"
import {
  Lightbulb,
  Megaphone,
  Zap,
  Code,
  CheckCircle
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Lightbulb,
      title: t.services.strategy.title,
      items: t.services.strategy.items,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Megaphone,
      title: t.services.advertising.title,
      items: t.services.advertising.items,
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Zap,
      title: t.services.transformation.title,
      items: t.services.transformation.items,
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Code,
      title: t.services.development.title,
      items: t.services.development.items,
      color: "from-orange-500 to-red-500",
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
    <section id="services" className="py-20 bg-gradient-secondary">
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
              {t.services.subtitle}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            {t.services.title}
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            {t.services.description}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t.services.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
