import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutSection } from '@/components/about-section'
import { StatsSection } from '@/components/stats-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About Us | DaniXdev IT Solutions',
  description: 'Learn about DaniXdev IT Solutions, a Pakistan-based IT company founded in 2023, with our vision and mission.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero page="about" />
      <AboutSection />
      <StatsSection />
      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </main>
  )
}
