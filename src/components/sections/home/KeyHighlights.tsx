import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Globe, Network } from 'lucide-react';

export function KeyHighlights() {
  const highlights = [
    {
      icon: Zap,
      title: 'Real Utility',
      description: 'Powers actual businesses across aviation, real estate, and lifestyle sectors'
    },
    {
      icon: Zap,
      title: 'Fast & Low Fees',
      description: 'Lightning-fast transactions with minimal costs on Solana blockchain'
    },
    {
      icon: Shield,
      title: 'Regulated & Transparent',
      description: 'Fully compliant with international standards and regular audits'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Built on real revenue streams and long-term value creation'
    },
    {
      icon: Network,
      title: 'Global Network',
      description: 'Connected ecosystem spanning multiple countries and industries'
    }
  ];

  return (
    <section className=" px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className="glass-panel rounded-xl p-6 group hover:border-[var(--gold)] transition-all duration-300 w-full "
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon size={24} className="text-[var(--bg-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)] mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyHighlights;