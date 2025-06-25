"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function InnovationSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center text-white"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              {t.services.subtitle}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight"
          >
            {t.innovation.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-5xl mx-auto mb-12"
          >
            {t.innovation.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group"
            >
              <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {t.innovation.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-10 opacity-20"
            >
              <Zap className="w-12 h-12 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-1/4 right-10 opacity-20"
            >
              <Globe className="w-16 h-16 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
