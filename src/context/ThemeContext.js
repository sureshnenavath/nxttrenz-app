import {createContext, useEffect, useMemo, useState} from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      return stored || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  const value = useMemo(() => ({theme, toggleTheme}), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext

export {ThemeProvider}
