import React from 'react'
import { motion } from 'framer-motion'
import { Download, Code, Zap, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Technologies Mastered', value: '15+' },
    { icon: Target, label: 'Years Experience', value: '3+' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white mb-4">
            About <span className="text-neon-blue glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="cyber-border bg-cyber-gray p-8 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I can help you build a product, feature or website. Look through some of my work and experience! 
                If you like what you see and have a project you need coded, don't hesitate to contact me.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With a passion for creating innovative solutions, I specialize in full-stack development 
                using modern technologies. I love turning complex problems into simple, beautiful designs 
                that provide exceptional user experiences.
              </p>

              <motion.a
                href="https://docs.google.com/document/d/1ZPuV11QOFsNilfRrwazBINtpax33yDUkl0GLN982nDI/edit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-neon-blue text-cyber-dark px-6 py-3 rounded-lg font-bold hover:bg-neon-green transition-colors duration-300"
              >
                <Download size={20} />
                <span>Get My Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-border bg-cyber-gray p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <stat.icon className="w-8 h-8 text-neon-green" />
                  </div>
                  <div>
                    <div className="text-3xl font-cyber font-bold text-neon-green">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Gaming-style achievement badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="cyber-border bg-gradient-to-r from-neon-green/20 to-neon-blue/20 p-6 rounded-lg text-center"
            >
              <div className="text-2xl font-cyber font-bold text-neon-green mb-2">
                🏆 ACHIEVEMENT UNLOCKED
              </div>
              <div className="text-gray-300">
                Full-Stack Developer Level: Expert
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About