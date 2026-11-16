import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cloud, Database, Monitor, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'text-neon-green',
      iconBackground: 'bg-neon-green/10',
      skillStyle: 'text-neon-green border-neon-green/30 hover:bg-neon-green/10',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    },
    {
      icon: Server,
      title: 'Backend & API Development',
      color: 'text-neon-blue',
      iconBackground: 'bg-neon-blue/10',
      skillStyle: 'text-neon-blue border-neon-blue/30 hover:bg-neon-blue/10',
      skills: [
        'Node.js', 'NestJS', 'FastAPI', 'REST APIs', 'GraphQL', 'SAP CAP',
        'JWT Authentication', 'Spring Boot',
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'text-neon-purple',
      iconBackground: 'bg-neon-purple/10',
      skillStyle: 'text-neon-purple border-neon-purple/30 hover:bg-neon-purple/10',
      skills: [
        'PostgreSQL', 'MongoDB', 'MySQL', 'Database Design', 'Data Modelling',
        'SAP HANA', 'Prisma', 'TypeORM',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'text-neon-pink',
      iconBackground: 'bg-neon-pink/10',
      skillStyle: 'text-neon-pink border-neon-pink/30 hover:bg-neon-pink/10',
      skills: [
        'AWS Lambda', 'AWS S3', 'AWS EC2', 'AWS Athena', 'AWS Glue',
        'AWS DynamoDB', 'Serverless Architecture', 'Docker', 'CI/CD',
        'GitHub Actions', 'GCP',
      ],
    },
    {
      icon: Monitor,
      title: 'Frontend',
      color: 'text-neon-green',
      iconBackground: 'bg-neon-green/10',
      skillStyle: 'text-neon-green border-neon-green/30 hover:bg-neon-green/10',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML'],
    },
    {
      icon: Wrench,
      title: 'Tools & Methodologies',
      color: 'text-neon-blue',
      iconBackground: 'bg-neon-blue/10',
      skillStyle: 'text-neon-blue border-neon-blue/30 hover:bg-neon-blue/10',
      skills: [
        'Git', 'Agile/Scrum', 'JIRA', 'OpenAI API', 'Figma', 'System Design',
        'Debugging', 'Unit testing', 'Integration testing', 'Jest', 'Playwright',
        'Clean architecture', 'API Testing', 'Swagger/OpenAPI',
      ],
    },
  ]

  const SkillCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="cyber-border bg-cyber-gray rounded-lg p-6 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`inline-flex p-3 rounded-full ${category.iconBackground} group-hover:animate-pulse`}>
          <category.icon className={`w-7 h-7 ${category.color}`} />
        </div>
        <h3 className={`text-lg font-cyber font-bold ${category.color} glow-text`}>
          {category.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
            viewport={{ once: true }}
            className={`rounded border bg-cyber-dark px-3 py-1.5 text-sm font-medium transition-colors duration-300 cursor-default ${category.skillStyle}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills