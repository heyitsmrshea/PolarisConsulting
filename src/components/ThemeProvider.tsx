import { useEffect, type ReactNode } from 'react'

interface ThemeProviderProps {
    children: ReactNode
}

// Dark-mode only theme provider - no toggle needed for a consistent premium dark experience
export function ThemeProvider({ children }: ThemeProviderProps) {
    useEffect(() => {
        // Force dark mode
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    }, [])

    return <>{children}</>
}
