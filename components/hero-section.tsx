"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Cpu, CircuitBoard } from "lucide-react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create neural network nodes
    const createNodes = (count: number, spread: number) => {
      const nodes = []
      const geometry = new THREE.SphereGeometry(0.1, 16, 16)
      
      for (let i = 0; i < count; i++) {
        const material = new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xff3333 : (i % 3 === 1 ? 0x33aaff : 0x33ff33),
          transparent: true,
          opacity: 0.8
        })
        
        const node = new THREE.Mesh(geometry, material)
        node.position.set(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread
        )
        
        scene.add(node)
        nodes.push(node)
      }
      
      return nodes
    }

    // Create neural network connections
    const createConnections = (nodes: THREE.Mesh[], maxConnections: number) => {
      const connections = []
      const material = new THREE.LineBasicMaterial({
        color: 0x33aaff,
        transparent: true,
        opacity: 0.3
      })
      
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * maxConnections) + 1
        const connectedIndices = new Set()
        
        while (connectedIndices.size < connectionCount) {
          const randomIndex = Math.floor(Math.random() * nodes.length)
          if (randomIndex !== i) connectedIndices.add(randomIndex)
        }
        
        connectedIndices.forEach(index => {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            node.position,
            nodes[index].position
          ])
          
          const line = new THREE.Line(geometry, material)
          scene.add(line)
          connections.push(line)
        })
      })
      
      return connections
    }

    // Increase spread to make the neural network appear wider
    const nodes = createNodes(30,30)
    const connections = createConnections(nodes,4)

    camera.position.z = 20

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    const animate = () => {
      requestAnimationFrame(animate)

      nodes.forEach((node, i) => {
        node.position.x += (Math.sin(Date.now() * 0.001 + i) * 0.01)
        node.position.y += (Math.cos(Date.now() * 0.001 + i * 1.3) * 0.01)
        node.position.z += (Math.sin(Date.now() * 0.001 + i * 0.7) * 0.01)
        node.scale.setScalar(1 + Math.sin(Date.now() * 0.001 + i) * 0.2)
      })

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      nodes.forEach(node => scene.remove(node))
      connections.forEach(connection => scene.remove(connection))
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-90" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent tracking-tighter">
            NITHIN V S
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 flex items-center justify-center gap-2">
            <Cpu className="h-6 w-6 text-red-500" />
            <span className="text-red-400">AI/ML ENGINEER</span>
            <CircuitBoard className="h-6 w-6 text-blue-400" />
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#about"
            className="inline-block px-8 py-3 rounded-md bg-black border-2 border-red-500 text-red-400 font-bold hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(255,0,0,0.7)] transition-all duration-300 tracking-wider"
          >
            EXPLORE MY WORK
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <a href="#about" className="flex flex-col items-center text-xs">
            <span className="text-red-400 mb-2">SCROLL DOWN</span>
            <span className="w-5 h-10 border-2 border-red-500 rounded-full flex justify-center">
              <span className="w-1 h-2 bg-red-500 rounded-full mt-2 animate-bounce"></span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
