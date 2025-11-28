import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../ui/SectionTitle';
import GlassPanel from '../../ui/GlassPanel';

export function CorporateStructure() {
    const subsidiaries = [
        {
            name: 'Scandic Pay',
            jurisdiction: 'Estonia',
            focus: 'Payment Processing & Fiat Bridge'
        },
        {
            name: 'Scandic Estate',
            jurisdiction: 'Switzerland',
            focus: 'Tokenized Real Estate'
        },
        {
            name: 'Scandic Fly',
            jurisdiction: 'UAE',
            focus: 'Private Aviation Services'
        },
        {
            name: 'Scandic Yachts',
            jurisdiction: 'Monaco',
            focus: 'Yacht Brokerage & Charter'
        },
        {
            name: 'Scandic Cars',
            jurisdiction: 'Germany',
            focus: 'Luxury Vehicle Services'
        },
        {
            name: 'Scandic Data',
            jurisdiction: 'Singapore',
            focus: 'Cloud & AI Infrastructure'
        },
        {
            name: 'Scandic Health',
            jurisdiction: 'Malta',
            focus: 'Telemedicine Platform'
        },
        {
            name: 'Scandic Sec',
            jurisdiction: 'UK',
            focus: 'Security & Compliance Services'
        }
    ];

    return (
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]/30">
            <div className="max-w-6xl mx-auto">
                <SectionTitle subtitle="A globally diversified structure built for compliance and growth">
                    Corporate Structure
                </SectionTitle>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <GlassPanel>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                            Scandic Group operates through a network of specialized
                            subsidiaries, each registered in jurisdictions chosen for their
                            regulatory clarity, business-friendly environments, and alignment
                            with our operational needs. This structure ensures compliance with
                            local and international regulations while enabling seamless
                            cross-border operations. Each subsidiary maintains independent
                            legal status while contributing to the unified Scandic Coin
                            ecosystem, creating a robust framework for sustainable growth and
                            regulatory adherence.
                        </p>

                        {/* Network diagram */}
                        <div className="relative mt-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {subsidiaries.map((sub, index) => (
                                    <motion.div
                                        key={sub.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="relative"
                                    >
                                        <div className="glass-panel rounded-xl p-4 hover:border-[var(--gold)] transition-all duration-300 group">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                <span className="text-sm font-bold text-[var(--bg-primary)]">
                                                    {sub.name.split(' ')[1][0]}
                                                </span>
                                            </div>
                                            <h3 className="text-sm font-semibold text-[var(--gold)] mb-1">
                                                {sub.name}
                                            </h3>
                                            <p className="text-xs text-[var(--text-tertiary)] mb-2">
                                                {sub.jurisdiction}
                                            </p>
                                            <p className="text-xs text-[var(--text-secondary)]">
                                                {sub.focus}
                                            </p>
                                        </div>

                                        {/* Connection lines (visual only) */}
                                        {index < subsidiaries.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 left-full w-6 h-px bg-[var(--gold)]/20 -translate-y-1/2" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </section>
    );
}

export default CorporateStructure;
