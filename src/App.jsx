import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalHeader from './components/layout/GlobalHeader';
import GlobalFooter from './components/layout/GlobalFooter';
import LoginModal from './components/layout/LoginModal';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Ecosystem from './pages/Ecosystem';
import HowToBuy from './pages/HowToBuy';
import BuyCoins from './pages/BuyCoins';
import Whitepapers from './pages/Whitepapers';
import Contact from './pages/Contact';

export function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <Router>
            <div className="min-h-screen text-[var(--text-primary)]">
                <GlobalHeader onLoginClick={() => setIsLoginModalOpen(true)} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/ecosystem" element={<Ecosystem />} />
                    <Route path="/how-to-buy" element={<HowToBuy />} />
                    <Route path="/buy-coins" element={<BuyCoins />} />
                    <Route path="/whitepapers" element={<Whitepapers />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <GlobalFooter />

                <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
            </div>
        </Router>
    );
}
