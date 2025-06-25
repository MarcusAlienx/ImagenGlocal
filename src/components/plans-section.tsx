"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PlansSection() {
  const { t } = useLanguage()

  const plans = [
    {
      title: t.plans.local.title,
      features: t.plans.local.features,
      cta: t.plans.local.cta,
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      title: t.plans.global.title,
      features: t.plans.global.features,
      cta: t.plans.global.cta,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      title: t.plans.leadership.title,
      features: t.plans.leadership.features,
      cta: t.plans.leadership.cta,
      icon: Crown,
      color: "from-orange-500 to-red-500",
      popular: false,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="plans" className="py-20 bg-background">
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
              Promociones Especiales
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t.plans.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {t.plans.subtitle}
          </motion.p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              variants={itemVariants}
              className="group relative"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border hover:border-primary/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Más Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-primary hover:opacity-90 text-white'
                        : 'bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    } transition-all duration-300`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Necesitas algo más específico? Contáctanos para una propuesta personalizada.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            {t.additionalServices.consulting}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
