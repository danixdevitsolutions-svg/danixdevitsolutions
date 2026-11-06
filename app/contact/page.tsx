import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us | DaniXdev IT Solutions',
  description: 'Get in touch with DaniXdev IT Solutions. Call 0328 1121958 or email danixdevworkstation@gmail.com.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero page="contact" />
      <ContactSection />
    </main>
  )
}
