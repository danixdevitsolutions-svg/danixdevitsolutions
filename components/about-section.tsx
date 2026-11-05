'use client'

import { Eye, Target } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

export function AboutSection() {
  const { t, lang } = useLanguage()
  const body = lang === 'ur' ? 'leading-loose' : 'leading-relaxed'

  const cards = [
    { icon: Eye, title: t.about.visionTitle, text: t.about.vision },
    { icon: Target, title: t.about.missionTitle, text: t.about.mission },
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading id="about-title" align="start" eyebrow={t.about.eyebrow} title={t.about.title} />
          <p className={`text-lg text-muted-foreground ${body}`}>{t.about.text}</p>
        </div>

        <div className="grid gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-xl hover:shadow-primary/10 md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-navy">{title}</h3>
              </div>
              <p className={`text-muted-foreground ${body}`}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
