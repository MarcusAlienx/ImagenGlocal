"use client"

import { motion } from "framer-motion"
import { Lightbulb, Zap, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function BrandSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Lightbulb,
      title: t.brand.ideas.title,
      description: t.brand.ideas.description,
    },
    {
      icon: Zap,
      title: t.brand.adaptability.title,
      description: t.brand.adaptability.description,
    },
    {
      icon: Users,
      title: t.brand.clients.title,
      description: t.brand.clients.description,
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t.brand.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-4"
          >
            {t.brand.subtitle}
          </motion.p>

          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gradient"
          >
            {t.brand.boldText}
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-primary/20 rounded-full animate-pulse" />
              </div>

              <h4 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/2 w-2 h-2 bg-primary rounded-full opacity-50" />
        <div className="absolute right-10 top-1/3 w-3 h-3 bg-purple-secondary rounded-full opacity-30" />
      </div>
    </section>
  )
}
