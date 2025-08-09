"use client"

import { useEffect, useRef } from "react"

export default function Uji({ className = "uji" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const text = textRef.current
    if (!canvas || !text) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Particle animation setup
    const particles: any[] = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: Math.random(),
        size: Math.random() * 3 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = "#986a52"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    setTimeout(() => {
      animate()
      if (text) {
        text.style.opacity = "1"
        text.style.transform = "scale(1)"
      }
    }, 500)
  }, [])

  return (
    <div className={`${className} text-center`}>
      <canvas ref={canvasRef} width={300} height={100} className="absolute inset-0 pointer-events-none" />
      <h2
        className="text-5xl md:text-6xl"
        style={{
          fontFamily: "GreatVibes-Regular",
          color: "#986a52",
        }}
      >
        Uji
      </h2>
    </div>
  )
}
