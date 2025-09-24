import { useEffect, useState } from "react"
import { ThemeProviderContext, type Theme } from "./themeContext"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

const THEME_STORAGE_KEY = 'theme';

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || defaultTheme
  )

  const switchTheme = () => setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
    switchTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}