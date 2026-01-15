import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
    const ref = useRef<T>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin, triggerOnce])

    return { ref, isVisible }
}

// Hook for counting animation
export function useCountUp(
    end: number,
    duration: number = 2000,
    isVisible: boolean = false
) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isVisible) return

        let startTime: number | null = null
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, isVisible])

    return count
}

// Hook for magnetic button effect
export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>() {
    const ref = useRef<T>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
        }

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0, 0)'
            element.style.transition = 'transform 0.3s ease'
        }

        const handleMouseEnter = () => {
            element.style.transition = 'transform 0.1s ease'
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)
        element.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
            element.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [])

    return ref
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleScroll = () => {
            const scrollY = window.scrollY
            element.style.transform = `translateY(${scrollY * speed}px)`
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return ref
}
