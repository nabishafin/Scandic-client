import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

export function CommunityBanner() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-12 md:p-20 relative overflow-hidden border border-[var(--gold)]/30
                     hover:border-[var(--gold)] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-300"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center mb-8"
            >
              <Users size={56} className="text-[var(--gold)]" strokeWidth={1.5} />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-[var(--gold)] mb-6"
            >
              Join the Global Network
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto"
            >
              Join the global network shaping real-world blockchain finance
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <Button size="lg" className="min-w-[160px]">
                  Get Started
                </Button>
              </Link>
              <Link to="/community">
                <button className="min-w-[160px] px-8 py-4 rounded-xl border-2 border-[var(--gold)] text-[var(--gold)] font-semibold hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] transition-all duration-300">
                  Join Community
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CommunityBanner;
