import React from 'react';
import GlobeBackground from '../components/globe/GlobeBackground';
import { motion } from 'framer-motion';
export function HowToBuy() {
  return <div className="relative">
      <GlobeBackground />
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--gold)] mb-6">
              How to Buy
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              Buy Scandic Coin securely - coming soon
            </motion.p>
          </div>
        </section>
      </div>
    </div>;
}
export default HowToBuy;