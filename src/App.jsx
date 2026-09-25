import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Method from './components/Method'
import PromptLibrary from './components/PromptLibrary'
import Bonuses from './components/Bonuses'
import Offer from './components/Offer'
import Audience from './components/Audience'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Method />
        <PromptLibrary />
        <Bonuses />
        <Offer />
        <Audience />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
