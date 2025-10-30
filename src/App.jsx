import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import CTA from './components/CTA.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-gray-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

export default App
