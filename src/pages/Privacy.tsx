import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Privacy() {
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

                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-gray-400 mb-12">Last updated: January 7, 2025</p>

                    <div className="prose prose-invert prose-gray max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 leading-relaxed">
                                At Polaris Consulting, we collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us. This may include your name, email address, company name, phone number, and any other information you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Respond to your inquiries and provide the services you request</li>
                                <li>Send you technical notices, updates, and administrative messages</li>
                                <li>Communicate with you about our services, offers, and events</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law. We may share information with trusted service providers who assist us in operating our website and conducting our business.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                            <p className="text-gray-300 leading-relaxed">
                                As a cybersecurity company, we take data security seriously. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us at{' '}
                                <a href="mailto:info@polarisconsulting.net" className="text-cyan-400 hover:text-cyan-300">
                                    info@polarisconsulting.net
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
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
