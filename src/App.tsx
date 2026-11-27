import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/layout/navbar'
import { Link } from 'react-router-dom'
import HeroSection from './components/section/HeroSection'
import About from './components/section/AboutSection'
import Skills from './components/section/SkillsSection'
import PortfolioSection from './components/section/PortfolioSection'
import ExperienceSection from './components/section/ExperienceSection'
import TestimonialSection from './components/section/TestimonialSection'
import { ContactSection } from './components/section/ContactSection'
import { Footer } from './components/layout/footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <PortfolioSection />
      </div>
      <div>
        <ExperienceSection />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
