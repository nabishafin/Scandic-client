import { motion } from 'framer-motion';
import SectionTitle from '../../ui/SectionTitle';
import AnimatedCounter from '../../ui/AnimatedCounter';
import GlassPanel from '../../ui/GlassPanel';

export function TokenOverview() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Transparent tokenomics designed for long-term stability and growth">
          Token Overview
        </SectionTitle>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <GlassPanel delay={0} className="transition-all duration-300 hover:border-[var(--gold)]">
            <div className="text-center">
              <p className="text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-wider">
                Total Supply
              </p>
              <div className="text-4xl font-bold text-[var(--gold)] mb-2">
                <AnimatedCounter end={500000000} suffix="M" decimals={0} />
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Fixed supply, no inflation
              </p>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.1} className="transition-all duration-300 hover:border-[var(--gold)]">
            <div className="text-center">
              <p className="text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-wider">
                Token Holders
              </p>
              <div className="text-4xl font-bold text-[var(--gold)] mb-2">
                <AnimatedCounter end={45000} suffix="+" decimals={0} />
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Growing community
              </p>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.2} className="transition-all duration-300 hover:border-[var(--gold)]">
            <div className="text-center">
              <p className="text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-wider">
                Circulating Supply
              </p>
              <div className="text-4xl font-bold text-[var(--gold)] mb-2">
                <AnimatedCounter end={250000000} suffix="M" decimals={0} />
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                50% in circulation
              </p>
            </div>
          </GlassPanel>
        </div>

        {/* Allocation & Stability Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <GlassPanel className="transition-all duration-300 hover:border-[var(--gold)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Allocation Strategy */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--gold)] mb-6">
                  Allocation Strategy
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Ecosystem Development', value: 40 },
                    { label: 'Public Sale', value: 25 },
                    { label: 'Team & Advisors', value: 15 },
                    { label: 'Reserve Fund', value: 10 },
                    { label: 'Marketing & Partnerships', value: 10 }
                  ].map((item, index) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2 p-2 rounded transition-all duration-300 hover:border-[var(--gold)]">
                        <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
                        <span className="text-sm font-mono text-[var(--gold)]">{item.value}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long-Term Stability */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--gold)] mb-6">
                  Long-Term Stability
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Scandic Coin's allocation strategy prioritizes sustainable
                  ecosystem growth over short-term speculation. With 40%
                  dedicated to ecosystem development, we ensure continuous
                  innovation and expansion across all Scandic Group verticals.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Team tokens are subject to a 4-year vesting schedule with a
                  1-year cliff, demonstrating our commitment to long-term value
                  creation. The reserve fund provides liquidity stability and
                  supports strategic partnerships that enhance token utility.
                </p>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

export default TokenOverview;
