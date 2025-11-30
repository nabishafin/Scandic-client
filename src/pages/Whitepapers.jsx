import React, { useState } from 'react';
import { FileText, Download, Shield, TrendingUp, Users, Scale } from 'lucide-react';

import { Button } from '../components/ui/Button';
import GlobeBackground from '../components/globe/GlobeBackground';
const Whitepapers = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const tabs = [{
        id: 'overview',
        label: 'Whitepaper Overview',
        icon: FileText
    }, {
        id: 'tokenomics',
        label: 'Tokenomics',
        icon: TrendingUp
    }, {
        id: 'legal',
        label: 'Legal Notice',
        icon: Scale
    }, {
        id: 'privacy',
        label: 'Privacy Policy',
        icon: Shield
    }, {
        id: 'terms',
        label: 'Terms & Conditions',
        icon: Users
    }, {
        id: 'compliance',
        label: 'Compliance',
        icon: Shield
    }];
    return <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* <div className="absolute inset-0">
                    {[...Array(100)].map((_, i) => <div key={i} className="absolute text-gold/10 font-mono text-xs" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`
                    }}>
                        {Math.random() > 0.5 ? '01' : '10'}
                    </div>)}
                </div> */}
                <GlobeBackground />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-shadow-gold">
                    Whitepaper & Legal Framework
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    Complete documentation covering tokenomics, legal structure,
                    compliance, and our vision for real-world blockchain utility.
                </p>
            </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-16 px-6 sticky top-20 z-40 backdrop-blur-xl ">
            <div className="max-w-7xl mx-auto">
                <div className="flex overflow-x-auto space-x-4 pb-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-[var(--gold)] text-black'
                                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <tab.icon size={18} />
                            <span className="font-medium">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>

        {/* Content Sections */}
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {activeTab === 'overview' && <div className="space-y-12">
                    <div className="glass-panel rounded-2xl p-12">
                        <h2 className="text-4xl font-display font-bold text-gold mb-6">
                            Scandic Coin Whitepaper
                        </h2>
                        <div className="h-1 w-24 bg-gold mb-8" />

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-white/80 leading-relaxed mb-6">
                                Scandic Coin (SNC) represents a new paradigm in blockchain
                                utility—bridging traditional premium services with
                                decentralized finance through a regulated, transparent token
                                ecosystem.
                            </p>

                            <h3 className="text-2xl font-display font-semibold text-white mt-12 mb-4">
                                Executive Summary
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                The cryptocurrency market has been dominated by speculative
                                assets with limited real-world utility. Scandic Coin
                                addresses this gap by creating genuine use cases across
                                eight integrated business divisions: payments, real estate,
                                aviation, yachts, luxury vehicles, AI infrastructure,
                                telemedicine, and security services.
                            </p>

                            <h3 className="text-2xl font-display font-semibold text-white mt-12 mb-4">
                                Problem Statement
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Traditional luxury services remain fragmented, with separate
                                payment systems, loyalty programs, and access mechanisms.
                                Meanwhile, blockchain technology has struggled to achieve
                                mainstream adoption due to regulatory uncertainty and lack
                                of practical applications.
                            </p>

                            <h3 className="text-2xl font-display font-semibold text-white mt-12 mb-4">
                                Solution
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Scandic Coin unifies premium services under a single token,
                                providing instant settlements, transparent pricing,
                                cross-vertical rewards, and regulatory compliance. Built on
                                Solana for speed and low fees, SNC enables seamless
                                transactions across our entire ecosystem.
                            </p>

                            <h3 className="text-2xl font-display font-semibold text-white mt-12 mb-4">
                                Technology Stack
                            </h3>
                            <ul className="text-white/80 leading-relaxed space-y-2 mb-6">
                                <li>• Blockchain: Solana (high throughput, low fees)</li>
                                <li>
                                    • Smart Contracts: Rust-based, audited by leading security
                                    firms
                                </li>
                                <li>• Wallets: Phantom, Solflare integration</li>
                                <li>• Payment Rails: Fiat on/off ramps via ScandicPay</li>
                                <li>• Compliance: AML/KYC via Chainalysis and Elliptic</li>
                            </ul>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gold/20">
                            <Button size="lg">

                                Download Full Whitepaper (PDF)
                            </Button>
                        </div>
                    </div>
                </div>}

                {activeTab === 'tokenomics' && <div className="space-y-12">
                    <div className="glass-panel rounded-2xl p-12">
                        <h2 className="text-4xl font-display font-bold text-gold mb-6">
                            Token Economics
                        </h2>
                        <div className="h-1 w-24 bg-gold mb-8" />

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-black/30 rounded-xl p-6">
                                <div className="text-sm text-white/60 mb-2">
                                    Total Supply
                                </div>
                                <div className="text-3xl font-mono font-bold text-gold">
                                    1,000,000,000 SNC
                                </div>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <div className="text-sm text-white/60 mb-2">
                                    Initial Price
                                </div>
                                <div className="text-3xl font-mono font-bold text-gold">
                                    $0.10 USD
                                </div>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <div className="text-sm text-white/60 mb-2">
                                    Market Cap (Launch)
                                </div>
                                <div className="text-3xl font-mono font-bold text-gold">
                                    $100M USD
                                </div>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <div className="text-sm text-white/60 mb-2">Blockchain</div>
                                <div className="text-3xl font-mono font-bold text-gold">
                                    Solana
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-display font-semibold text-white mb-6">
                            Distribution Breakdown
                        </h3>

                        <div className="space-y-4">
                            {[{
                                label: 'Investors & Public Sale',
                                percent: 50,
                                amount: '500M',
                                vesting: '25% at TGE, 75% over 18 months'
                            }, {
                                label: 'Treasury Reserve',
                                percent: 20,
                                amount: '200M',
                                vesting: 'Locked for 24 months, then quarterly releases'
                            }, {
                                label: 'Team & Advisors',
                                percent: 15,
                                amount: '150M',
                                vesting: '12-month cliff, 36-month linear vesting'
                            }, {
                                label: 'Development Fund',
                                percent: 9,
                                amount: '90M',
                                vesting: 'Released quarterly for ecosystem development'
                            }, {
                                label: 'Marketing & Partnerships',
                                percent: 6,
                                amount: '60M',
                                vesting: 'Released monthly for growth initiatives'
                            }].map((item, index) => <div key={index} className="glass-panel rounded-lg p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-semibold text-white">
                                        {item.label}
                                    </h4>
                                    <div className="text-right">
                                        <div className="text-2xl font-mono font-bold text-gold">
                                            {item.percent}%
                                        </div>
                                        <div className="text-sm text-white/60">
                                            {item.amount} SNC
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-white/70">{item.vesting}</p>
                            </div>)}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gold/20">
                            <h3 className="text-2xl font-display font-semibold text-white mb-6">
                                Deflationary Mechanisms
                            </h3>
                            <ul className="text-white/80 leading-relaxed space-y-3">
                                <li>
                                    • <strong>Transaction Burns:</strong> 0.1% of all
                                    transactions burned permanently
                                </li>
                                <li>
                                    • <strong>Buyback Program:</strong> 10% of ecosystem
                                    revenue used for token buybacks
                                </li>
                                <li>
                                    • <strong>Staking Rewards:</strong> Locked tokens reduce
                                    circulating supply
                                </li>
                                <li>
                                    • <strong>Service Discounts:</strong> Holding SNC provides
                                    discounts, reducing sell pressure
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}

                {activeTab === 'legal' && <div className="glass-panel rounded-2xl p-12">
                    <h2 className="text-4xl font-display font-bold text-gold mb-6">
                        Legal Notice
                    </h2>
                    <div className="h-1 w-24 bg-gold mb-8" />

                    <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
                        <p>
                            <strong>Utility Token Disclaimer:</strong> Scandic Coin (SNC)
                            is a utility token designed to facilitate transactions within
                            the Scandic ecosystem. SNC is not a security, investment
                            contract, or financial instrument. It does not represent
                            ownership, equity, or profit-sharing rights in Scandic Group
                            or any affiliated entities.
                        </p>
                        <p>
                            <strong>Jurisdictional Restrictions:</strong> SNC is not
                            available to residents or citizens of the United States,
                            China, or other jurisdictions where token sales are
                            prohibited. By purchasing SNC, you confirm that you are not a
                            resident of a restricted jurisdiction and that you have
                            consulted with legal and tax advisors.
                        </p>
                        <p>
                            <strong>No Investment Advice:</strong> Nothing in this
                            documentation constitutes investment, legal, or tax advice.
                            All information is provided for informational purposes only.
                            You should conduct your own research and consult with
                            professional advisors before making any decisions.
                        </p>
                        <p>
                            <strong>Risk Disclosure:</strong> Cryptocurrency investments
                            carry significant risk, including the potential loss of your
                            entire investment. Token values may fluctuate significantly.
                            Regulatory changes may impact the utility or value of SNC.
                        </p>
                    </div>
                </div>}

                {activeTab === 'privacy' && <div className="glass-panel rounded-2xl p-12">
                    <h2 className="text-4xl font-display font-bold text-gold mb-6">
                        Privacy Policy
                    </h2>
                    <div className="h-1 w-24 bg-gold mb-8" />

                    <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
                        <p>
                            Scandic Group is committed to protecting your privacy and
                            personal data in accordance with GDPR, CCPA, and other
                            applicable data protection regulations.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            Data We Collect
                        </h3>
                        <ul>
                            <li>
                                Identity verification data (KYC): name, address, date of
                                birth, government ID
                            </li>
                            <li>Contact information: email, phone number</li>
                            <li>
                                Transaction data: wallet addresses, transaction history
                            </li>
                            <li>Usage data: website analytics, service interactions</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            How We Use Your Data
                        </h3>
                        <ul>
                            <li>Compliance with AML/KYC regulations</li>
                            <li>Processing transactions and providing services</li>
                            <li>Improving our products and user experience</li>
                            <li>Communicating updates and important information</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            Your Rights
                        </h3>
                        <p>
                            You have the right to access, correct, delete, or export your
                            personal data. You may also object to processing or request
                            restrictions. Contact privacy@scandic.group to exercise your
                            rights.
                        </p>
                    </div>
                </div>}

                {activeTab === 'terms' && <div className="glass-panel rounded-2xl p-12">
                    <h2 className="text-4xl font-display font-bold text-gold mb-6">
                        Terms & Conditions
                    </h2>
                    <div className="h-1 w-24 bg-gold mb-8" />

                    <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
                        <p>
                            By accessing or using Scandic Coin and related services, you
                            agree to be bound by these Terms and Conditions.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            1. Acceptance of Terms
                        </h3>
                        <p>
                            These terms constitute a legally binding agreement between you
                            and Scandic Group. If you do not agree, you must not use our
                            services.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            2. Eligibility
                        </h3>
                        <p>
                            You must be at least 18 years old and legally capable of
                            entering into binding contracts. You must not be a resident of
                            a restricted jurisdiction.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            3. User Responsibilities
                        </h3>
                        <ul>
                            <li>Maintain the security of your wallet and private keys</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Provide accurate information during KYC verification</li>
                            <li>Not engage in fraudulent or illegal activities</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-white mt-8">
                            4. Limitation of Liability
                        </h3>
                        <p>
                            Scandic Group is not liable for any losses resulting from
                            market volatility, technical issues, regulatory changes, or
                            user error. Our total liability is limited to the amount you
                            paid for SNC.
                        </p>
                    </div>
                </div>}

                {activeTab === 'compliance' && <div className="glass-panel rounded-2xl p-12">
                    <h2 className="text-4xl font-display font-bold text-gold mb-6">
                        Compliance Framework
                    </h2>
                    <div className="h-1 w-24 bg-gold mb-8" />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-display font-semibold text-white mb-4">
                                Regulatory Approach
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Scandic Group operates under a multi-jurisdictional
                                compliance framework, ensuring adherence to regulations in
                                the UAE, USA, and EU. We work closely with legal advisors
                                and regulatory bodies to maintain the highest standards.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/30 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gold mb-3">
                                    AML/KYC
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    All users undergo identity verification through our
                                    compliance partners. We monitor transactions for
                                    suspicious activity and report as required by law.
                                </p>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gold mb-3">
                                    Smart Contract Audits
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Quarterly security audits by leading firms (CertiK,
                                    Halborn). All audit reports published publicly for
                                    transparency.
                                </p>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gold mb-3">
                                    Financial Reporting
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Annual financial audits by Big Four accounting firms.
                                    Quarterly treasury reports published to community.
                                </p>
                            </div>
                            <div className="bg-black/30 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gold mb-3">
                                    Data Protection
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    GDPR and CCPA compliant data handling. Regular security
                                    assessments and penetration testing.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gold/20">
                            <h3 className="text-2xl font-display font-semibold text-white mb-4">
                                Audit Partners
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {['CertiK', 'Halborn', 'Chainalysis', 'Elliptic'].map(partner => <div key={partner} className="glass-panel rounded-lg p-4 text-center">
                                    <div className="text-gold font-semibold">
                                        {partner}
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </section>

        {/* Closing Note */}
        <section className="py-32 px-6  ">
            <div className="max-w-4xl mx-auto">
                <div className="glass-panel rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">
                        Corporate Ethics & Sustainability
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Scandic Group is committed to operating with the highest ethical
                        standards, environmental responsibility, and social impact. We
                        believe blockchain technology should serve humanity, not just
                        speculation. Our commitment to transparency, compliance, and
                        sustainability guides every decision we make.
                    </p>
                </div>
            </div>
        </section>
    </div>;
}
export default Whitepapers;