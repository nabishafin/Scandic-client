import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Wallet } from 'lucide-react';

export function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
                    >
                        <div className="glass-panel rounded-2xl p-8 relative">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-semibold text-[var(--gold)] mb-2">
                                    Welcome Back
                                </h2>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    Sign in to access your Scandic Coin account
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm text-[var(--text-secondary)] mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-[var(--bg-secondary)] border border-[var(--gold)]/20 rounded-lg pl-12 pr-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm text-[var(--text-secondary)] mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-[var(--bg-secondary)] border border-[var(--gold)]/20 rounded-lg pl-12 pr-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] text-[var(--bg-primary)] font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
                                >
                                    Sign In
                                </button>

                                {/* Divider */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[var(--gold)]/20"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-[var(--bg-primary)] text-[var(--text-tertiary)]">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                {/* Wallet login */}
                                <button
                                    type="button"
                                    className="w-full border border-[var(--gold)] text-[var(--text-primary)] font-medium py-3 rounded-lg transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] flex items-center justify-center space-x-2"
                                >
                                    <Wallet size={20} />
                                    <span>Connect Wallet</span>
                                </button>
                            </form>

                            {/* Security note */}
                            <p className="text-xs text-[var(--text-tertiary)] text-center mt-6">
                                Your connection is secure and encrypted. We never store your
                                private keys.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default LoginModal;
