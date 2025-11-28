import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../ui/SectionTitle';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
export function RoadmapPreview() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const phases = [{
    id: 1,
    label: 'Foundation',
    status: 'complete'
  }, {
    id: 2,
    label: 'Launch',
    status: 'complete'
  }, {
    id: 3,
    label: 'Expansion',
    status: 'active'
  }, {
    id: 4,
    label: 'Integration',
    status: 'upcoming'
  }, {
    id: 5,
    label: 'Global Scale',
    status: 'upcoming'
  }];
  return <section className="py-32 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="Transparent milestones driving toward global utility and adoption.">
        Our Journey
      </SectionTitle>

      <div className="mt-20 relative">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--gold)]/20 -translate-y-1/2" />
        <motion.div className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] -translate-y-1/2" initial={{
          width: 0
        }} whileInView={{
          width: '60%'
        }} viewport={{
          once: true
        }} transition={{
          duration: 2,
          delay: 0.3
        }} />

        {/* Phase dots */}
        <div className="relative flex justify-between items-center">
          {phases.map((phase, index) => <motion.div key={phase.id} className="relative z-10" initial={{
            scale: 0,
            opacity: 0
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.1
          }} onMouseEnter={() => setHoveredPhase(phase.id)} onMouseLeave={() => setHoveredPhase(null)}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${phase.status === 'complete' ? 'bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : phase.status === 'active' ? 'bg-[var(--gold)] animate-pulse' : 'bg-[var(--bg-secondary)] border-2 border-[var(--gold)]/30'} ${hoveredPhase === phase.id ? 'scale-125' : ''}`}>
              {phase.status === 'complete' && <CheckCircle2 size={28} className="text-[var(--bg-primary)]" />}
              {phase.status === 'active' && <span className="text-lg font-bold text-[var(--bg-primary)]">
                {phase.id}
              </span>}
              {phase.status === 'upcoming' && <span className="text-lg font-bold text-[var(--gold)]">
                {phase.id}
              </span>}
            </div>

            {/* Label */}
            <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <p className="text-sm font-semibold text-[var(--gold)] text-center">
                {phase.label}
              </p>
              <p className="text-xs text-[var(--text-tertiary)] text-center capitalize">
                {phase.status}
              </p>
            </div>

            {/* Hover tooltip */}
            {hoveredPhase === phase.id && <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 glass-panel rounded-lg p-4 w-48">
              <p className="text-xs text-[var(--text-secondary)]">
                Click to view detailed milestones and progress
              </p>
            </motion.div>}
          </motion.div>)}
        </div>
      </div>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="text-center mt-24">
        <Link to="/roadmap">
          <Button size="lg">View Full Roadmap</Button>
        </Link>
      </motion.div>
    </div>
  </section>;
}
export default RoadmapPreview;