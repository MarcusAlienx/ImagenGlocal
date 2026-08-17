import Link from "next/link"

type Section = { title: string; paragraphs: string[] }

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: Section[] }) {
  return (
    <main className="min-h-screen bg-background py-16">
      <article className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="text-primary hover:underline">← Volver al inicio</Link>
        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-3">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: {updated}</p>
        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground">Contacto: hola@imagen-glocal.com · +52 998 920 3002</p>
      </article>
    </main>
  )
}
