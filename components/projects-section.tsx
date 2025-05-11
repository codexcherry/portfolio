"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Maximize2, X } from "lucide-react"

const ProjectCard = ({ project, index, setSelectedProject }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const iconColors = ["text-primary shadow-glow", "text-secondary shadow-glow-purple", "text-accent shadow-glow-yellow"]
  const bgColors = [
    "bg-primary/10 border-primary/30",
    "bg-secondary/10 border-secondary/30",
    "bg-accent/10 border-accent/30",
  ]

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={cardVariants} className="h-full">
      <motion.div
        className={`glass-effect rounded-xl border border-foreground/10 hover:border-primary/30 transition-all duration-500 h-full overflow-hidden cursor-pointer ${
          isHovered ? bgColors[index % 3] : ""
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow:
            index % 3 === 0
              ? "0 0 25px 5px rgba(0, 247, 255, 0.3)"
              : index % 3 === 1
                ? "0 0 25px 5px rgba(255, 0, 255, 0.3)"
                : "0 0 25px 5px rgba(255, 204, 0, 0.3)",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setSelectedProject(project)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex items-center">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                index % 3 === 0
                  ? "bg-primary/20 text-primary"
                  : index % 3 === 1
                    ? "bg-secondary/20 text-secondary"
                    : "bg-accent/20 text-accent"
              }`}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {index % 3 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              ) : index % 3 === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              )}
            </motion.div>
            <motion.h3
              className="text-xl font-bold ml-3 gradient-text"
              animate={{
                textShadow: isHovered
                  ? index % 3 === 0
                    ? "0 0 8px rgba(0, 247, 255, 0.7)"
                    : index % 3 === 1
                      ? "0 0 8px rgba(255, 0, 255, 0.7)"
                      : "0 0 8px rgba(255, 204, 0, 0.7)"
                  : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
          </div>

          <motion.p
            className="text-foreground/80 mb-6 line-clamp-3"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full ${
                    index % 3 === 0
                      ? "bg-primary/10 text-primary"
                      : index % 3 === 1
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <motion.span
                  className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/60"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  +{project.technologies.length - 3} more
                </motion.span>
              )}
            </div>

            <motion.div
              className="flex justify-between items-center"
              animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm text-foreground/60">Click to view details</span>
              <motion.div
                className={iconColors[index % 3]}
                animate={{ rotate: isHovered ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Maximize2 size={16} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        ref={modalRef}
        className="glass-effect rounded-xl border border-foreground/20 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <motion.h3
              className="text-2xl md:text-3xl font-bold gradient-text"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {project.title}
            </motion.h3>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.button>
          </div>

          <motion.p
            className="text-foreground/90 mb-8 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-primary">Key Features:</h4>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-secondary">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsData = [
    {
      title: "IRIS – Voice Interface System",
      description:
        "A fully offline, voice-activated virtual assistant that performs system automation and web tasks using natural language.",
      features: [
        "Uses Vosk for real-time offline speech-to-text conversion ensuring privacy and low-latency.",
        "Automates Google searches, opens applications, takes screenshots, and provides verbal responses via text-to-speech.",
        "Integrates Selenium for web control and DALL·E API for voice-commanded image generation.",
        "Designed for minimal internet usage and high accessibility in low-resource environments.",
      ],
      technologies: ["Python", "Vosk", "Selenium", "DALL·E API", "Text-to-Speech", "System Automation"],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
    {
      title: "Virtual V-0 – Advanced Gesture Control System",
      description:
        "A hands-free control platform using facial and hand gestures to operate a computer efficiently and intuitively.",
      features: [
        "Combines hand tracking with eye-blink detection for mouse control, drag, scroll, and click actions.",
        "Implements Kalman filtering for smoothing gesture movements and reducing flicker or misfires.",
        "Cooldown mechanisms prevent accidental repeat gestures, enhancing stability.",
        "Engineered for accessibility, remote interaction, and intuitive UX design without physical input devices.",
      ],
      technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "Kalman Filtering", "Gesture Recognition"],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
    {
      title: "TradeX – AI-Enhanced Stock Dashboard",
      description:
        "A real-time stock analytics web platform integrating predictive AI and interactive visualizations for smarter financial decisions.",
      features: [
        "Live tracking of market data with filterable assets and personalized watchlists.",
        "AI-driven predictions powered by Gemini API based on financial trends and news.",
        "Upload/export CSV portfolios with instant visual feedback using interactive Plotly.js charts.",
        "Uses WebSocket for near-instant updates and offers intuitive visual insights for beginner traders and students.",
      ],
      technologies: ["React.js", "Node.js", "Gemini API", "Plotly.js", "WebSocket", "Financial APIs"],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
    {
      title: "Voting Organization DApp",
      description:
        "A decentralized, transparent voting system built on Ethereum to conduct secure elections for academic or organizational use.",
      features: [
        "Smart contract-controlled voting lifecycle with tamper-proof, time-bound election sessions.",
        "Voter and candidate data stored via IPFS for decentralized access and proof of identity.",
        "Admin interface allows controlled voter registration, result publication, and session resets.",
        "Ensures single-vote enforcement, real-time validation, and public blockchain auditability.",
      ],
      technologies: ["Ethereum", "Solidity", "IPFS", "Web3.js", "React.js", "Smart Contracts"],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
    {
      title: "Computer Autopilot – Automated System Management",
      description:
        "An intelligent background automation system that maintains computer health and optimizes performance through proactive resource management.",
      features: [
        "Monitors CPU, RAM, and disk metrics to detect resource spikes or leaks.",
        "Triggers scheduled backups, updates, or other tasks during system idle time.",
        "Prioritizes critical processes and terminates non-essential background services to reduce lag.",
        "Delivers real-time alerts and logs for diagnostic and optimization feedback.",
      ],
      technologies: [
        "Python",
        "System Monitoring",
        "Process Management",
        "Automated Scheduling",
        "Resource Optimization",
      ],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
    {
      title: "OpportunityAI – AI-Powered Career Assistant",
      description:
        "An interactive career advisory platform that blends conversational AI, real-time data, and context-aware planning to help students and professionals navigate opportunities.",
      features: [
        "Personalized career chats powered by Gemini API with context memory using VectorDB.",
        "Scrapes real-time data from job boards, event sites, and internship portals.",
        "Filters unethical or biased suggestions and provides neutral, ethical responses.",
        "Exports custom PDF reports highlighting suitable paths, skill gaps, and upcoming opportunities.",
        "Designed to reduce research overload and empower students with smart, guided decision-making.",
      ],
      technologies: ["Python", "Gemini API", "VectorDB", "Web Scraping", "NLP", "PDF Generation"],
      github: "https://github.com/codewiithcherry",
      demo: "#",
    },
  ]

  const titleControls = useAnimation()
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible")
    }
  }, [titleControls, isTitleInView])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full shadow-glow-yellow"
          ></motion.div>
          <motion.p
            variants={titleVariants}
            className="max-w-2xl mx-auto text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my featured projects showcasing my skills in AI, machine learning, and creative development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} setSelectedProject={setSelectedProject} />
          ))}
        </div>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  )
}

export default Projects
