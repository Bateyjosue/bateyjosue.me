import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Email validation
    if (formData.email !== formData.email.toLowerCase()) {
      alert('Please enter your email using lowercase!')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/JosueBatey', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/josuebatey', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ish.josh_/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/batey.joshua.1/', label: 'Facebook' },
    { icon: Github, href: 'https://github.com/Bateyjosue', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white mb-4">
            Get In <span className="text-neon-pink glow-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-neon-pink mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-border bg-cyber-gray p-8 rounded-lg"
          >
            <h3 className="text-2xl font-cyber font-bold text-neon-green mb-6 glow-text">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={30}
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-neon-green text-cyber-dark px-6 py-3 rounded-lg font-bold hover:bg-neon-blue transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-dark"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="cyber-border bg-cyber-gray p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-blue/10 rounded-lg">
                  <Mail className="w-8 h-8 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-cyber font-bold text-neon-blue">Email</h4>
                  <p className="text-gray-300">josuebatey19@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-border bg-cyber-gray p-6 rounded-lg">
              <h4 className="text-xl font-cyber font-bold text-neon-green mb-6 glow-text">
                Connect With Me
              </h4>
              <div className="grid grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-cyber-dark border border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 flex items-center justify-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-6 h-6 text-neon-green" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Gaming-style status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="cyber-border bg-gradient-to-r from-neon-green/20 to-neon-blue/20 p-6 rounded-lg text-center"
            >
              <div className="text-lg font-cyber font-bold text-neon-green mb-2">
                🟢 STATUS: ONLINE
              </div>
              <div className="text-gray-300">
                Available for new projects and collaborations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-neon-green/30 text-center"
      >
        <p className="text-gray-400">
          © 2024 Josue Batey. All rights reserved. Built with React & TailwindCSS
        </p>
      </motion.footer>
    </section>
  )
}

export default Contact