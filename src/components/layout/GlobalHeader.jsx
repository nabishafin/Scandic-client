import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function GlobalHeader({ onLoginClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About & Team' },
        { path: '/roadmap', label: 'Roadmap' },
        { path: '/ecosystem', label: 'Ecosystem & Use Cases' },
        { path: '/how-to-buy', label: 'How to Buy' },
        { path: '/whitepapers', label: 'Whitepapers' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-primary)] border-b border-[var(--gold)]' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="text-[var(--bg-primary)] font-bold text-lg">S</span>
                        </div>
                        <span className="text-xl font-semibold text-[var(--gold)] tracking-wide">
                            SCANDIC COIN
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm tracking-wide transition-colors duration-300 relative group ${location.pathname === link.path
                                        ? 'text-[var(--gold)]'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--gold)]'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={onLoginClick}
                            className="px-6 py-2 text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-xl transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                        >
                            Login
                        </button>
                        <Link
                            to="/how-to-buy"
                            className="px-6 py-2 text-sm text-[var(--bg-primary)] bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105"
                        >
                            Buy Coins
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="xl:hidden text-[var(--gold)] p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-[var(--bg-secondary)] border-t border-[var(--gold)]"
                    >
                        <nav className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-sm py-2 ${location.pathname === link.path
                                            ? 'text-[var(--gold)]'
                                            : 'text-[var(--text-secondary)]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-3 pt-4 border-t border-[var(--gold)]">
                                <button
                                    onClick={() => {
                                        onLoginClick();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-6 py-2 text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-full"
                                >
                                    Login
                                </button>
                                <Link
                                    to="/how-to-buy"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-6 py-2 text-sm text-center text-[var(--bg-primary)] bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] rounded-full font-medium"
                                >
                                    Buy Coins
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default GlobalHeader;
