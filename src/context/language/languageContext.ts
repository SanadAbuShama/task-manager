import { createContext, useContext, type Dispatch, type SetStateAction } from "react"
import type { Languages } from "./LanguageProvider"

type LanguageProviderState = {
  language: Languages
  setLanguage: Dispatch<SetStateAction<Languages>>,
}

export const LanguageProviderContext = createContext<LanguageProviderState | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}