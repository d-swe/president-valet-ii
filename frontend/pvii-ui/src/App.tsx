import './index.css'
import { NavBar } from './components/NavBar'
import { ContactForm } from './components/ContactForm'
import MainCard from './components/MainCard'
import { ThemeProvider } from "@/components/theme-provider"
import ServiceCarousel from './components/ServiceCarousel'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import PickUp from './components/PickUp'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <main >
          <LandingPage />
          <MainCard />
          <ServiceCarousel />
          <PickUp />
          <ContactForm />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
