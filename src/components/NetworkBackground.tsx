import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
}

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number
        let particles: Particle[] = []
        const particleCount = 50
        const connectionDistance = 150
        const mouseRadius = 100

        let mouseX = -1000
        let mouseY = -1000

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }

        const initParticles = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.offsetWidth,
                    y: Math.random() * canvas.offsetHeight,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                })
            }
        }

        const drawParticle = (p: Particle) => {
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
            ctx.fill()
        }

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.2
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            }
        }

        const updateParticles = () => {
            particles.forEach(p => {
                // Mouse interaction
                const dxMouse = mouseX - p.x
                const dyMouse = mouseY - p.y
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

                if (distMouse < mouseRadius) {
                    const force = (mouseRadius - distMouse) / mouseRadius
                    p.vx -= (dxMouse / distMouse) * force * 0.02
                    p.vy -= (dyMouse / distMouse) * force * 0.02
                }

                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
                if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1

                // Damping
                p.vx *= 0.99
                p.vy *= 0.99
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            drawConnections()
            particles.forEach(drawParticle)
            updateParticles()

            animationId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseX = e.clientX - rect.left
            mouseY = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouseX = -1000
            mouseY = -1000
        }

        resizeCanvas()
        initParticles()
        animate()

        window.addEventListener('resize', () => {
            resizeCanvas()
            initParticles()
        })

        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resizeCanvas)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ opacity: 0.6 }}
            aria-hidden="true"
        />
    )
}
