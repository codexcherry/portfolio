"use client"

import { useEffect, useRef } from "react"

export default function AsciiProfile() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const image = new Image()
    image.crossOrigin = "anonymous"
    image.src = "/profile.jpg"

    image.onload = () => {
      // Set canvas dimensions
      const aspectRatio = image.width / image.height
      const canvasWidth = 400
      const canvasHeight = canvasWidth / aspectRatio

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      // Draw image to canvas
      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight)

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      const data = imageData.data

      // Clear canvas
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      // ASCII characters from darkest to lightest
      const asciiChars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"]

      // Set text properties
      ctx.fillStyle = "white"
      ctx.font = "5px monospace"

      // Convert to ASCII
      const cellSize = 5
      for (let y = 0; y < canvasHeight; y += cellSize) {
        for (let x = 0; x < canvasWidth; x += cellSize) {
          const pos = (y * canvasWidth + x) * 4

          // Calculate brightness (0-255)
          const r = data[pos]
          const g = data[pos + 1]
          const b = data[pos + 2]
          const brightness = (r + g + b) / 3

          // Map brightness to ASCII character
          const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1))
          const char = asciiChars[charIndex]

          // Draw ASCII character
          ctx.fillText(char, x, y)
        }
      }
    }

    return () => {
      // Clean up
      image.onload = null
    }
  }, [])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  )
}
