import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function GlobalFooter() {
    const aboutLinks = [
        { label: 'About Us', path: '/about' },
        { label: 'Team', path: '/about#team' },
        { label: 'Roadmap', path: '/roadmap' },
        { label: 'Contact', path: '/contact' },
    ];

    const ecosystemLinks = [
        { label: 'Scandic Pay', path: '/ecosystem#pay' },
        { label: 'Scandic Estate', path: '/ecosystem#estate' },
        { label: 'Scandic Fly', path: '/ecosystem#fly' },
        { label: 'Scandic Yachts', path: '/ecosystem#yachts' },
        { label: 'Scandic Cars', path: '/ecosystem#cars' },
        { label: 'Scandic Data', path: '/ecosystem#data' },
        { label: 'Scandic Health', path: '/ecosystem#health' },
        { label: 'Scandic Sec', path: '/ecosystem#sec' },
    ];

    const legalLinks = [
        { label: 'Whitepaper', path: '/whitepapers' },
        { label: 'Privacy Policy', path: '/whitepapers#privacy' },
        { label: 'Terms & Conditions', path: '/whitepapers#terms' },
        { label: 'Legal Notice', path: '/whitepapers#legal' },
        { label: 'Compliance', path: '/whitepapers#compliance' },
    ];

    const socialLinks = [
        { icon: Twitter, label: 'Twitter', href: '#' },
        { icon: Linkedin, label: 'LinkedIn', href: '#' },
        { icon: Github, label: 'GitHub', href: '#' },
        { icon: Mail, label: 'Email', href: '#' },
        { icon: Globe, label: 'Website', href: '#' },
    ];

    return (
        <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--gold)] mt-16 bg-[var(--bg-primary)]">
            {/* Animated top line */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="w-full mx-auto px-4 lg:px-0 py-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* About Scandic */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--gold)] mb-3 tracking-wide">
                            About Scandic
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                            Scandic Coin (SNC) is a regulated utility token connecting aviation,
                            real estate, data, and lifestyle under one blockchain ecosystem.
                        </p>
                        <div className="space-y-1.5">
                            {aboutLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-xs text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--gold)] mb-3 tracking-wide">
                            Ecosystem
                        </h3>
                        <div className="space-y-1.5">
                            {ecosystemLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-xs text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--gold)] mb-3 tracking-wide">
                            Legal
                        </h3>
                        <div className="space-y-1.5">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-xs text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--gold)] mb-3 tracking-wide">
                            Connect
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] mb-4">
                            Join the global network shaping real-world blockchain finance.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-xs transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-[var(--gold)]">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                        <p className="text-xs text-[var(--text-tertiary)] text-center md:text-left">
                            © 2025 Scandic Group • All Rights Reserved
                        </p>

                        <select className="bg-transparent border border-[var(--gold)]/30 text-[var(--text-secondary)] text-xs px-3 py-1.5 rounded-full focus:outline-none focus:border-[var(--gold)]">
                            <option>English</option>
                            <option>Español</option>
                            <option>Français</option>
                            <option>Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default GlobalFooter;
