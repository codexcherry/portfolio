"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

const EducationCard = ({ education, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary shadow-glow z-10"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ></motion.div>

      {/* Content */}
      <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
        <motion.div
          className="glass-effect p-6 rounded-lg border border-foreground/10 hover:border-primary/30 transition-all duration-300 h-full"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            {education.icon}
            <h3 className="text-xl font-bold ml-2 gradient-text">{education.institution}</h3>
          </div>
          <p className="text-foreground/70 text-sm mb-2">{education.location}</p>
          <p className="text-foreground font-medium mb-2">{education.degree}</p>
          <p className="text-foreground/80 text-sm mb-2">{education.period}</p>
          <p className="text-primary font-semibold">{education.achievement}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Education = () => {
  const educationData = [
    {
      institution: "M.S. Ramaiah Institute of Technology",
      location: "Bangalore, India",
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      period: "2023 - 2026 (expected)",
      achievement: "CGPA: 7.79/10.00",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
    {
      institution: "Government Polytechnic Chintamani",
      location: "Chintamani, India",
      degree: "Diploma in Computer Science and Engineering",
      period: "Completed: 2023",
      achievement: "CGPA: 9.45/10.00",
      icon: <Award className="w-6 h-6 text-secondary" />,
    },
    {
      institution: "St. Francis De Sales High School",
      location: "Chintamani, India",
      degree: "10th Grade (SSLC)",
      period: "Completed: 2020",
      achievement: "Percentage: 84.48%",
      icon: <Calendar className="w-6 h-6 text-accent" />,
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
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-text="Education">
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full shadow-glow-purple"
          ></motion.div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"
          ></motion.div>

          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
