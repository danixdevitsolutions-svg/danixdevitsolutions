'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from './language-provider'

type PageKey = 'about' | 'services' | 'team' | 'pricing' | 'contact'

export function PageHero({ page }: { page: PageKey }) {
  const { t, lang } = useLanguage()
  const isUrdu = lang === 'ur'
  const content = t.pages[page]

  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-16 text-center md:px-6 md:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">{t.nav.home}</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4 rtl:rotate-180" />
            </li>
            <li aria-current="page" className="font-medium text-primary">{t.nav[page]}</li>
          </ol>
        </nav>
        <h1
          className={cn(
            'max-w-3xl font-extrabold text-balance text-navy',
            isUrdu ? 'text-3xl leading-[1.8] md:text-5xl md:leading-[1.7]' : 'text-4xl tracking-tight md:text-5xl',
          )}
        >
          {content.title}
        </h1>
        <p className={cn('max-w-2xl text-pretty text-muted-foreground', isUrdu ? 'text-base leading-loose md:text-lg' : 'text-lg leading-relaxed')}>
          {content.subtitle}
        </p>
      </div>
    </section>
  )
}
