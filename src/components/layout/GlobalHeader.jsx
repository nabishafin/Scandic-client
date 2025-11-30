import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from '../../redux/slices/authSlice';

export function GlobalHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Roadmap', path: '/roadmap' },
        { name: 'Ecosystem', path: '/ecosystem' },
        { name: 'Whitepapers', path: '/whitepapers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--gold)]/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-[var(--gold)] rounded-full opacity-20 group-hover:animate-ping" />
                            <div className="absolute inset-0 border-2 border-[var(--gold)] rounded-full animate-spin-slow" />
                            <div className="absolute inset-2 bg-[var(--gold)] rounded-full" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]">
                            SCANDIC
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-[var(--gold)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--gold)]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                <div className="px-4 py-2 text-sm bg-transparent border border-[var(--gold)] rounded-xl flex items-center gap-2 text-[var(--text-primary)]">
                                    <Coins className="h-4 w-4 text-[var(--gold)]" />
                                    <span className="font-medium">{user?.tokens || 0}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        dispatch(logout());
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('refreshToken');
                                        navigate('/');
                                    }}
                                    className="px-6 py-2 text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-xl transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="px-6 py-2 text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-xl transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                            >
                                Login
                            </Link>
                        )}
                        <Link
                            to="/buy-coins"
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
                        className="xl:hidden bg-[var(--bg-secondary)] border-b border-[var(--gold)]/10 overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                        ? 'text-[var(--gold)]'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--gold)]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3">
                                {isAuthenticated ? (
                                    <>
                                        <div className="w-full px-4 py-3 text-center text-sm bg-transparent border border-[var(--gold)] rounded-xl flex items-center justify-center gap-2 text-[var(--text-primary)]">
                                            <Coins className="h-4 w-4 text-[var(--gold)]" />
                                            <span className="font-medium">{user?.tokens || 0} Tokens</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                dispatch(logout());
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('refreshToken');
                                                navigate('/');
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="w-full px-6 py-3 text-center text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-xl transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="w-full px-6 py-3 text-center text-sm text-[var(--text-primary)] border border-[var(--gold)] rounded-xl transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                                    >
                                        Login
                                    </Link>
                                )}
                                <Link
                                    to="/buy-coins"
                                    className="w-full px-6 py-3 text-center text-sm text-[var(--bg-primary)] bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
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
