'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Expand, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

type Poster = { src: string; en: string; ur: string }

const posters: Poster[] = [
  { src: '/images/services/website-development.jpg', en: 'Website Development', ur: 'ویب سائٹ ڈیولپمنٹ' },
  { src: '/images/services/wordpress.jpg', en: 'WordPress Website Development', ur: 'ورڈپریس ویب سائٹ ڈیولپمنٹ' },
  { src: '/images/services/mobile-app.jpg', en: 'Mobile App Development', ur: 'موبائل ایپ ڈیولپمنٹ' },
  { src: '/images/services/software.jpg', en: 'Software & Desktop Applications', ur: 'سافٹ ویئر اور ڈیسک ٹاپ ایپلیکیشنز' },
  { src: '/images/services/school-management.jpg', en: 'School Management System', ur: 'اسکول مینجمنٹ سسٹم' },
  { src: '/images/services/seo.jpg', en: 'SEO Services', ur: 'ایس ای او سروسز' },
  { src: '/images/services/paid-ads.jpg', en: 'Paid Ads Management', ur: 'پیڈ ایڈز مینجمنٹ' },
  { src: '/images/services/social-media.jpg', en: 'Social Media Management', ur: 'سوشل میڈیا مینجمنٹ' },
  { src: '/images/services/graphic-design.jpg', en: 'Graphic Design', ur: 'گرافک ڈیزائن' },
  { src: '/images/services/video-editing.jpg', en: 'Video Editing', ur: 'ویڈیو ایڈیٹنگ' },
  { src: '/images/services/domain-hosting.jpg', en: 'Domain, Hosting & Website Setup', ur: 'ڈومین، ہوسٹنگ اور ویب سائٹ سیٹ اپ' },
]

const copy = {
  en: {
    eyebrow: 'Services & Pricing',
    title: 'Explore Our Service Packages',
    subtitle: 'Tap any poster to view its full details and pricing.',
    view: 'View details',
    order: 'Order on WhatsApp',
    close: 'Close',
  },
  ur: {
    eyebrow: 'سروسز اور قیمتیں',
    title: 'ہمارے سروس پیکجز دیکھیں',
    subtitle: 'مکمل تفصیل اور قیمت دیکھنے کے لیے کسی بھی پوسٹر پر کلک کریں۔',
    view: 'تفصیل دیکھیں',
    order: 'واٹس ایپ پر آرڈر کریں',
    close: 'بند کریں',
  },
}

const whatsappLink = (service: string) =>
  `https://wa.me/923281121958?text=${encodeURIComponent(`Hello DaniXdev, I am interested in ${service}.`)}`

export function ServicesGallery() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const isUrdu = lang === 'ur'
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Poster | null>(null)

  const open = (poster: Poster) => {
    setActive(poster)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((poster) => {
            const title = poster[lang]
            return (
              <li key={poster.src}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <button
                    type="button"
                    onClick={() => open(poster)}
                    className="relative block aspect-[4/5] w-full overflow-hidden bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`${t.view}: ${title}`}
                  >
                    <Image
                      src={poster.src}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute end-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-navy opacity-0 shadow transition-opacity group-hover:opacity-100">
                      <Expand className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                  <div className="flex flex-1 items-center justify-between gap-3 p-4">
                    <h3 className={cn('font-semibold text-navy', isUrdu ? 'leading-loose' : 'leading-snug')}>{title}</h3>
                    <a
                      href={whatsappLink(poster.en)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-navy"
                      aria-label={`${t.order}: ${title}`}
                    >
                      <MessageCircle className="size-5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={active?.[lang]}
        className="m-auto max-h-[95vh] w-[min(92vw,640px)] overflow-hidden rounded-2xl bg-card p-0 shadow-2xl backdrop:bg-navy/80"
      >
        {active && (
          <div className="flex max-h-[95vh] flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <h3 className="font-semibold text-navy">{active[lang]}</h3>
              <button
                type="button"
                onClick={close}
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-navy"
                aria-label={t.close}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto">
              <Image src={active.src} alt={active[lang]} width={1280} height={1600} className="h-auto w-full" />
            </div>
            <div className="border-t border-border p-4">
              <a
                href={whatsappLink(active.en)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-navy"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                {t.order}
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
