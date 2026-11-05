'use client'

import { Cloud, Code2, Megaphone, Palette, Search, ShieldCheck, Smartphone, TerminalSquare } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons = [Code2, Smartphone, Palette, TerminalSquare, Search, Megaphone, Cloud, ShieldCheck]

export function ServicesSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="services" aria-labelledby="services-title" className="bg-secondary/60 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeading id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <li
                key={service.title}
                className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className={`text-sm text-muted-foreground ${lang === 'ur' ? 'leading-loose' : 'leading-relaxed'}`}>{service.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
