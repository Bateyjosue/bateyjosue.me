import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, CalendarDays, Briefcase } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const gallery = project
    ? project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image]
    : []

  useEffect(() => {
    setActiveIndex(0)
  }, [project])

  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
      } else if (event.key === 'ArrowRight' && gallery.length > 1) {
        setActiveIndex((index) => (index + 1) % gallery.length)
      } else if (event.key === 'ArrowLeft' && gallery.length > 1) {
        setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length)
      } else if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll('a[href], button:not([disabled])')
        ).filter((element) => element.offsetParent !== null)

        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [project, gallery.length])

  const statusStyles = {
    online: 'bg-neon-green/10 border-neon-green/40 text-neon-green',
    maintenance: 'bg-neon-pink/10 border-neon-pink/40 text-neon-pink',
  }

  const statusLabels = {
    online: 'Online',
    maintenance: 'Under maintenance',
  }

  const showPrevious = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % gallery.length)

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-cyber-dark/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          ></div>

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-lg border border-neon-green/30 bg-cyber-gray shadow-[0_0_60px_rgba(0,255,65,0.18)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-neon-green/20 bg-cyber-gray/95 px-5 py-4 backdrop-blur-md md:px-8">
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {project.status && statusStyles[project.status] && (
                    <span className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${statusStyles[project.status]}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></span>
                      {statusLabels[project.status]}
                    </span>
                  )}
                  {project.category && (
                    <span className="inline-flex items-center gap-1.5 rounded border border-neon-purple/40 bg-neon-purple/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-neon-purple">
                      <Briefcase size={11} />
                      {project.category}
                    </span>
                  )}
                  {project.year && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                      <CalendarDays size={12} />
                      {project.year}
                    </span>
                  )}
                </div>

                <h2
                  id="project-modal-title"
                  className="truncate text-2xl font-cyber font-bold text-white md:text-4xl"
                >
                  {project.name}
                </h2>

                {project.role && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-neon-blue md:text-sm">
                    {project.role}
                  </p>
                )}
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-lg border border-neon-green/30 bg-cyber-dark p-2 text-neon-green transition-colors duration-300 hover:border-neon-green hover:bg-neon-green hover:text-cyber-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
              >
                <X size={20} />
              </button>
            </div>

            {/* Gallery */}
            <div className="relative bg-cyber-dark">
              <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-[min(440px,42vh)]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={gallery[activeIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      src={gallery[activeIndex]}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
                    />
                    <img
                      src={gallery[activeIndex]}
                      alt={`${project.name} screenshot ${activeIndex + 1}`}
                      className="relative max-h-full max-w-full object-contain shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Previous screenshot"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-neon-green/40 bg-cyber-dark/80 p-1.5 text-neon-green transition-colors duration-300 hover:bg-neon-green hover:text-cyber-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green md:left-3 md:p-2"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next screenshot"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-neon-green/40 bg-cyber-dark/80 p-1.5 text-neon-green transition-colors duration-300 hover:bg-neon-green hover:text-cyber-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green md:right-3 md:p-2"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 right-3 rounded bg-cyber-dark/80 px-2 py-1 text-xs font-bold text-neon-green">
                      {activeIndex + 1} / {gallery.length}
                    </div>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto px-4 py-3">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show screenshot ${index + 1}`}
                      aria-current={index === activeIndex}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded border-2 transition-all duration-200 ${
                        index === activeIndex
                          ? 'border-neon-green opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                    >
                      <img src={image} alt="" loading="lazy" className="h-full w-full bg-cyber-dark object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-6 p-5 md:p-8">
              <p className="whitespace-pre-line leading-relaxed text-gray-300">
                {project.overview || project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h3 className="mb-3 font-cyber text-lg font-bold text-neon-green">
                    What I built
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-green"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="mb-3 font-cyber text-lg font-bold text-neon-blue">Tech stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-neon-blue/30 bg-cyber-dark px-2.5 py-1 text-xs font-medium text-neon-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.sourceUrl) && (
                <div className="flex flex-wrap gap-3 border-t border-neon-green/20 pt-5">
                  {project.liveUrl && project.status === 'online' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded bg-neon-green px-5 py-2.5 font-bold text-cyber-dark transition-colors duration-300 hover:bg-neon-blue"
                    >
                      <ExternalLink size={16} />
                      {project.linkLabel || 'Visit Site'}
                    </a>
                  )}

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-neon-green px-5 py-2.5 font-bold text-neon-green transition-colors duration-300 hover:bg-neon-green hover:text-cyber-dark"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
