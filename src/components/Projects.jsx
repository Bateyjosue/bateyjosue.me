import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      name: 'Moni Share',
      description: 'Car renting app facilitating vehicle registration, location sharing, and real-time tracking with advanced gaming-style UI',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
      liveUrl: 'https://www.monishare-jb.netlify.app',
      sourceUrl: 'https://github.com/Bateyjosue/monishare',
      featured: true,
    },
    {
      id: 2,
      name: 'Amani Fest',
      description: 'Festival platform for Amani Festival with ticket booking, event information, and interactive features',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      liveUrl: 'https://amani-fest-jb.netlify.app/',
      sourceUrl: 'https://github.com/Bateyjosue/amani-fest',
      featured: true,
    },
    {
      id: 3,
      name: 'Notion Clone',
      description: 'Advanced note-taking app with slash commands, real-time editing, and modern UI inspired by Notion',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'TailwindCSS', 'HTML'],
      liveUrl: 'https://www.notion-clone-jb.netlify.app/',
      sourceUrl: 'https://github.com/Bateyjosue/notion-clone',
      featured: true,
    },
    {
      id: 4,
      name: 'The Meal',
      description: 'Recipe discovery app with meal information from around the world using MealDB API',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Webpack', 'HTML', 'CSS'],
      liveUrl: 'https://bateyjosue.github.io/The-Meal/',
      sourceUrl: 'https://github.com/Bateyjosue/The-Meal',
      featured: false,
    },
    {
      id: 5,
      name: 'Mi Budget',
      description: 'Budget management application with category-based transaction tracking and financial insights',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'RSpec'],
      liveUrl: 'https://www.loom.com/share/7b1e4eb40a95466a81104a080ffe2042',
      sourceUrl: 'https://github.com/Bateyjosue/mi_bugdet',
      featured: false,
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cyber-border bg-cyber-gray rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60"></div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-neon-green text-cyber-dark px-2 py-1 rounded text-xs font-bold">
            FEATURED
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cyber font-bold text-neon-green mb-2 group-hover:glow-text transition-all duration-300">
          {project.name}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-cyber-dark border border-neon-blue/30 text-neon-blue text-xs rounded font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-neon-green text-cyber-dark px-4 py-2 rounded font-bold hover:bg-neon-blue transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
          
          <motion.a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border border-neon-green text-neon-green px-4 py-2 rounded font-bold hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
          >
            <Github size={16} />
            <span>Source</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white mb-4">
            My <span className="text-neon-green glow-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-border bg-cyber-gray text-neon-green px-8 py-3 rounded-lg font-bold hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects