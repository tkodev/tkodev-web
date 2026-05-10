import { useCallback } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { ThemeMode } from '@/types/theme'

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme()

  const theme: ThemeMode = resolvedTheme === 'light' ? 'light' : 'dark'
  const inverseTheme: ThemeMode = resolvedTheme === 'light' ? 'dark' : 'light'

  const handleThemeModeSet = useCallback((newTheme: ThemeMode) => setTheme(newTheme), [setTheme])
  const handleThemeModeToggle = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  return { theme, inverseTheme, handleThemeModeSet, handleThemeModeToggle }
}

export { useTheme }
