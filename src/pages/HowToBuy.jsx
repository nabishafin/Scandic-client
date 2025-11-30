import React from 'react';
import { Wallet, DollarSign, ArrowRight, Shield, CheckCircle2, Circle, Sparkles } from 'lucide-react';

import { Button } from '../components/ui/Button';
import GlobeBackground from '../components/globe/GlobeBackground';

const HowToBuy = () => {
    const steps = [{
        number: 1,
        title: 'Create a Wallet',
        description: 'Set up a Solana-compatible wallet to store your SNC tokens securely.',
        details: ['Download Phantom or Solflare wallet (mobile or browser extension)', 'Create a new wallet and securely backup your seed phrase', 'Never share your seed phrase with anyone', 'Enable biometric security for added protection', 'Write down your seed phrase on paper and store it safely'],
        icon: Wallet,
        status: "active" // Simulating status for visual consistency
    }, {
        number: 2,
        title: 'Add SOL for Fees',
        description: 'Purchase a small amount of SOL to cover network transaction fees.',
        details: ['Buy SOL from a major exchange (Coinbase, Binance, Kraken)', 'You only need ~$5-10 worth of SOL for transaction fees', 'Send SOL to your wallet address', 'Wait for confirmation (usually 1-2 minutes)', 'Keep some SOL in your wallet for future transactions'],
        icon: DollarSign,
        status: "upcoming"
    }, {
        number: 3,
        title: 'Swap for SNC',
        description: 'Exchange SOL or USDT for Scandic Coin on a decentralized exchange.',
        details: ['Visit Raydium or Jupiter (recommended DEXs)', 'Connect your wallet to the exchange', 'Select SOL or USDT as input, SNC as output', 'Enter the amount you want to swap', 'Review the transaction and confirm', 'SNC will appear in your wallet within seconds'],
        icon: ArrowRight,
        status: "upcoming"
    }, {
        number: 4,
        title: 'Store Securely',
        description: 'Keep your SNC safe and consider staking for rewards.',
        details: ['Your SNC is now in your wallet—you have full custody', 'Consider staking SNC for passive rewards', 'Use hardware wallet for large amounts (Ledger)', 'Enable all security features in your wallet', 'Regularly backup your wallet and seed phrase'],
        icon: Shield,
        status: "upcoming"
    }];

    const exchanges = [{
        name: 'Raydium',
        type: 'DEX',
        url: '#',
        featured: true
    }, {
        name: 'Jupiter',
        type: 'DEX',
        url: '#',
        featured: true
    }, {
        name: 'Orca',
        type: 'DEX',
        url: '#',
        featured: false
    }, {
        name: 'Major CEX',
        type: 'CEX',
        url: '#',
        featured: true,
        comingSoon: true
    }, {
        name: 'Tier-1 Exchange',
        type: 'CEX',
        url: '#',
        featured: false,
        comingSoon: true
    }];

    return (
        <div className="w-full pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-none">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <GlobeBackground />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--gold)] mb-6 text-shadow-gold">
                        Buy Scandic Coin Securely
                    </h1>
                    <div className="text-xl text-[var(--gold)] max-w-3xl mx-auto leading-relaxed">
                        <p className="text-lg text-white/80">
                            Get started with SNC in four simple steps. Safe, secure, and
                            compliant.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Flow (Vertical Timeline) */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pb-16 last:pb-0">
                                {/* Connector Line */}
                                <div
                                    className={`absolute left-[2rem] w-[2px] bg-[var(--gold)] hidden md:block
                                        ${index === 0 ? 'top-[2rem] bottom-0' :
                                            index === steps.length - 1 ? 'top-0 h-[2rem]' :
                                                'top-0 bottom-0'}
                                    `}
                                />

                                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                    {/* Step Number Indicator */}
                                    <div className="flex-shrink-0 hidden md:block">
                                        <div
                                            className="w-16 h-16 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center bg-[var(--gold)]"
                                        >
                                            <span className="text-2xl font-display font-bold text-black">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                                <div className="flex items-center gap-4 md:block">
                                                    {/* Mobile Step Indicator */}
                                                    <div className="md:hidden w-12 h-12 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center bg-[var(--gold)]">
                                                        <span className="text-lg font-display font-bold text-black">
                                                            {step.number}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-2">
                                                            {step.title}
                                                        </h2>
                                                        <p className="text-sm text-white/60 font-mono">
                                                            STEP {step.number}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-4 md:mt-0">
                                                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                                                        <step.icon className="text-[var(--gold)]" size={24} />
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg text-white mb-8 leading-relaxed">
                                                {step.description}
                                            </p>

                                            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                                                Action Items
                                            </h3>

                                            <div className="grid md:grid-cols-2 gap-3">
                                                {step.details.map((detail, dIndex) => (
                                                    <div
                                                        key={dIndex}
                                                        className="flex items-start space-x-3 bg-black/30 rounded-lg p-3"
                                                    >
                                                        <CheckCircle2 className="text-[var(--gold)] flex-shrink-0 mt-0.5" size={16} />
                                                        <p className="text-sm text-white/70">
                                                            {detail}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Block */}
            <section className="py-32 px-6 ">
                <div className="max-w-5xl mx-auto">
                    <div className="glass-panel rounded-3xl p-12 md:p-16 glow-gold">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 rounded-full bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0">
                                <Shield className="text-[var(--gold)]" size={48} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-4">
                                    Regulatory Compliance & Security
                                </h2>
                                <p className="text-lg text-white/80 leading-relaxed mb-6">
                                    Scandic Coin operates under full regulatory compliance with
                                    AML/KYC procedures. All transactions are monitored for
                                    security, and we partner with leading audit firms to ensure
                                    the highest standards of safety and transparency.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-mono font-bold text-[var(--gold)] mb-1">
                                            100%
                                        </div>
                                        <div className="text-sm text-white/60">Compliant</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-mono font-bold text-[var(--gold)] mb-1">
                                            24/7
                                        </div>
                                        <div className="text-sm text-white/60">Monitoring</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-mono font-bold text-[var(--gold)] mb-1">
                                            Audited
                                        </div>
                                        <div className="text-sm text-white/60">Smart Contracts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Exchanges */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Where to Buy SNC
                        </h2>
                        <p className="text-lg text-white/60">
                            Available on leading decentralized and centralized exchanges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exchanges.map((exchange, index) => (
                            <div key={index} className={`glass-panel rounded-xl p-8 text-center hover:border-[var(--gold)] transition-all duration-500 ${exchange.featured ? 'border-[var(--gold)]/50' : ''}`}>
                                <div className="text-4xl font-display font-bold text-[var(--gold)] mb-3">
                                    {exchange.name}
                                </div>
                                <div className="text-sm text-white/60 mb-6">
                                    {exchange.type} •{' '}
                                    {exchange.comingSoon ? 'Coming Soon' : 'Live Now'}
                                </div>
                                {!exchange.comingSoon && (
                                    <Button variant="outline" className="w-full">
                                        Trade Now
                                    </Button>
                                )}
                                {exchange.comingSoon && (
                                    <div className="text-sm text-white/40">
                                        Listing in Progress
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="glass-panel rounded-3xl p-12 md:p-16 text-center glow-gold relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="absolute w-2 h-2 bg-[var(--gold)] rounded-full animate-float" style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`
                                }} />
                            ))}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
                            Start Your Journey
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                            Own a piece of the future with Scandic Coin. Join thousands of
                            holders building the bridge between traditional luxury and
                            blockchain innovation.
                        </p>

                        <Button size="lg" className="relative z-10">
                            Buy Scandic Coin Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default HowToBuy;