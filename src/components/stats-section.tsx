"use client"

import { motion } from "framer-motion"
import { Brain, TrendingUp, Users, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function StatsSection() {
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring" as const },
    },
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t.services.digitalPresence.title}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.services.digitalPresence.description}
            </h2>

            <div className="mb-8">
              <p className="text-xl font-semibold text-gradient">
                {t.services.digitalPresence.cta}
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 px-8 py-3"
            >
              <Brain className="w-5 h-5 mr-2" />
              {t.services.digitalPresence.cta}
            </Button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-8"
          >
            {/* Growth Stat */}
            <motion.div
              variants={statVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>

                {/* Floating sparkles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-4xl md:text-5xl font-bold text-gradient"
                >
                  200%+
                </motion.div>
                <p className="text-lg font-semibold text-foreground">
                  {t.services.stats.growth}
                </p>
              </div>
            </motion.div>

            {/* Loyalty Stat */}
            <motion.div
              variants={statVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>

                {/* Floating sparkles */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-2 -left-2"
                >
                  <Sparkles className="w-6 h-6 text-purple-secondary" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-4xl md:text-5xl font-bold text-gradient"
                >
                  95%+
                </motion.div>
                <p className="text-lg font-semibold text-foreground">
                  {t.services.stats.loyalty}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full opacity-30" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-secondary rounded-full opacity-40" />
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-primary/20 rounded-full" />
    </section>
  )
}
