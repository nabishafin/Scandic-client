import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { GlobeBackground } from '../globe/GlobeBackground';
import { GlassPanel } from '../ui/GlassPanel';
import { Button } from '../ui/Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function OTPVerification() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        console.log('OTP verification attempt:', { otp: otpValue });

        if (otpValue.length === 6) {
            // Simulate verification success
            alert('Verification Successful!');
            // Here you would typically redirect to a "Set New Password" page
            // For now, we'll redirect to login
            navigate('/login');
        }
    };

    return (
        <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            <GlobeBackground />

            <div className="relative z-10 w-full max-w-md px-4">
                <GlassPanel className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] mb-2">
                            Verify OTP
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            Enter the 6-digit code sent to your email
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex justify-center gap-2">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                    className="w-10 h-12 text-center text-xl font-bold bg-[var(--bg-primary)]/50 border border-[var(--gold)]/20 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
                                />
                            ))}
                        </div>

                        <Button type="submit" className="w-full justify-center group">
                            Verify Code
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="mt-8 text-center space-y-4">
                        <p className="text-sm text-[var(--text-secondary)]">
                            Didn't receive the code?{' '}
                            <button className="text-[var(--gold)] font-medium hover:text-[var(--gold-light)] transition-colors">
                                Resend Code
                            </button>
                        </p>

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
