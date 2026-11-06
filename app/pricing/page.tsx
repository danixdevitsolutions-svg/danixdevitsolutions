import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PricingSection } from '@/components/pricing-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Pricing Packages | DaniXdev IT Solutions',
  description: 'Affordable, transparent IT and digital service packages for startups, businesses and enterprises in Pakistan.',
}

export default function PricingPage() {
  return (
    <main>
      <PageHero page="pricing" />
      <PricingSection />
      <CtaBand showPricing={false} />
    </main>
  )
}
