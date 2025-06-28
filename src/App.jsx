import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import MatrixRain from './components/MatrixRain'

function App() {
  return (
    <div className="relative min-h-screen bg-cyber-dark">
      <MatrixRain />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App