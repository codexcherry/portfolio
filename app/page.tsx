"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="education"><EducationSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="contact"><ContactSection /></div>

      <Footer />
    </main>
  )
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 hover:bg-primary/20 transition-all duration-300"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="#home" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="#about" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="#projects" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Projects
            </Link>
            <Link href="#experience" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Experience
            </Link>
            <Link href="#skills" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Skills
            </Link>
            <Link href="#contact" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-8"></div>

          {/* Copyright */}
          <p className="text-foreground/60 text-sm">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
