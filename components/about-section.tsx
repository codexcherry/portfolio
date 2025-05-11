"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, RotateCcw, RotateCw } from "lucide-react"

interface CardProps {
  title: string
  icon: React.ReactNode
  frontContent: string
  backContent: string
}

const Card = ({ title, icon, frontContent, backContent }: CardProps) => {
  return (
    <motion.div
      className="h-full perspective-1000 group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Front */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-[#00f7ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,247,255,0.2)]"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col h-full">
            <motion.div
              className="mb-4 p-3 rounded-full bg-black bg-opacity-60 backdrop-blur-sm w-fit border border-gray-700"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {icon}
            </motion.div>

            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00f7ff] via-[#ff00ff] to-[#ffcc00] bg-clip-text text-transparent">
              {title}
            </h3>

            <motion.p 
              className="text-gray-300 flex-grow text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {frontContent}
            </motion.p>
            
            <motion.div 
              className="mt-auto pt-4 border-t border-gray-800 text-xs text-gray-500 flex items-center justify-end gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Flip</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-tl from-[#0a0a0a] to-[#1a1a1a] rounded-xl p-6 border border-gray-700 shadow-lg"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 180 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00f7ff] via-[#ff00ff] to-[#ffcc00] bg-clip-text text-transparent">
              {title}
            </h3>

            <motion.p 
              className="text-gray-300 flex-grow text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {backContent}
            </motion.p>
            
            <motion.div 
              className="mt-auto pt-4 border-t border-gray-800 text-xs text-gray-500 flex items-center justify-end gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip back</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      {/* Advanced background effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.05),transparent_70%)]"
          animate={{
            background: [
              'radial-gradient(circle at center, rgba(0,247,255,0.05), transparent 70%)',
              'radial-gradient(circle at 30% 50%, rgba(0,247,255,0.08), transparent 70%)',
              'radial-gradient(circle at 70% 50%, rgba(255,0,255,0.05), transparent 70%)',
              'radial-gradient(circle at center, rgba(0,247,255,0.05), transparent 70%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#00f7ff] opacity-10 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: ["-50%", "-55%", "-50%", "-45%", "-50%"],
            y: ["-50%", "-55%", "-50%", "-45%", "-50%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#ff00ff] opacity-10 blur-[80px]"
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Nithin V S" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-[10px] border-transparent hover:border-[rgba(0,247,255,0.2)] transition-all duration-500 pointer-events-none"
                  whileHover={{ borderColor: "rgba(0,247,255,0.3)" }}
                ></motion.div>
              </motion.div>
              
              {/* Floating elements around profile */}
              <motion.div 
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#00f7ff] opacity-20 blur-[40px]"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#ff00ff] opacity-20 blur-[40px]"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              
              {/* Glowing outline effect */}
              <motion.div 
                className="absolute inset-0 rounded-full pointer-events-none"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full shadow-[0_0_50px_10px_rgba(0,247,255,0.3)] opacity-0 hover:opacity-100"
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content section */}
          <div className="lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                About <motion.span 
                  className="bg-gradient-to-r from-[#00f7ff] via-[#ff00ff] to-[#ffcc00] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Me
                </motion.span>
              </motion.h2>
              
              <motion.div 
                className="relative w-32 h-1 mb-10 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00f7ff] via-[#ff00ff] to-[#ffcc00]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                AI/ML Engineer specializing in creating intelligent systems that combine technical sophistication with practical applications.
              </motion.p>
            </motion.div>

            {/* Horizontal cards container */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-h-[400px]"
              >
                <Card
                  title="Technical Expertise"
                  icon={<Code className="w-6 h-6 text-[#ff00ff] animate-pulse" />}
                  frontContent="Artificial Intelligence and Machine Learning Undergraduate with Practical Experience in AI/ML Development. Proficient in Neural Networks, Computer Vision, and Natural Language Processing (NLP) Applications"
                  backContent="From foundational programming to the development of advanced AI systems, my academic and technical journey has been driven by continuous learning, research, and the practical implementation of cutting-edge technologies in real-world projects.."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 min-h-[400px]"
              >
                <Card
                  title="Development Approach"
                  icon={<Lightbulb className="w-6 h-6 text-[#ffcc00] animate-pulse" />}
                  frontContent="Focused on creating AI solutions that enhance human capabilities, prioritizing ethical design and user-centered development."
                  backContent="My philosophy revolves around developing technology that empowers users with intuitive interfaces, responsible AI practices, and meaningful problem-solving"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
