import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import ProjectModal from './ProjectModal'

const getStatusBadge = (status) => {
  switch (status) {
    case 'online':
      return (
        <div className="absolute top-4 left-4 bg-neon-green text-cyber-dark px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
          <div className="w-2 h-2 bg-cyber-dark rounded-full animate-pulse"></div>
          <span>ONLINE</span>
        </div>
      )
    case 'maintenance':
      return (
        <div className="absolute top-4 left-4 bg-neon-pink text-cyber-dark px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
          <div className="w-2 h-2 bg-cyber-dark rounded-full animate-pulse"></div>
          <span>MAINTENANCE</span>
        </div>
      )
    default:
      return null
  }
}

const ProjectCard = ({ project, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    onClick={() => onSelect(project)}
    onKeyDown={(event) => {
      if (event.target !== event.currentTarget) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onSelect(project)
      }
    }}
    role="button"
    tabIndex={0}
    aria-haspopup="dialog"
    aria-label={`View details for ${project.name}`}
    className={`group relative cyber-border bg-cyber-gray rounded-lg overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-dark ${
      project.isLatest ? 'ring-2 ring-neon-green/50' : ''
    }`}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60"></div>

      {/* Touch hint */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-cyber-dark/80 px-2 py-1 text-[11px] font-bold text-neon-green md:hidden">
        <Eye size={12} />
        Details
      </div>

      {/* Hover hint */}
      <div className="absolute inset-0 flex items-center justify-center bg-cyber-dark/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <span className="flex items-center gap-2 rounded bg-neon-green px-4 py-2 text-sm font-bold text-cyber-dark">
          <Eye size={16} />
          View Details
        </span>
      </div>
      
      {/* Status Badge */}
      {getStatusBadge(project.status)}
      
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 bg-neon-blue text-cyber-dark px-2 py-1 rounded text-xs font-bold">
          FEATURED
        </div>
      )}
      
      {/* Latest Badge */}
      {project.isLatest && (
        <div className="absolute bottom-4 right-4 bg-neon-purple text-cyber-dark px-2 py-1 rounded text-xs font-bold animate-pulse">
          LATEST
        </div>
      )}
    </div>
    
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-cyber font-bold text-neon-green mb-2 group-hover:glow-text transition-all duration-300">
        {project.name}
      </h3>
      
      {project.role && (
        <p className="text-neon-blue text-xs font-semibold uppercase tracking-wide mb-2">
          {project.role}
        </p>
      )}
      
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
      
      <div
        className="flex flex-wrap gap-3 mt-auto"
        onClick={(event) => event.stopPropagation()}
      >
        {project.liveUrl !== '#' && project.status === 'online' ? (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-neon-green text-cyber-dark px-4 py-2 rounded font-bold hover:bg-neon-blue transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>{project.linkLabel || 'Live Demo'}</span>
          </motion.a>
        ) : project.status === 'maintenance' ? (
          <div className="flex items-center space-x-2 bg-neon-pink/20 border border-neon-pink text-neon-pink px-4 py-2 rounded font-bold cursor-not-allowed">
            <ExternalLink size={16} />
            <span>Under Maintenance</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 bg-gray-600 text-gray-300 px-4 py-2 rounded font-bold cursor-not-allowed">
            <ExternalLink size={16} />
            <span>Coming Soon</span>
          </div>
        )}
        
        {project.sourceUrl && (
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
        )}
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 12,
      name: 'FUDI Uganda',
      role: 'Web Developer',
      category: 'Client website',
      year: '2026',
      description: 'Landing page and content-managed website for Faith United Development Initiative, a community-based organisation supporting refugees and host communities in Nakivale, Uganda',
      overview:
        'FUDI Uganda (Faith United Development Initiative) is a faith-inspired, community-based organisation working with refugees, women, young people, and host communities in the Nakivale Refugee Settlement. I built the organisation\'s landing page and content-managed website, giving the team a bilingual English/French platform to publish programmes, field projects, news, and ways to donate or volunteer without needing a developer.',
      highlights: [
        'Bilingual English/French public site with programme, impact, and donation sections',
        'Content-managed news, media library, and project pages the FUDI team can update themselves',
        'Responsive, accessible layout designed for low-bandwidth visitors',
      ],
      image: '/fudi.jpg',
      gallery: ['/fudi.jpg', '/fudi-2.jpg', '/fudi-3.jpg'],
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Headless CMS'],
      liveUrl: 'https://www.fudi-ug.org',
      linkLabel: 'Visit Site',
      featured: true,
      status: 'online',
      isLatest: true,
    },
    {
      id: 9,
      name: 'SkillBridge',
      role: 'Backend Developer → Full-Stack Developer → Team Lead',
      category: 'Professional product',
      year: '2025 – 2026',
      description: 'AI-powered NESA exam preparation and learning platform serving 3,000+ active learners, with role-based learning, classroom management, assessments, reporting, and parent engagement',
      overview:
        'SkillBridge is an AI-powered NESA exam preparation platform used by 3,000+ learners in Rwanda. I joined as a backend developer and grew into a full-stack developer and technical lead, helping evolve the product from API work into a complete learning platform with role-based learning, classroom management, assessments, reporting, and parent engagement.',
      highlights: [
        'Scaled backend services and REST APIs for 3,000+ active learners',
        'Built AI-powered features with OpenAI APIs and optimised MongoDB performance',
        'Led delivery of assessments, reporting, classroom management, and parent engagement',
        'Mentored teammates and drove code reviews, testing, and Agile delivery',
      ],
      image: '/skillbridge.jpg',
      gallery: ['/skillbridge.jpg', '/skillbridge-2.jpg', '/skillbridge-3.jpg'],
      technologies: ['Next.js', 'React', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'OpenAI', 'Docker', 'GCP'],
      liveUrl: 'https://skillbridge.academy/en',
      linkLabel: 'Visit Site',
      featured: true,
      status: 'online',
      isLatest: true,
    },
    {
      id: 10,
      name: 'Kampe Store',
      role: 'Full-Stack Developer',
      category: 'Professional product',
      year: '2026',
      description: 'Scalable multi-store e-commerce platform for building and managing branded online stores, supporting physical products, digital products, service bookings, and AI-powered product discovery',
      overview:
        'Kampe is a multi-store e-commerce platform that lets businesses launch and manage branded online stores from a single ecosystem. I architected and built the platform end to end, covering physical products, digital products, service bookings, AI-powered product discovery, intelligent search, and cross-store exploration.',
      highlights: [
        'Multi-tenant store creation with custom branding and storefronts',
        'Physical products, digital downloads, and service bookings in one system',
        'AI-powered product discovery and intelligent search',
        'Automated testing to keep releases reliable as the platform grows',
      ],
      image: '/kampestore.jpg',
      gallery: ['/kampestore.jpg', '/kampestore-2.jpg', '/kampestore-3.jpg'],
      technologies: ['Next.js', 'PostgreSQL', 'TailwindCSS', 'AI Search'],
      liveUrl: 'https://www.kampestore.com/',
      linkLabel: 'Visit Site',
      featured: true,
      status: 'online',
      isLatest: true,
    },
    {
      id: 11,
      name: 'Miimo',
      role: 'Full-Stack Developer',
      category: 'Professional product',
      year: '2026',
      description: 'AI-powered recruitment platform for the DRC with candidate matching, an applicant tracking system, technical assessments, interview scheduling, and hiring analytics',
      overview:
        'Miimo is an AI-powered recruitment platform built for the DRC job market, designed around local realities: intermittent internet, mobile money, and phone-first users. I designed and built the product from the ground up — backend architecture, web app, AI candidate matching and scoring, applicant tracking, assessments, interview scheduling, analytics, notifications, job description generation, deployment, and ongoing maintenance.',
      highlights: [
        'AI-powered candidate matching, scoring, and side-by-side comparison',
        'Applicant Tracking System with pipeline stages, smart search, and filters',
        'Technical assessments with multiple-choice and coding questions',
        'Interview scheduling, employer analytics, and multi-channel job promotion',
        'Job offers with candidate preview, required skills, and visible hiring pipeline stages',
        'SMS alerts and a phone-first candidate flow that works on low bandwidth',
      ],
      image: '/miimo.jpg',
      gallery: [
        '/miimo.jpg',
        '/miimo-dashboard.jpg',
        '/miimo-offers.jpg',
        '/miimo-compare.jpg',
        '/miimo-assessments.jpg',
        '/miimo-interviews.jpg',
        '/miimo-offer.jpg',
        '/miimo-analytics.jpg',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'TailwindCSS'],
      liveUrl: 'https://www.miimo.work/',
      linkLabel: 'Visit Site',
      featured: true,
      status: 'online',
      isLatest: true,
    },
    {
      id: 1,
      name: 'Score Tracker App',
      category: 'Personal project',
      description: 'Interactive trivia score tracker for team competitions with live leaderboards and celebrations',
      overview:
        'A score tracker built for team-based trivia nights. Teams collect points across rounds, follow a live leaderboard, and see a celebratory animation when a winner is crowned. The app is a single-page React build with a game-show inspired interface and smooth Framer Motion transitions.',
      highlights: [
        'Round-by-round scoring for multiple teams',
        'Live leaderboard with animated position changes',
        'Winner celebration and responsive game-show UI',
      ],
      image: '/score.png',
      technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      liveUrl: 'https://creative-kitten-ffbe2a.netlify.app',
      sourceUrl: 'https://github.com/Bateyjosue/score-tracker-app',
      featured: true,
      status: 'online',
    },
    {
      id: 2,
      name: 'Regideso Index',
      category: 'Client project',
      description: 'Application for index meter and leaks prevention for a water management company in the DRC',
      overview:
        'A field tool built for Regideso, a water management company in the DRC. Agents record meter indexes and report leaks from the field, while supervisors get a clearer view of readings and issues across the network.',
      highlights: [
        'Meter index capture for field agents',
        'Leak reporting and follow-up',
        'Responsive dashboard for supervisors',
        'API-backed data flow',
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      liveUrl: 'https://regideso-index.netlify.app/',
      sourceUrl: 'https://github.com/Bateyjosue/regideso-index',
      featured: true,
      status: 'maintenance',
    },
    {
      id: 3,
      name: 'VoicePay',
      category: 'Personal project',
      description: 'Voice-Controlled Blockchain Micropayments - Revolutionary payment system using voice commands',
      overview:
        'A voice-controlled blockchain micropayments experiment. The app listens for a spoken payment command, extracts the intent, prepares a transaction, and confirms it on-chain — a hands-on exploration of how voice interfaces can simplify Web3 payments.',
      highlights: [
        'Voice command capture and intent parsing',
        'Blockchain transaction preparation and confirmation',
        'Hands-free payment flow with visual feedback',
      ],
      image: '/yehVO.png',
      technologies: ['React.js', 'Blockchain', 'Web3', 'Voice API'],
      liveUrl: 'https://yeh-vo.netlify.app/',
      sourceUrl: 'https://github.com/josuebatey/yeh-Vo',
      featured: true,
      status: 'online',
    },
    {
      id: 4,
      name: 'Moni Share',
      category: 'Apprenticeship project',
      description: 'Car renting app facilitating vehicle registration, location sharing, and real-time tracking with advanced gaming-style UI',
      overview:
        'A car rental platform built during the Gym x Ojemba x Maibornwolff apprenticeship. Moni car owners make a vehicle available for a specific window, renters find and book it by location, and both sides track the rental as it happens.',
      highlights: [
        'Vehicle registration and availability windows',
        'Geolocation-based search and booking',
        'Real-time rental tracking',
        'REST API and React front end',
      ],
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
      liveUrl: 'https://www.monishare-jb.netlify.app',
      sourceUrl: 'https://github.com/Bateyjosue/monishare',
      featured: true,
      status: 'online',
    },
    {
      id: 5,
      name: 'Amani Fest',
      category: 'Client project',
      description: 'Festival platform for Amani Festival with ticket booking, event information, and interactive features',
      overview:
        'A festival website for Amani Festival, covering the programme, lineup, and ticket booking in a fast, responsive static site. Built with hand-written HTML, SASS, and JavaScript, with custom animations for the event\'s visual identity.',
      highlights: [
        'Programme and event information',
        'Ticket booking flow',
        'Responsive, animation-led design',
      ],
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      liveUrl: 'https://amani-fest-jb.netlify.app/',
      sourceUrl: 'https://github.com/Bateyjosue/amani-fest',
      featured: true,
      status: 'online',
    },
    {
      id: 6,
      name: 'Notion Clone',
      category: 'Personal project',
      description: 'Advanced note-taking app with slash commands, real-time editing, and modern UI inspired by Notion',
      overview:
        'A note-taking app inspired by Notion, built to explore rich editor UX. It supports block-based editing, slash commands, and a keyboard-first writing flow inside a clean, minimal interface.',
      highlights: [
        'Block-based page editing',
        'Slash command menu',
        'Keyboard-first writing experience',
        'Responsive sidebar navigation',
      ],
      image: '/notion.png',
      technologies: ['JavaScript', 'TailwindCSS', 'HTML'],
      liveUrl: 'https://notion-clone-jb.netlify.app/',
      sourceUrl: 'https://github.com/Bateyjosue/notion-clone',
      featured: false,
      status: 'online',
    },
    {
      id: 7,
      name: 'The Meal',
      category: 'Personal project',
      description: 'Recipe discovery app with meal information from around the world using MealDB API',
      overview:
        'A recipe discovery app powered by TheMealDB. Browse meals by category, search for a dish, and open detailed recipes with ingredients and step-by-step instructions.',
      highlights: [
        'Search across meals and categories',
        'Detailed recipe views with ingredients',
        'Fetches live data from TheMealDB',
      ],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Webpack', 'HTML', 'CSS'],
      liveUrl: 'https://bateyjosue.github.io/The-Meal/',
      sourceUrl: 'https://github.com/Bateyjosue/The-Meal',
      featured: false,
      status: 'online',
    },
    {
      id: 8,
      name: 'Mi Budget',
      category: 'Personal project',
      description: 'Budget management application with category-based transaction tracking and financial insights',
      overview:
        'A budget management app for tracking transactions by category and seeing where money goes. Built with Ruby on Rails and PostgreSQL, with RSpec tests covering the core flows.',
      highlights: [
        'Category-based transaction tracking',
        'Spending overview and totals',
        'RSpec-tested Rails backend',
      ],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'RSpec'],
      liveUrl: 'https://www.loom.com/share/7b1e4eb40a95466a81104a080ffe2042',
      sourceUrl: 'https://github.com/Bateyjosue/mi_bugdet',
      featured: true,
      status: 'maintenance',
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 6)

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
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>
        </motion.div>

        {/* Latest Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-cyber font-bold text-neon-purple glow-text">
                LATEST PROJECTS
              </h3>
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />
          ))}
        </div>

        {projects.length > 6 && (
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
