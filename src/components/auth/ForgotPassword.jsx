import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobeBackground } from '../globe/GlobeBackground';
import { GlassPanel } from '../ui/GlassPanel';
import { Button } from '../ui/Button';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { useForgotPasswordMutation } from '../../redux/api/authApi';

export function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await forgotPassword({ email }).unwrap();
            console.log('OTP sent to:', email);
            // Navigate to reset password page with email
            navigate('/reset-password', { state: { email } });
        } catch (error) {
            console.error('Forgot password failed:', error);
            alert(error?.data?.message || 'Failed to send reset code. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            <GlobeBackground />

            <div className="relative z-10 w-full max-w-md px-4">
                <GlassPanel className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] mb-2">
                            Reset Password
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            Enter your email to receive a 6-digit verification code
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
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full justify-center group" disabled={isLoading}>
                            {isLoading ? 'Sending Code...' : 'Send Verification Code'}
                            {!isLoading && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link
                            to="/login"
                            className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Login
                        </Link>
                    </div>
                </GlassPanel>
            </div>
        </div>
    );
}
