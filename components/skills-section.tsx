"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Code, Database, Cpu, Palette, Terminal, GitBranch, ChevronDown, ChevronUp } from "lucide-react"

const SkillCategory = ({ title, icon, skills, color, delay, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isExpanded, setIsExpanded] = useState(false)

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
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="glass-effect p-6 rounded-lg border border-foreground/10 hover:border-primary/30 transition-all duration-300 h-full"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.div>
      </div>

      <motion.div
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={expandVariants}
        className="overflow-hidden"
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isExpanded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium text-white ${
                index % 3 === 0 ? "bg-primary/10" : index % 3 === 1 ? "bg-secondary/10" : "bg-accent/10"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Skills = () => {
  const skillsData = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      color: "bg-primary/20 text-primary",
      skills: ["Python", "C++", "Java", "SQL", "R", "JavaScript", "TypeScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-secondary/20 text-secondary",
      skills: ["HuggingFace", "Gemini API", "OpenCV", "MediaPipe", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      title: "Web Development",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-accent/20 text-accent",
      skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-6 h-6" />,
      color: "bg-primary/20 text-primary",
      skills: ["Git/GitHub", "VS Code", "PyQt5", "PostgreSQL", "Docker", "Linux", "AWS"],
    },
    {
      title: "Data Visualization",
      icon: <Database className="w-6 h-6" />,
      color: "bg-secondary/20 text-secondary",
      skills: ["Plotly.js", "Pandas", "Matplotlib", "D3.js", "Tableau", "Power BI"],
    },
    {
      title: "Version Control & CI/CD",
      icon: <GitBranch className="w-6 h-6" />,
      color: "bg-accent/20 text-accent",
      skills: ["Git", "GitHub Actions", "CI/CD Pipelines", "Agile Methodologies"],
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills</motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full shadow-glow-purple"
          ></motion.div>
          <motion.p variants={titleVariants} className="max-w-2xl mx-auto text-white">
            My technical toolkit and areas of expertise
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              color={category.color}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
