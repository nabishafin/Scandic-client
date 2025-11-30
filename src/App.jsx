import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalHeader } from './components/layout/GlobalHeader';
import GlobalFooter from './components/layout/GlobalFooter';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Ecosystem from './pages/Ecosystem';
import HowToBuy from './pages/HowToBuy';
import BuyCoins from './pages/BuyCoins';
import Whitepapers from './pages/Whitepapers';
import Contact from './pages/Contact';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { VerifyEmail } from './components/auth/VerifyEmail';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { ResetPassword } from './components/auth/ResetPassword';
import { OTPVerification } from './components/auth/OTPVerification';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

export function App() {
    return (
        <Router>
            <div className="min-h-screen text-[var(--text-primary)]">
                <GlobalHeader />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/ecosystem" element={<Ecosystem />} />
                    <Route path="/how-to-buy" element={<HowToBuy />} />
                    <Route path="/buy-coins" element={
                        <ProtectedRoute>
                            <BuyCoins />
                        </ProtectedRoute>
                    } />
                    <Route path="/whitepapers" element={<Whitepapers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify-email" element={<VerifyEmail />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/verify-otp" element={<OTPVerification />} />
                </Routes>

                <GlobalFooter />
            </div>
        </Router>
    );
}
