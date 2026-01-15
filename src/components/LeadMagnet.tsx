import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function LeadMagnet() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const { ref, isVisible } = useScrollReveal()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        // Simulate form submission - replace with actual form handler
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setStatus('success')
            setEmail('')
        } catch {
            setStatus('error')
        }
    }

    const checklistItems = [
        'Multi-factor authentication status',
        'Email security configuration',
        'Endpoint protection coverage',
        'Backup verification checklist',
        'User access review process',
    ]

    return (
        <section
            ref={ref}
            className={`relative py-24 overflow-hidden reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-600/10 to-cyan-500/5 dark:from-cyan-500/5 dark:via-blue-600/10 dark:to-cyan-500/5" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Free Resource</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white">
                            The 15-Point SMB Security Checklist
                        </h2>
                        <p className="text-gray-400 dark:text-gray-400 mb-8 text-lg">
                            Don't wait for a breach to find out you're vulnerable. Our comprehensive checklist helps you identify gaps before attackers do.
                        </p>

                        <div className="space-y-3 mb-8">
                            {checklistItems.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-white dark:text-white">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 text-cyan-400">
                                <div className="w-5 h-5 rounded-full border-2 border-cyan-500/50 flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs font-bold">+</span>
                                </div>
                                <span className="font-medium">10 more critical checkpoints...</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form Card */}
                    <div>
                        <div className="p-8 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 glow-border-hover">
                            {status === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white dark:text-white">Check Your Inbox!</h3>
                                    <p className="text-gray-400 dark:text-gray-400">
                                        Your security checklist is on its way.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-white dark:text-white">Get Your Free Checklist</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">Instantly delivered to your inbox</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your work email"
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 text-white dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2 group"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Download Free Checklist
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {status === 'error' && (
                                        <p className="mt-4 text-red-400 text-sm text-center">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}

                                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-500 text-center">
                                        🔒 No spam. Unsubscribe anytime.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
