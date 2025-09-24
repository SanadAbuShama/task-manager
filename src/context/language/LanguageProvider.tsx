import { useEffect, useState } from "react"
import { LanguageProviderContext } from "./languageContext"
import i18n from "i18next"

export type Languages = 'ar' | 'en'

type LanguageProviderProps = {
  children: React.ReactNode
}

export const LANGUAGE_STORAGE_KEY = 'language';

const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Languages;

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Languages>(storedLanguage ?? 'en')

  useEffect(() => {
    const root = window.document.documentElement

    console.log(root)

    if (language === 'ar') {
      root.setAttribute('dir', 'rtl')
    } else {
      root.setAttribute('dir', 'ltr')
    }
  }, [language])

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <LanguageProviderContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageProviderContext.Provider>
  )
}