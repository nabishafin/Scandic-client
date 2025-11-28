import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../ui/SectionTitle';
import GlassPanel from '../../ui/GlassPanel';
export function PartnersCarousel() {
  const partners = ['Deloitte', 'PwC', 'KPMG', 'Ernst & Young', 'Chainlink', 'Solana Foundation', 'Circle', 'Fireblocks', 'CertiK', 'Hacken', 'Quantstamp', 'OpenZeppelin'];
  return <section className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Trusted by leading auditors, technology partners, and industry experts">
          Partners & Auditors
        </SectionTitle>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mt-16">
          <GlassPanel>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Scandic Group maintains strategic partnerships with world-class
              auditing firms, blockchain security specialists, and technology
              providers. These relationships ensure the highest standards of
              compliance, security, and operational excellence across our entire
              ecosystem. Regular third-party audits and continuous monitoring
              guarantee transparency and trust for all stakeholders.
            </p>

            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => <motion.div key={partner} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }} className="flex items-center justify-center p-6 rounded-xl border border-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-300 group">
                  <span className="text-lg font-semibold text-[var(--text-tertiary)] group-hover:text-[var(--gold)] transition-colors">
                    {partner}
                  </span>
                </motion.div>)}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>;
}
export default PartnersCarousel;