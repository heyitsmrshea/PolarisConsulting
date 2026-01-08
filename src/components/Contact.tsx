import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle')
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setFormStatus('submitting')

        try {
            const response = await fetch('https://formspree.io/f/xpwzgvvk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setFormStatus('success')
                setFormData({ name: '', company: '', email: '', message: '' })
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <section id="contact" className="relative py-32 bg-[#0d1424]" aria-labelledby="contact-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
                        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Talk Security
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Ready to strengthen your security posture? Our senior advisors are here to help you navigate the complexities of modern IT security.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400" aria-hidden="true">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <a href="mailto:info@polarisconsulting.net" className="text-white hover:text-cyan-400 transition-colors">
                                        info@polarisconsulting.net
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400" aria-hidden="true">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Location</div>
                                    <span className="text-white">Serving clients across the United States</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
                        {formStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm text-gray-400 mb-2">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">How can we help?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                                        placeholder="Tell us about your security needs..."
                                    />
                                </div>

                                {formStatus === 'error' && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
