import './index.css'
import { NavBar } from './components/NavBar'
import { ContactForm } from './components/ContactForm'
import MainCard from './components/MainCard'
import { ThemeProvider } from "@/components/theme-provider"
import ServiceCarousel from './components/ServiceCarousel'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <main >
        <LandingPage />
        <MainCard />
        <ServiceCarousel />
        <ContactForm />
      </main>
      </ThemeProvider>
    </>
  )
}

export default App
