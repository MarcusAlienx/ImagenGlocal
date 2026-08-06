"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Loader2, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

export function BrandDnaSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    contact: "",
  })

  const [status, setStatus] = useState<"idle" | "analyzing" | "success">("idle")
  const [loadingStep, setLoadingStep] = useState(0)

  const loadingMessages = t.brandDna.loadingMessages

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (status === "analyzing") {
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingMessages.length - 1) return prev + 1
          clearInterval(interval)
          setTimeout(() => setStatus("success"), 1000)
          return prev
        })
      }, 1200)
    }
    return () => clearInterval(interval)
  }, [status, loadingMessages.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.url || !formData.name || !formData.contact) return
    setStatus("analyzing")
    setLoadingStep(0)

    // In a real app, we would send the lead data to the backend here
    // e.g. using fetch('/api/leads', { method: 'POST', body: JSON.stringify(formData) })
    // sending to direccion@imagen-glocal.com and gdl@imagen-glocal.com
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="brand-dna" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {t.brandDna.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {t.brandDna.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.brandDna.description}
            </p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">{t.brandDna.formUrlLabel}</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          name="url"
                          type="url"
                          placeholder={t.brandDna.formUrlPlaceholder}
                          required
                          value={formData.url}
                          onChange={handleChange}
                          className="pl-10 py-6 text-lg bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">{t.brandDna.formNameLabel}</label>
                        <Input
                          name="name"
                          placeholder={t.brandDna.formNamePlaceholder}
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="py-5 bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">{t.brandDna.formContactLabel}</label>
                        <Input
                          name="contact"
                          placeholder={t.brandDna.formContactPlaceholder}
                          required
                          value={formData.contact}
                          onChange={handleChange}
                          className="py-5 bg-background/50"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-6 text-lg bg-gradient-primary hover:opacity-90 text-white group mt-4 shadow-lg shadow-primary/25"
                    >
                      {t.brandDna.submitButton}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.form>
                )}

                {status === "analyzing" && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-16 text-center space-y-8"
                  >
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                      <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
                      <Search className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
                    </div>

                    <div className="space-y-2 h-16">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={loadingStep}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-xl font-medium text-foreground"
                        >
                          {loadingMessages[loadingStep]}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-sm text-muted-foreground">{t.brandDna.processing} {formData.url}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-secondary rounded-full h-2 max-w-xs mx-auto overflow-hidden">
                      <motion.div
                        className="bg-primary h-full rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{t.brandDna.successTitle}</h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      {t.brandDna.successDescription} ({formData.contact}).
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setStatus("idle")
                        setFormData({ url: "", name: "", contact: "" })
                      }}
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      {t.brandDna.analyzeAnother}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
