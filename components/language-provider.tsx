'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Dictionary, type Lang } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ur' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Dictionary }}>
      <div className={lang === 'ur' ? 'font-urdu' : 'font-sans'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
