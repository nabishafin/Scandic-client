import React from "react";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import GlobeBackground from "../components/globe/GlobeBackground";

const Roadmap = () => {
    const phases = [
        {
            title: "Foundation",
            status: "complete",
            quarter: "Q1-Q2 2024",
            description:
                "Establishing the legal, technical, and brand foundation for Scandic Coin",
            milestones: [
                "Corporate structure established across UAE, USA, and Germany",
                "Legal framework and compliance protocols implemented",
                "Brand identity and visual system developed",
                "Core team assembled with expertise across finance, tech, and luxury",
                "Initial partnerships secured with service providers",
                "Whitepaper v1.0 published with full tokenomics",
                "Smart contract architecture designed and reviewed",
                "Community channels launched (Discord, Twitter, Telegram)",
            ],
        },
        {
            title: "Launch",
            status: "complete",
            quarter: "Q3 2024",
            description:
                "Public launch of Scandic Coin with exchange listings and initial utility",
            milestones: [
                "Smart contracts deployed on Solana mainnet",
                "Security audit completed by leading firm",
                "Token Generation Event (TGE) successfully executed",
                "Listed on major DEX (Raydium, Orca)",
                "First CEX listing secured",
                "Official website and documentation portal launched",
                "Initial liquidity pools established",
                "First 1,000 token holders milestone reached",
                "ScandicPay beta launched for internal testing",
            ],
        },
        {
            title: "Integration",
            status: "active",
            quarter: "Q4 2024 - Q1 2025",
            description:
                "Activating utility across Scandic ecosystem brands and services",
            milestones: [
                "ScandicPay public launch with fiat on/off ramps",
                "ScandicFly integration: book private jets with SNC",
                "ScandicYachts integration: charter payments accepted",
                "First tokenized real estate offering via ScandicEstate",
                "ScandicCars luxury rental platform launch",
                "Staking program launched with rewards",
                "Mobile wallet app released (iOS/Android)",
                "Partnership with major payment processor",
                "10,000 active users milestone",
            ],
        },
        {
            title: "Expansion",
            status: "upcoming",
            quarter: "Q2-Q3 2025",
            description:
                "Global growth through marketing, partnerships, and new verticals",
            milestones: [
                "European expansion: UK, France, Germany operations",
                "ScandicData AI compute marketplace launch",
                "ScandicHealth telemedicine platform integration",
                "Major institutional partnership announcement",
                "Additional Tier-1 CEX listings",
                "Cross-chain bridge to Ethereum and Polygon",
                "NFT loyalty program for premium members",
                "Global marketing campaign launch",
                "Strategic acquisition of complementary service",
                "100,000 token holders milestone",
            ],
        },
        {
            title: "Governance",
            status: "upcoming",
            quarter: "Q4 2025+",
            description:
                "Transitioning to community governance and DAO structure",
            milestones: [
                "DAO governance framework implemented",
                "Community voting on treasury allocation",
                "Decentralized proposal system launched",
                "Token holder benefits program expanded",
                "Revenue sharing mechanism activated",
                "International regulatory approvals secured",
                "Enterprise API for third-party integrations",
                "Scandic Coin Foundation established",
                "Long-term sustainability roadmap published",
                "Path to full decentralization outlined",
            ],
        },
    ];

    return (
        <div className="w-full pt-50">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-none">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <GlobeBackground />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--gold)] mb-6 text-shadow-gold">
                        Our Journey to Global Utility
                    </h1>
                    <div className="text-xl text-[var(--gold)] max-w-3xl mx-auto leading-relaxed">
                        <div className="text-6xl text-[var(--gold)]/20 mb-6">"</div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-relaxed">
                            Transparency is Progress; Progress Builds Trust
                        </h2>
                        <p className="text-lg text-white/70">
                            Every milestone achieved strengthens our commitment to building
                            real-world utility. We measure success not in hype, but in
                            tangible value delivered to our community and partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col">
                        {phases.map((phase, index) => (
                            <div key={index} className="relative pb-16 last:pb-0">
                                {/* Connector Line */}
                                <div
                                    className={`absolute left-[2rem] w-[2px] bg-[var(--gold)] hidden md:block
                                        ${index === 0 ? 'top-[2rem] bottom-0' :
                                            index === phases.length - 1 ? 'top-0 h-[2rem]' :
                                                'top-0 bottom-0'}
                                    `}
                                />

                                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                    {/* Status Indicator */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-16 h-16 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center ${phase.status === "complete"
                                                ? "bg-[var(--gold)]"
                                                : phase.status === "active"
                                                    ? "bg-[var(--gold)] animate-pulse"
                                                    : "bg-white/10"
                                                }`}
                                        >
                                            {phase.status === "complete" ? (
                                                <CheckCircle2 className="text-black" size={32} />
                                            ) : phase.status === "active" ? (
                                                <Sparkles className="text-black" size={32} />
                                            ) : (
                                                <Circle className="text-white/40" size={32} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                                <div>
                                                    <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-2">
                                                        Phase {index + 1}: {phase.title}
                                                    </h2>
                                                    <p className="text-sm text-white/60 font-mono">
                                                        {phase.quarter}
                                                    </p>
                                                </div>
                                                <div>
                                                    <span
                                                        className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${phase.status === "complete"
                                                            ? "bg-none text-[var(--gold)]"
                                                            : phase.status === "active"
                                                                ? "bg-[var(--gold)] text-black"
                                                                : "bg-white/10 text-white/60"
                                                            }`}
                                                    >
                                                        {phase.status === "complete"
                                                            ? "Completed"
                                                            : phase.status === "active"
                                                                ? "In Progress"
                                                                : "Upcoming"}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-lg text-white mb-8 leading-relaxed">
                                                {phase.description}
                                            </p>

                                            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                                                Key Milestones
                                            </h3>

                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.milestones.map((milestone, mIndex) => (
                                                    <div
                                                        key={mIndex}
                                                        className="flex items-start space-x-3 bg-black/30 rounded-lg p-3"
                                                    >
                                                        <div
                                                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${phase.status === "complete"
                                                                ? "bg-[var(--gold)]"
                                                                : phase.status === "active"
                                                                    ? "bg-[var(--gold)]/60"
                                                                    : "bg-white/20"
                                                                }`}
                                                        />
                                                        <p className="text-sm text-white/70">
                                                            {milestone}
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

            {/* Closing Quote */}
            <section className="py-32 px-6 bg-none">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-panel rounded-3xl p-12 md:p-16 text-center glow-gold">
                        <div className="text-6xl text-[var(--gold)]/20 mb-6">"</div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-relaxed">
                            Transparency is Progress; Progress Builds Trust
                        </h2>
                        <p className="text-lg text-white/70">
                            Every milestone achieved strengthens our commitment to building
                            real-world utility. We measure success not in hype, but in
                            tangible value delivered to our community and partners.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Roadmap;