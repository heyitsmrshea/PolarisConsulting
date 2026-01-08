import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Terms() {
    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white">
            <Header />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            ← Back to Home
                        </Link>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
                    <p className="text-gray-400 mb-12">Last updated: January 7, 2025</p>

                    <div className="prose prose-invert prose-gray max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By accessing or using the Polaris Consulting website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Polaris Consulting provides cybersecurity and IT consulting services, including but not limited to security operations, Microsoft 365 management, compliance and governance, endpoint management, backup and recovery, and fractional CISO services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Professional Services Agreement</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Specific services engaged will be governed by a separate Professional Services Agreement or Statement of Work that outlines the scope, deliverables, timeline, and fees for the engagement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All content on this website, including text, graphics, logos, and software, is the property of Polaris Consulting or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                            <p className="text-gray-300 leading-relaxed">
                                To the maximum extent permitted by law, Polaris Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Indemnification</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You agree to indemnify and hold harmless Polaris Consulting, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. Specific confidentiality obligations will be outlined in our service agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
                            <p className="text-gray-300 leading-relaxed">
                                These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
                            <p className="text-gray-300 leading-relaxed">
                                For questions about these Terms of Service, please contact us at{' '}
                                <a href="mailto:info@polarisconsulting.net" className="text-cyan-400 hover:text-cyan-300">
                                    info@polarisconsulting.net
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
