'use client'

import Image from 'next/image'
import { Crown } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const photos: (string | null)[] = ['/images/daniyal-burfat.jpg', null, null, null]
const initials = ['DB', 'AH', 'AA', 'SB']

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" aria-labelledby="team-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeading id="team-title" eyebrow={t.team.eyebrow} title={t.team.title} subtitle={t.team.subtitle} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, i) => {
            const photo = photos[i]
            const isCeo = i === 0
            return (
              <li
                key={member.name}
                className={`flex flex-col overflow-hidden rounded-3xl border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/10 ${
                  isCeo ? 'border-primary/40 ring-2 ring-primary/15' : 'border-border'
                }`}
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-secondary to-primary/15">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span
                        aria-hidden="true"
                        dir="ltr"
                        className="flex size-28 items-center justify-center rounded-full bg-navy font-sans text-3xl font-bold text-white shadow-lg"
                      >
                        {initials[i]}
                      </span>
                    </div>
                  )}
                  {isCeo && (
                    <span className="absolute top-4 start-4 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                      <Crown className="size-3.5" aria-hidden="true" />
                      CEO
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 p-5 text-center">
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.sub}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
