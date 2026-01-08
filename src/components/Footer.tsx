import { Link } from 'react-router-dom'

export function Footer() {
    const basePath = import.meta.env.BASE_URL

    return (
        <footer className="py-12 border-t border-white/5" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={`${basePath}logo-icon.svg`}
                            alt="Polaris Consulting logo"
                            className="h-10 w-10"
                        />
                        <span className="text-gray-400">© 2025 Polaris Consulting. All rights reserved.</span>
                    </div>
                    <nav className="flex gap-6" aria-label="Footer navigation">
                        <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</Link>
                        <a href="mailto:info@polarisconsulting.net" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
