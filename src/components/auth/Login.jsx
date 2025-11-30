import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlobeBackground } from '../globe/GlobeBackground';
import { GlassPanel } from '../ui/GlassPanel';
import { Button } from '../ui/Button';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            <GlobeBackground />

            <div className="relative z-10 w-full max-w-md px-4">
                <GlassPanel className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            Access your Scandic portfolio
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-[var(--gold)]/50 group-focus-within:text-[var(--gold)] transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[var(--bg-primary)]/50 border border-[var(--gold)]/20 rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-[var(--text-secondary)]">
                                    Password
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-xs text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-[var(--gold)]/50 group-focus-within:text-[var(--gold)] transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[var(--bg-primary)]/50 border border-[var(--gold)]/20 rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full justify-center group">
                            Sign In
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-[var(--text-secondary)]">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="text-[var(--gold)] font-medium hover:text-[var(--gold-light)] transition-colors"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </GlassPanel>
            </div>
        </div>
    );
}