'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from './language-provider'

export function CtaBand({ showPricing = true }: { showPricing?: boolean }) {
  const { t, lang } = useLanguage()
  const isUrdu = lang === 'ur'

  return (
    <section className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-3xl bg-navy px-6 py-12 text-center text-white md:flex-row md:justify-between md:px-12 md:text-start">
        <div className="flex max-w-2xl flex-col gap-2">
          <h2 className={cn('font-bold text-balance', isUrdu ? 'text-2xl leading-[1.8] md:text-3xl' : 'text-2xl tracking-tight md:text-3xl')}>
            {t.ctaBand.title}
          </h2>
          <p className={cn('text-white/75', isUrdu && 'leading-loose')}>{t.ctaBand.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
          >
            {t.ctaBand.primary}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
          {showPricing && (
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.ctaBand.secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
