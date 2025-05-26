import './index.css'
import { NavBar } from './components/NavBar'
import { ContactForm } from './components/ContactForm'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import PickUp from './components/PickUp'

function App() {

  return (
    <>
      <NavBar />
      <main >
        <LandingPage />
        <WhyUs />
        <Services />
        <PickUp />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}

export default App
