import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Holla', 'Hello', 'Salut', 'Jambo']

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/JosueBatey', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/josuebatey', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ish.josh_/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/batey.joshua.1/', label: 'Facebook' },
    { icon: Github, href: 'https://github.com/Bateyjosue', label: 'GitHub' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-52 right-20 w-1 h-1 bg-neon-blue rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-pink rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting with typewriter effect */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-cyber font-bold"
          >
            <span className="text-white">👋</span>
            <span className="text-neon-green glow-text ml-4">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-cyber font-bold text-white"
          >
            I'm <span className="text-neon-blue glow-text">Josue Batey</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-gaming text-neon-green glow-text"
          >
            Full-Stack Software Engineer
          </motion.h2>

          {/* Enhanced Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="text-neon-blue font-semibold">3+ years</span> of experience crafting innovative, 
              scalable web applications with a passion for clean code and exceptional user experiences. 
              Specialized in modern full-stack development using cutting-edge technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="cyber-border bg-cyber-gray/30 p-4 rounded-lg"
              >
                <div className="text-neon-green font-bold text-lg">Frontend</div>
                <div className="text-sm text-gray-300">React.js • TypeScript • TailwindCSS</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="cyber-border bg-cyber-gray/30 p-4 rounded-lg"
              >
                <div className="text-neon-blue font-bold text-lg">Backend</div>
                <div className="text-sm text-gray-300">Node.js • Nest.js • Ruby on Rails • Python • SAP CAP</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="cyber-border bg-cyber-gray/30 p-4 rounded-lg"
              >
                <div className="text-neon-purple font-bold text-lg">Database</div>
                <div className="text-sm text-gray-300">PostgreSQL • MongoDB • Redis</div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-base md:text-lg text-gray-400 italic"
            >
              "Transforming complex business requirements into elegant, performant solutions 
              that drive user engagement and business growth."
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-cyber-gray border border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-6 h-6 text-neon-green" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#projects"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-neon-green hover:text-neon-blue transition-colors duration-300"
            >
              <span className="text-sm mb-2 font-gaming">Explore My Work</span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scan line effect */}
      <div className="scan-line"></div>
    </section>
  )
}

export default Hero