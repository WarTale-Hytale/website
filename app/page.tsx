import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GameModes from '@/components/GameModes'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GameModes />
      <About />
      <Footer />
    </main>
  )
}
