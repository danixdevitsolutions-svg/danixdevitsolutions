import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { TeamSection } from '@/components/team-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Our Team | DaniXdev IT Solutions',
  description: 'Meet the team behind DaniXdev IT Solutions, led by founder and CEO Daniyal Burfat.',
}

export default function TeamPage() {
  return (
    <main>
      <PageHero page="team" />
      <TeamSection />
      <CtaBand />
    </main>
  )
}
