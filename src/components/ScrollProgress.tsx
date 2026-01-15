import { useState, useEffect } from 'react'

export function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = window.scrollY
            const progress = (scrolled / totalHeight) * 100
            setProgress(progress)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1">
            <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
            {/* Glow effect */}
            <div
                className="absolute top-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 blur-sm opacity-50 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
