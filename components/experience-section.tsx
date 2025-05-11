"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Briefcase, Calendar, Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  }

  const getAdditionalDetails = (company) => {
    if (company.includes("Excerpt")) {
      return {
        projects: ["Security Protocol Enhancement", "OTP Service Development", "Client-Server Security Integration"],
        skills: ["Cybersecurity", "Authentication Systems", "Network Security", "API Integration"],
        link: "https://www.excerpttechnologies.com",
      }
    } else {
      return {
        projects: ["Automated Testing Framework", "UI/UX Testing", "Performance Optimization"],
        skills: ["Software Testing", "Bug Tracking", "Test Automation", "Quality Assurance"],
        link: "https://www.itriangleinfotechpvtltd.com",
      }
    }
  }

  const additionalDetails = getAdditionalDetails(experience.company)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="glass-effect p-6 rounded-lg border border-foreground/10 hover:border-primary/30 transition-all duration-300 mb-8 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <Briefcase className="w-5 h-5 text-primary mr-2" />
        <h4 className="text-xl font-bold gradient-text">{experience.company}</h4>
      </div>
      <p className="text-foreground/70 text-sm mb-2">{experience.location}</p>
      <p className="text-foreground font-medium mb-2">{experience.position}</p>
      <div className="flex items-center text-foreground/80 text-sm mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        {experience.period}
      </div>
      <ul className="space-y-2">
        {experience.description.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="text-foreground/80 flex items-start"
          >
            <span className="text-primary mr-2">•</span>
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-foreground/60">Click for more details</span>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.div>
      </div>

      <motion.div
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={expandVariants}
        className="overflow-hidden"
      >
        <div className="pt-4 mt-4 border-t border-foreground/10">
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-secondary">Key Projects:</h4>
            <ul className="space-y-2">
              {additionalDetails.projects.map((project, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-accent mr-2">•</span>
                  {project}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2 text-secondary">Skills Developed:</h4>
            <div className="flex flex-wrap gap-2">
              {additionalDetails.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.a
            href={additionalDetails.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Visit Company Website <ExternalLink className="ml-1 w-3 h-3" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const AchievementCard = ({ achievement, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="relative pl-8"
      whileHover={{ scale: 1.03, x: 5 }}
    >
      <motion.div
        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-background border-2 border-secondary flex items-center justify-center shadow-glow-purple"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-secondary text-xs font-bold">{index + 1}</span>
      </motion.div>
      <p className="text-foreground/90">{achievement}</p>
    </motion.li>
  )
}

const Experience = () => {
  const experienceData = [
    {
      company: "Excerpt Technologies Pvt. Ltd.",
      location: "Bangalore, India",
      position: "Cyber Security Engineer Intern",
      period: "Feb 2023 - Jun 2023",
      description: [
        "Completed Cyber Security Engineer internship",
        "Contributed to multiple cybersecurity projects",
        "Gained hands-on experience configuring firewalls and security protocols",
      ],
    },
    {
      company: "iTriangle Infotech Pvt Ltd",
      location: "Bangalore, India",
      position: "Software Testing Intern",
      period: "Jul 2023 - Aug 2023",
      description: [
        "Manual and automated testing of software applications",
        "Collaborated with the development team to troubleshoot and fix issues",
        "Assisted in development tasks, including brief involvement in coding and debugging efforts",
      ],
    },
  ]

  const achievementsData = [
    "2nd Prize, XtractAI Datathon at RIT Techfest 2025",
    "2nd Prize, Stock Fusion Hackathon at REVA University 2025",
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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text reveal-text">Experience</motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full shadow-glow"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary glow-text">Work Experience</h3>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-secondary glow-text-purple">Achievements</h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-6 rounded-lg border border-foreground/10 hover:border-secondary/30 transition-all duration-300"
            >
              <ul className="space-y-6">
                {achievementsData.map((achievement, index) => (
                  <AchievementCard key={index} achievement={achievement} index={index} />
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 glass-effect p-6 rounded-lg border border-foreground/10 hover:border-accent/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-xl font-bold text-accent glow-text-yellow">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "UiPath Automation Implementation Methodology Fundamentals (2025)",
                  "Introduction to OpenAI GPT Models (Infosys SpringBoard) (2024)",
                  "Computational Theory: Language Principles & Finite Automata (2024)",
                  "Introduction to Cyber Security (Infosys SpringBoard) (2022)",
                ].map((cert, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    className="text-foreground/90 flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-accent mr-2">•</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
