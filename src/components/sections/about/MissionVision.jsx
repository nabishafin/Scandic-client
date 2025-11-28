import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import GlassPanel from '../../ui/GlassPanel';

export function MissionVision() {
    return (
        <section className="py-20 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <GlassPanel>
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center flex-shrink-0">
                                <Target size={24} className="text-[var(--bg-primary)]" />
                            </div>
                            <h2 className="text-3xl font-semibold text-[var(--gold)]">
                                Our Mission
                            </h2>
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="h-px bg-[var(--gold)] mb-6 origin-left"
                        />
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            To bridge traditional industries with blockchain technology,
                            creating transparent, efficient, and accessible financial
                            ecosystems. We empower individuals and businesses to participate
                            in real-world value creation through regulated digital assets. Our
                            mission is to demonstrate that blockchain utility extends far
                            beyond speculation, serving as the foundation for genuine economic
                            activity across aviation, real estate, data infrastructure, and
                            lifestyle services. By maintaining the highest standards of
                            compliance and transparency, we're building trust in the future of
                            decentralized finance.
                        </p>
                    </GlassPanel>

                    <GlassPanel delay={0.1}>
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center flex-shrink-0">
                                <Eye size={24} className="text-[var(--bg-primary)]" />
                            </div>
                            <h2 className="text-3xl font-semibold text-[var(--gold)]">
                                Our Vision
                            </h2>
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="h-px bg-[var(--gold)] mb-6 origin-left"
                        />
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            To become the world's leading regulated blockchain ecosystem,
                            where digital assets seamlessly power real-world transactions
                            across multiple industries. We envision a future where Scandic
                            Coin serves as the universal utility token for premium services,
                            from booking private jets to investing in tokenized real estate,
                            accessing cutting-edge AI infrastructure, and enjoying luxury
                            lifestyle experiences. Our vision extends beyond borders, creating
                            a global network where trust, transparency, and innovation
                            converge to redefine how value flows through the modern economy.
                        </p>
                    </GlassPanel>
                </div>
            </div>
        </section>
    );
}

export default MissionVision;
