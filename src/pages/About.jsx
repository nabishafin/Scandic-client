import React from 'react';
import { Shield, Target, Users, Award, Linkedin } from 'lucide-react';
import GlobeBackground from '../components/globe/GlobeBackground';


const About = () => {
    const teamMembers = [
        {
            name: 'Erik Johansson',
            role: 'Chief Executive Officer',
            bio: 'Former investment banker with 15+ years in fintech and blockchain. Led multiple successful token launches and regulatory compliance initiatives across Europe.',
            linkedin: '#'
        },
        {
            name: 'Sofia Andersson',
            role: 'Chief Technology Officer',
            bio: 'Blockchain architect and Solana core contributor. Previously built enterprise DeFi solutions for Fortune 500 companies.',
            linkedin: '#'
        },
        {
            name: 'Marcus Berg',
            role: 'Chief Financial Officer',
            bio: 'Former CFO at major European real estate firm. Expert in tokenized assets, treasury management, and institutional finance.',
            linkedin: '#'
        },
        {
            name: 'Anna Lindström',
            role: 'Chief Compliance Officer',
            bio: 'Former regulatory advisor to EU financial institutions. Specializes in AML/KYC frameworks and crypto regulatory compliance.',
            linkedin: '#'
        },
        {
            name: 'Johan Karlsson',
            role: 'Head of Business Development',
            bio: 'Built partnerships across aviation, luxury, and hospitality sectors. 20+ years experience in premium service industries.',
            linkedin: '#'
        },
        {
            name: 'Lisa Svensson',
            role: 'Head of Marketing',
            bio: 'Brand strategist with expertise in luxury and fintech marketing. Led campaigns for major European financial institutions.',
            linkedin: '#'
        },
        {
            name: 'David Nilsson',
            role: 'Head of Product',
            bio: 'Product leader with background in enterprise SaaS and blockchain applications. Former PM at leading crypto exchange.',
            linkedin: '#'
        },
        {
            name: 'Emma Gustafsson',
            role: 'Head of Legal',
            bio: 'Corporate attorney specializing in blockchain law, securities regulation, and cross-border transactions.',
            linkedin: '#'
        }
    ];

    const partners = [
        { name: 'Solana Foundation', logo: 'Partner 1' },
        { name: 'Major Exchange', logo: 'Partner 2' },
        { name: 'Audit Firm', logo: 'Partner 3' },
        { name: 'Legal Partner', logo: 'Partner 4' },
        { name: 'Banking Partner', logo: 'Partner 5' },
        { name: 'Tech Partner', logo: 'Partner 6' }
    ];

    return (
        <div className="w-full">

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <GlobeBackground />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--gold)] mb-6 text-shadow-gold">
                        About Scandic Group
                    </h1>
                    <p className="text-xl text-[var(--gold)] max-w-3xl mx-auto leading-relaxed">
                        Building the bridge between traditional luxury services and blockchain
                        technology through regulated, transparent, and sustainable innovation.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Mission */}
                        <div className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                            <div className="w-16 h-16 rounded-full bg-gold/20 flex  mb-6">
                                <Target className="text-[var(--gold)]" size={32} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-6">Our Mission</h2>
                            <div className="h-1 w-16 bg-gold mb-6" />
                            <p className="text-lg text-white mb-4">
                                To create genuine utility for blockchain technology by connecting premium
                                real-world services through a single, regulated token ecosystem.
                            </p>
                            <p className="text-lg text-white">
                                We believe blockchain should power real transactions, not just speculation.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                            <div className="w-16 h-16 rounded-full bg-gold/20 flex  mb-6">
                                <Award className="text-[var(--gold)]" size={32} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-6">Our Vision</h2>
                            <div className="h-1 w-16 bg-[var(--gold)] mb-6" />
                            <p className="text-lg text-white mb-4">
                                To become the leading utility token for premium services globally.
                            </p>
                            <p className="text-lg text-white    ">
                                We envision a future where high-end services are seamless and blockchain-powered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Structure */}
            <section className="py-20 px-6 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--gold)] mb-4">
                            Corporate Structure
                        </h2>
                        <p className="text-lg text-white">
                            A globally diversified structure built for compliance and growth
                        </p>
                    </div>

                    <div className="glass-panel rounded-2xl p-12 space-y-10 glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">

                        <div className="border-l-4 border-[var(--gold)] pl-6">
                            <h3 className="text-2xl text-[var(--gold)] mb-3">Scandic Assets FZCO</h3>
                            <p className="text-[var(--gold)] mb-2">
                                <span className="text-white font-medium">Holding Company</span> • Dubai, UAE
                            </p>
                            <p className="text-white">
                                The parent holding company overseeing all Scandic Group operations. Registered in Dubai's free zone with full
                                regulatory compliance, Scandic Assets FZCO provides strategic oversight, treasury management, and corporate
                                governance across the entire ecosystem. This structure ensures clear accountability and institutional-grade financial
                                controls.
                            </p>
                        </div>

                        <div className="border-l-4 border-[var(--gold)] pl-6">
                            <h3 className="text-2xl text-[var(--gold)] mb-3">Scandic Trust Group LLC</h3>
                            <p className="text-[var(--gold)] mb-2">
                                <span className="text-white font-medium">Token Issuer</span> • Delaware, USA
                            </p>
                            <p className="text-white">
                                The legal entity responsible for issuing and managing Scandic Coin (SNC). Operating under U.S. securities law with full
                                compliance frameworks, Scandic Trust Group LLC handles token distribution, regulatory reporting, and investor
                                relations. This separation ensures legal clarity and protects token holders through established U.S. legal structures.
                            </p>
                        </div>

                        <div className="border-l-4 border-[var(--gold)] pl-6">
                            <h3 className="text-2xl text-[var(--gold)] mb-3">LEGIER Beteiligungs mbH</h3>
                            <p className="text-[var(--gold)] mb-2">
                                <span className="text-white font-medium">Service Partner</span> • Germany
                            </p>
                            <p className="text-white">
                                Our European service partner providing technical infrastructure, compliance support, and operational services. LEGIER
                                brings deep expertise in European financial regulation, data protection (GDPR), and enterprise blockchain solutions.
                                This partnership ensures we meet the highest European standards for security, privacy, and regulatory compliance.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Governance */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--gold)] mb-4">
                            Governance & Transparency
                        </h2>
                        <p className="text-lg text-white">Committed to the highest standards of accountability</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 ">

                        <div className="glass-panel p-8 rounded-xl text-center glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex justify-center items-center mx-auto mb-5">
                                <Shield className="text-[var(--gold)]" size={32} />
                            </div>
                            <h3 className="text-xl text-[var(--gold)] mb-4">Regular Audits</h3>
                            <p className="text-white">Quarterly smart contract audits by leading
                                security firms. Annual financial audits by Big
                                Four accounting firms. All reports published
                                publicly.</p>
                        </div>

                        <div className="glass-panel p-8 rounded-xl text-center glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex justify-center items-center mx-auto mb-5">
                                <Users className="text-[var(--gold)]" size={32} />
                            </div>
                            <h3 className="text-xl text-[var(--gold)] mb-4">AML/KYC Compliance</h3>
                            <p className="text-white">Full Know Your Customer and Anti-Money
                                Laundering procedures for all participants.
                                Partnership with leading compliance
                                providers.</p>
                        </div>

                        <div className="glass-panel p-8 rounded-xl text-center glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full">
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex justify-center items-center mx-auto mb-5">
                                <Award className="text-[var(--gold)]" size={32} />
                            </div>
                            <h3 className="text-xl text-[var(--gold)] mb-4">Sustainability</h3>
                            <p className="text-white">Annual ESG reports covering environmental
                                impact, social responsibility, and
                                governance practices. Carbon-neutral
                                operations commitment.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="px-6  ">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--gold)] mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-white">
                            Experienced leaders from finance, technology, and luxury industries
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full"
                            >
                                <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-[var(--gold)]" size={40} />
                                </div>

                                <h3 className="text-xl text-white text-center mb-1">{member.name}</h3>
                                <p className="text-sm text-white text-center mb-4">{member.role}</p>

                                <p className="text-sm text-white mb-4 text-center">{member.bio}</p>

                                <a
                                    href={member.linkedin}
                                    className="flex justify-center items-center space-x-2 text-[var(--gold)] text-sm hover:text-[var(--gold)]-light"
                                >
                                    <Linkedin size={16} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Partners */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--gold)] mb-4">
                            Strategic Partners
                        </h2>
                        <p className="text-lg text-[var(--gold)]">Trusted collaborators</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-8">
                        {partners.map((partner, idx) => (
                            <div
                                key={idx}
                                className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full"
                            >
                                <div className=" text-white group-hover:text-[var(--gold)] font-semibold">
                                    {partner.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20">
                        <p className="text-lg text-white max-w-4xl mx-auto text-center">
                            “Our partnerships span blockchain infrastructure, financial services, legal compliance, and luxury industries. Together, we're building the most comprehensive regulated token ecosystem for real-world utility.”
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default About;