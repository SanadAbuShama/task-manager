import './App.css'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/auth/AuthProvider'
import { ThemeProvider } from './context/theme/ThemeProvider'
import Router from './Router'
import { LanguageProvider } from './context/language/LanguageProvider'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme='light'>
          <LanguageProvider>
            <Router />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
