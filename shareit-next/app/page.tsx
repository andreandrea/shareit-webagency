import { getContent } from '@/lib/content'

import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/Services'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/News'
import Quiz from '@/components/sections/Quiz'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const heroData = getContent('hero')
  const howItWorksData = getContent('how-it-works')
  const aboutData = getContent('about')
  const portfolioData = getContent('portfolio')
  const pricingData = getContent('pricing')
  const faqData = getContent('faq')
  const quizData = getContent('quiz')

  return (
    <>
      <Hero data={heroData} />
      <main id="main-content" className="background">
        <HowItWorks data={howItWorksData} />
        <About data={aboutData} />
        <Portfolio data={portfolioData} />
        <Pricing data={pricingData} />
        <FAQ data={faqData} />
        <Quiz data={quizData} />
        <Contact />
      </main>
    </>
  )
}
