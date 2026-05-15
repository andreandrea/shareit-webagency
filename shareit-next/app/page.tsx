import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import News from '@/components/sections/News'
import Quiz from '@/components/sections/Quiz'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="background">
        <Services />
        <About />
        <Portfolio />
        <News />
        <Quiz />
        <Contact />
      </main>
    </>
  )
}
