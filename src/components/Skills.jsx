import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      color: 'neon-green',
      skills: ['JavaScript', 'TypeScript', 'Ruby', 'Python', 'SQL'],
    },
    {
      icon: Database,
      title: 'Frameworks',
      color: 'neon-blue',
      skills: ['React.js', 'Nest.js', 'TailwindCSS', 'FastAPI/Flask', 'Ruby on Rails', 'PostgreSQL'],
    },
    {
      icon: Wrench,
      title: 'Tools & Skills',
      color: 'neon-purple',
      skills: ['Git/GitHub', 'Docker', 'Redux', 'Figma/Photoshop', 'Postman', 'Heroku/Render', 'Jest', 'RSpec'],
    },
  ]

  const SkillCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="cyber-border bg-cyber-gray rounded-lg p-8 hover:scale-105 transition-all duration-300 group"
    >
      <div className="text-center mb-6">
        <div className={`inline-flex p-4 rounded-full bg-${category.color}/10 mb-4 group-hover:animate-pulse`}>
          <category.icon className={`w-12 h-12 text-${category.color}`} />
        </div>
        <h3 className={`text-2xl font-cyber font-bold text-${category.color} glow-text`}>
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
            viewport={{ once: true }}
            className={`cyber-border bg-cyber-dark p-3 rounded text-center font-medium text-${category.color} hover:bg-${category.color}/10 transition-all duration-300 cursor-default`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white mb-4">
            My <span className="text-neon-purple glow-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Gaming-style progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 cyber-border bg-cyber-gray p-8 rounded-lg"
        >
          <h3 className="text-2xl font-cyber font-bold text-neon-green text-center mb-8 glow-text">
            SKILL LEVELS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Frontend Development', level: 95 },
              { skill: 'Backend Development', level: 90 },
              { skill: 'Database Design', level: 85 },
              { skill: 'DevOps & Deployment', level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between text-white font-medium">
                  <span>{item.skill}</span>
                  <span className="text-neon-green">{item.level}%</span>
                </div>
                <div className="w-full bg-cyber-dark rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills