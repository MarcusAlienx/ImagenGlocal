"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { ParallaxContainer, FloatingElement } from "@/components/parallax-container"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Background decorative elements */}
      <ParallaxContainer speed={0.2} direction="right" className="absolute top-20 left-10">
        <div className="w-32 h-32 border border-white/20 rounded-full" />
      </ParallaxContainer>
      <ParallaxContainer speed={0.3} direction="left" className="absolute bottom-32 right-16">
        <div className="w-24 h-24 border border-white/10 rounded-full" />
      </ParallaxContainer>
      <ParallaxContainer speed={0.1} direction="up" className="absolute top-1/2 right-1/4">
        <div className="w-16 h-16 border border-white/15 rounded-full" />
      </ParallaxContainer>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                {t.hero.agency}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="mb-8">
              <p className="text-lg font-semibold text-white">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {t.innovation.cta}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-primary px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {t.additionalServices.consulting}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <ParallaxContainer speed={0.3} direction="up" className="relative">
              <Image
                src="https://ext.same-assets.com/4272769446/237523159.jpeg"
                alt="Team collaboration"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />

              {/* Floating elements */}
              <FloatingElement
                duration={4}
                amplitude={15}
                className="absolute -top-4 -right-4"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm" />
              </FloatingElement>
              <FloatingElement
                duration={3}
                delay={1}
                amplitude={12}
                className="absolute -bottom-4 -left-4"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm" />
              </FloatingElement>

              {/* Additional floating elements */}
              <FloatingElement
                duration={5}
                delay={2}
                amplitude={8}
                className="absolute top-1/2 -left-8"
              >
                <div className="w-12 h-12 bg-purple-500/30 rounded-full backdrop-blur-sm" />
              </FloatingElement>

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl pointer-events-none" />
            </ParallaxContainer>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
