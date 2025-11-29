import React from 'react';
import { CreditCard, Home, Plane, Ship, Car, Database, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

import { Button } from '../components/ui/Button';
import GlobeBackground from '../components/globe/GlobeBackground';

const Ecosystem = ({
    onBuyClick
}) => {
    const divisions = [{
        icon: CreditCard,
        name: 'ScandicPay',
        tagline: 'Payments & Fiat Bridge',
        description: 'Enterprise-grade payment infrastructure connecting traditional finance with blockchain. ScandicPay enables instant settlements, fiat-to-crypto bridges, and merchant solutions for businesses across the Scandic ecosystem.',
        features: ['Instant fiat on/off ramps with bank integration', 'Merchant payment processing with 0.5% fees', 'Multi-currency support (USD, EUR, GBP, SEK)', 'Card issuance program for SNC holders', 'B2B payment solutions for enterprise clients', 'Automated treasury management tools'],
        color: '#D9B75E'
    }, {
        icon: Home,
        name: 'ScandicEstate',
        tagline: 'Tokenized Real Estate',
        description: 'Fractional ownership of premium properties through blockchain. ScandicEstate democratizes access to high-value real estate investments with transparent ownership, instant liquidity, and automated rental distributions.',
        features: ['Fractional ownership starting from $1,000', 'Blockchain-verified property titles and ownership', 'Automated rental income distribution in SNC', 'Secondary market for instant liquidity', 'Professional property management included', 'Portfolio diversification across global markets'],
        color: '#A37C29'
    }, {
        icon: Plane,
        name: 'ScandicFly',
        tagline: 'Private Jet Charter',
        description: 'Book private aviation with cryptocurrency. ScandicFly provides access to a global fleet of private jets with transparent pricing, instant booking, and exclusive rewards for SNC holders.',
        features: ['Book flights with SNC at 5% discount', 'Access to 5,000+ aircraft worldwide', 'Empty leg deals up to 75% off', 'VIP concierge and ground services', 'Loyalty rewards: earn 2% back in SNC', 'Carbon offset program included'],
        color: '#D9B75E'
    }, {
        icon: Ship,
        name: 'ScandicYachts',
        tagline: 'Brokerage & Charter',
        description: 'Luxury yacht sales, charter, and management powered by blockchain. ScandicYachts brings transparency to yacht transactions with verified ownership, smart contract escrow, and crypto payment options.',
        features: ['Charter yachts worldwide with SNC payments', 'Fractional yacht ownership programs', 'Blockchain-verified yacht provenance', 'Smart contract escrow for sales', 'Crew management and maintenance tracking', 'Exclusive member events and regattas'],
        color: '#A37C29'
    }, {
        icon: Car,
        name: 'ScandicCars',
        tagline: 'Luxury Mobility',
        description: 'Premium vehicle rentals and subscriptions with crypto. ScandicCars offers instant access to luxury and exotic vehicles with flexible terms, transparent pricing, and seamless blockchain payments.',
        features: ['Instant rental booking with SNC', 'Fleet includes Lamborghini, Ferrari, Rolls-Royce', 'Flexible subscriptions: daily, weekly, monthly', 'Delivery and pickup service included', 'Loyalty program: unlock exclusive vehicles', 'Insurance and maintenance fully covered'],
        color: '#D9B75E'
    }, {
        icon: Database,
        name: 'ScandicData',
        tagline: 'AI & Compute Infrastructure',
        description: 'Enterprise cloud and AI services paid with SNC. ScandicData provides scalable compute resources, GPU clusters for AI training, and data storage solutions with blockchain-based billing and access control.',
        features: ['Pay-per-use GPU compute for AI/ML', 'Decentralized storage with encryption', 'API access for enterprise applications', 'Auto-scaling infrastructure', 'SNC payment discounts up to 15%', 'Developer tools and SDKs'],
        color: '#A37C29'
    }, {
        icon: Heart,
        name: 'ScandicHealth',
        tagline: 'Telemedicine & Wellness',
        description: 'Digital health services with blockchain-secured records. ScandicHealth connects patients with licensed physicians, provides prescription services, and offers wellness programs—all accessible with SNC.',
        features: ['Telemedicine consultations 24/7', 'Prescription delivery service', 'Blockchain-secured health records', 'Wellness and fitness programs', 'Mental health support services', 'Health rewards: earn SNC for healthy habits'],
        color: '#D9B75E'
    }, {
        icon: ShieldCheck,
        name: 'ScandicSec',
        tagline: 'Security & Compliance',
        description: 'Enterprise security audits and compliance services. ScandicSec helps businesses navigate blockchain regulation, conduct security assessments, and implement best practices for crypto operations.',
        features: ['Smart contract security audits', 'AML/KYC compliance consulting', 'Regulatory advisory services', 'Penetration testing and risk assessment', 'Incident response and recovery', 'Ongoing security monitoring'],
        color: '#A37C29'
    }];

    const userStories = [{
        title: 'Business Travel',
        story: 'Sarah books a private jet from London to Dubai using SNC, earning 2% back in rewards. She pays with ScandicPay, converting from her business account instantly.'
    }, {
        title: 'Real Estate Investment',
        story: 'Marcus invests $5,000 in tokenized luxury apartments across three cities through ScandicEstate, receiving monthly rental income in SNC automatically.'
    }, {
        title: 'AI Development',
        story: 'TechCorp uses ScandicData GPU clusters to train their AI models, paying with SNC and saving 15% compared to traditional cloud providers.'
    }, {
        title: 'Yacht Charter',
        story: 'The Johnson family charters a 60ft yacht in the Mediterranean for a week, paying with SNC and accessing exclusive member-only anchorages.'
    }, {
        title: 'Luxury Weekend',
        story: 'Alex rents a Lamborghini Huracán for the weekend through ScandicCars, books a telemedicine consultation via ScandicHealth, all paid seamlessly with SNC.'
    }];

    const benefits = [{
        title: 'Speed',
        description: 'Instant settlements and real-time transactions across all services'
    }, {
        title: 'Transparency',
        description: 'Blockchain-verified ownership, pricing, and transaction history'
    }, {
        title: 'Cross-Vertical Rewards',
        description: 'Earn and spend SNC across aviation, real estate, luxury, and tech'
    }, {
        title: 'Global Reach',
        description: 'Access premium services worldwide with a single token'
    }, {
        title: 'Security',
        description: 'Enterprise-grade security and regulatory compliance'
    }, {
        title: 'Unified Experience',
        description: 'One account, one wallet, seamless access to all divisions'
    }];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 pointer-events-none">
                    <GlobeBackground />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 text-shadow-gold leading-tight">
                        Scandic Ecosystem
                    </h1>
                    <p className="text-2xl font-display text-gold mb-6">
                        Real Companies. Real Utility.
                    </p>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Scandic Coin powers transactions across eight integrated
                        divisions—from private aviation and tokenized real estate to AI
                        infrastructure and telemedicine. One token, infinite possibilities.
                    </p>
                </div>
            </section>

            {/* Divisions */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {divisions.map((division, index) => (
                        <div key={index} className="flex">
                            <div className="w-full">
                                <div className="glass-panel rounded-2xl p-10 glow-gold">

                                    {/* ICON REMOVED FROM HERE */}
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{
                                        backgroundColor: `${division.color}20`,
                                        border: `2px solid ${division.color}`
                                    }}>
                                        <division.icon className="text-gold" size={40} />
                                    </div>


                                    <h2 className="text-3xl text-[var(--gold)] font-display font-bold mb-2">
                                        {division.name}
                                    </h2>

                                    <p className="text-lg text-white/60 mb-4">
                                        {division.tagline}
                                    </p>

                                    <div className="h-1 w-20 bg-gold mb-6" />

                                    <p className="text-base text-white/80 leading-relaxed mb-6">
                                        {division.description}
                                    </p>

                                    <div className="space-y-2">
                                        <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                                            Key Features
                                        </h3>

                                        {division.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                                <p className="text-white/70 leading-relaxed text-sm">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Ecosystem Diagram */}
            <section className="py-32 px-6  ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Connected Ecosystem
                        </h2>
                        <p className="text-lg text-white/60">
                            One token powering eight integrated divisions
                        </p>
                    </div>

                    <div className="relative">
                        <div className="glass-panel rounded-3xl p-16">
                            {/* Central Token */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-32 h-32 rounded-full bg-[var(--gold)] flex items-center justify-center glow-gold">
                                    <div className="text-center">
                                        <div className="text-2xl font-display font-bold text-black">
                                            SNC
                                        </div>
                                        <div className="text-xs text-black/70">Token</div>
                                    </div>
                                </div>
                            </div>

                            {/* Division Nodes */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {divisions.map((division, index) => (
                                    <div key={index} className="glass-panel rounded-xl p-6 text-center hover:border-[var(--gold)] transition-all duration-300 cursor-pointer group">
                                        <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{
                                            backgroundColor: `${division.color}20`
                                        }}>
                                            <division.icon className="text-[var(--gold)]" size={24} />
                                        </div>
                                        <h3 className="text-sm font-semibold text-white group-hover:text-[var(--gold)] transition-colors">
                                            {division.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Stories */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Real-World Use Cases
                        </h2>
                        <p className="text-lg text-white/60">
                            How people use Scandic Coin every day
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {userStories.map((story, index) => (
                            <div key={index} className="glass-panel rounded-xl p-8 hover:border-[var(--gold)] transition-all duration-300">
                                <h3 className="text-xl font-display font-semibold text-[var(--gold)] mb-4">
                                    {story.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">{story.story}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Summary */}
            <section className="py-32 px-6 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Why Use SNC Across the Ecosystem
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="glass-panel rounded-xl p-8 text-center hover:border-[var(--gold)] transition-all duration-300">
                                <h3 className="text-2xl font-display font-semibold text-[var(--gold)] mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="glass-panel rounded-3xl p-12 md:p-16 text-center glow-gold">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Join the Ecosystem
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Own a piece of the future with Scandic Coin. Access premium
                            services, earn rewards, and be part of the blockchain revolution
                            in luxury and enterprise.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button onClick={onBuyClick} size="lg">
                                Buy SNC Now
                            </Button>
                            <Button className='flex items-center gap-2' variant="outline" size="lg">
                                Connect Wallet
                                <ArrowRight size={20} />
                            </Button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ecosystem;