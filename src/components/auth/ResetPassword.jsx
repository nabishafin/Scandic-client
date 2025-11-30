import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GlobeBackground } from '../globe/GlobeBackground';
import { GlassPanel } from '../ui/GlassPanel';
import { Button } from '../ui/Button';
import { Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useResetPasswordMutation } from '../../redux/api/authApi';

export function ResetPassword() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const otpValue = otp.join('');

        if (otpValue.length === 6) {
            try {
                await resetPassword({ email, otp: otpValue, newPassword }).unwrap();
                alert('Password reset successful!');
                navigate('/login');
            } catch (error) {
                console.error('Reset password failed:', error);
                alert(error?.data?.message || 'Failed to reset password. Please try again.');
            }
        } else {
            alert('Please enter all 6 digits of the OTP.');
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
                            Enter the 6-digit code sent to {email || 'your email'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* OTP Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">
                                Verification Code
                            </label>
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
                                        disabled={isLoading}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* New Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">
                                New Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-[var(--gold)]/50 group-focus-within:text-[var(--gold)] transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full bg-[var(--bg-primary)]/50 border border-[var(--gold)]/20 rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
                                    placeholder="Enter new password"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-[var(--gold)]/50 group-focus-within:text-[var(--gold)] transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-[var(--bg-primary)]/50 border border-[var(--gold)]/20 rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
                                    placeholder="Confirm new password"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full justify-center group" disabled={isLoading}>
                            {isLoading ? 'Resetting Password...' : 'Reset Password'}
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
