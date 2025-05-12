import './index.css'
import { NavBar } from './components/NavBar'
import { ContactForm } from './components/ContactForm'
import WhyUs from './components/WhyUs'
import { ThemeProvider } from "@/components/theme-provider"
import Services from './components/Services'
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
          <WhyUs />
          <Services />
          <PickUp />
          <ContactForm />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
