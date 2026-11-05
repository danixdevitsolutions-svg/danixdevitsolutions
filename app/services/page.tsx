import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServicesSection } from '@/components/services-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Services | DaniXdev IT Solutions',
  description:
    'Web development, mobile apps, UI/UX design, software development, digital marketing, SEO, ads, cloud, IT support and cyber security services across Pakistan.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero page="services" />
      <ServicesSection />
      <CtaBand />
    </main>
  )
}
