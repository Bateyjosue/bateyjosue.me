import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, MapPin } from 'lucide-react'

const Experience = () => {
  const accents = {
    green: {
      text: 'text-neon-green',
      bg: 'bg-neon-green',
      bgSoft: 'bg-neon-green/10',
      border: 'border-neon-green/40',
    },
    blue: {
      text: 'text-neon-blue',
      bg: 'bg-neon-blue',
      bgSoft: 'bg-neon-blue/10',
      border: 'border-neon-blue/40',
    },
    purple: {
      text: 'text-neon-purple',
      bg: 'bg-neon-purple',
      bgSoft: 'bg-neon-purple/10',
      border: 'border-neon-purple/40',
    },
    pink: {
      text: 'text-neon-pink',
      bg: 'bg-neon-pink',
      bgSoft: 'bg-neon-pink/10',
      border: 'border-neon-pink/40',
    },
  }

  const experiences = [
    {
      id: 1,
      role: 'Team Lead & Full-Stack Developer',
      company: 'Africa to Silicon Valley (A2SV)',
      period: 'Dec 2025 – Sep 2026',
      location: 'California, United States',
      type: 'Remote',
      accent: 'green',
      current: false,
      highlights: [
        'Led the evolution of SkillBridge, an AI-powered learning platform serving 3,000+ active learners.',
        'Designed and built scalable backend services, REST APIs, and AI-powered features using Node.js, Express.js, TypeScript, MongoDB, and OpenAI APIs.',
        'Delivered major platform capabilities including role-based learning, classroom management, assessments, reporting, and parent engagement.',
        'Coordinated development efforts, mentored teammates, and drove architecture improvements, code reviews, testing, and Agile delivery.',
      ],
      tech: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Next.js', 'React', 'OpenAI', 'Docker', 'GCP'],
    },
    {
      id: 2,
      role: 'Backend Developer',
      company: 'Amali Tech',
      period: 'Apr 2024 – Jul 2025',
      location: 'Kigali, Rwanda',
      type: 'Hybrid',
      accent: 'blue',
      highlights: [
        'Designed a serverless AWS cost-tracking platform that reduced manual reporting by 80%.',
        'Built backend services for HR bonus calculation automation with SAP CAP and S/4HANA, deployed on SAP BTP.',
        'Processed cloud usage data at scale using AWS Lambda, Athena, and Glue.',
        'Improved reliability through clean architecture, structured error handling, performance optimisation, and unit/integration testing.',
      ],
      tech: ['SAP BTP', 'SAP CAP', 'SAP HANA', 'SAP Fiori', 'Node.js', 'PostgreSQL', 'AWS Lambda', 'AWS Glue', 'Docker', 'Jest'],
    },
    {
      id: 3,
      role: 'Full-Stack Developer Apprentice',
      company: 'The Gym x Ojemba x Maibornwolff',
      period: 'Jul 2023 – Apr 2024',
      location: 'Kigali, Rwanda',
      type: 'On-site',
      accent: 'purple',
      highlights: [
        'Developed MoniShare, a full-stack car rental platform with geolocation-based booking.',
        'Designed backend REST APIs and integrated them with the React frontend.',
        'Built scalable backend services using NestJS and PostgreSQL, backed by unit tests.',
        'Collaborated closely with designers and developers in Agile sprints to ship production-ready software.',
      ],
      tech: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'React', 'Next.js', 'Docker'],
    },
    {
      id: 4,
      role: 'Software Developer (Freelance)',
      company: 'Upwork',
      period: 'Jun 2022 – Dec 2023',
      location: 'Remote',
      type: 'Freelance',
      accent: 'pink',
      highlights: [
        'Improved the architecture and user experience of the Xblock platform.',
        'Developed features that let users create, write, and submit coding challenges.',
        'Collaborated remotely with distributed clients and development teams.',
      ],
      tech: ['Python', 'Django', 'Bootstrap', 'Docker', 'Open edX XBlock'],
    },
    {
      id: 5,
      role: 'Python Developer',
      company: 'Ookos',
      period: 'Nov 2022 – May 2023',
      location: 'Remote',
      type: 'Full-time',
      accent: 'green',
      highlights: [
        'Built and maintained a production e-commerce platform serving 5,000+ monthly users.',
        'Developed backend functionality using Python and Django.',
        'Optimised database queries to improve application performance.',
        'Led sprint planning, code reviews, and technical interviews as Project Manager.',
      ],
      tech: ['Python', 'Django', 'React', 'PostgreSQL'],
    },
    {
      id: 6,
      role: 'Software Engineering Intern',
      company: 'The Megabit Cloud',
      period: 'Jan 2022 – Jun 2022',
      location: 'Kigali, Rwanda',
      type: 'Internship',
      accent: 'blue',
      highlights: [
        'Developed production-ready websites for tourism clients.',
        'Deployed and maintained CMS and static websites.',
        'Worked directly with clients to ensure successful delivery.',
      ],
      tech: ['WordPress', 'CMS', 'Web Development'],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white mb-4">
            My <span className="text-neon-blue glow-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            A timeline of the teams, products, and challenges that shaped me as an engineer
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-neon-green via-neon-blue to-neon-purple opacity-60"></div>

          {experiences.map((exp, index) => {
            const accent = accents[exp.accent]
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                className={`relative pl-12 md:pl-0 mb-10 last:mb-0 md:mb-14 md:grid md:grid-cols-2 md:gap-16`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center">
                  {exp.current && (
                    <span className={`absolute inline-flex h-4 w-4 rounded-full ${accent.bg} opacity-40 animate-ping`}></span>
                  )}
                  <span className={`relative h-3 w-3 rounded-full ${accent.bg} ring-4 ring-cyber-dark`}></span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`${
                    isLeft ? 'md:col-start-1 md:pr-4' : 'md:col-start-2 md:row-start-1 md:pl-4'
                  }`}
                >
                  <div className="cyber-border group bg-cyber-gray rounded-lg p-6 h-full transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded border ${accent.border} ${accent.bgSoft} ${accent.text}`}
                      >
                        <CalendarDays size={12} />
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded bg-neon-green text-cyber-dark">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyber-dark animate-pulse"></span>
                          CURRENT
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-cyber font-bold text-white leading-snug">
                      {exp.role}
                    </h3>
                    <div className={`font-semibold mt-1 ${accent.text}`}>
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mt-1 mb-4">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-gray-300 leading-relaxed">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${accent.bg}`}></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyber-dark border border-neon-blue/20 text-gray-300 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
