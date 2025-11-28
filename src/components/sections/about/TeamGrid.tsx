import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import SectionTitle from '../../ui/SectionTitle';
export function TeamGrid() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const team = [{
    name: 'Alexander Nordström',
    role: 'Chief Executive Officer',
    bio: '15+ years in fintech and blockchain. Former VP at major European bank. Led multiple successful token launches.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }, {
    name: 'Sofia Andersson',
    role: 'Chief Technology Officer',
    bio: 'Blockchain architect with deep expertise in Solana. Previously led engineering at top DeFi protocols.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  }, {
    name: 'Marcus Johansson',
    role: 'Chief Financial Officer',
    bio: 'Former investment banker with 20 years experience. Specialist in tokenomics and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  }, {
    name: 'Emma Larsson',
    role: 'Chief Operating Officer',
    bio: 'Operations expert with background in aviation and luxury services. Scaled multiple international businesses.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }, {
    name: 'Erik Bergström',
    role: 'Chief Legal Officer',
    bio: 'International regulatory specialist. Advised governments on blockchain policy. Expert in securities law.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  }, {
    name: 'Linnea Karlsson',
    role: 'Chief Marketing Officer',
    bio: 'Brand strategist with proven track record in Web3. Built communities for leading blockchain projects.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
  }];
  return <section className="py-32 px-6 lg:px-12" id="team">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Experienced leaders driving innovation and compliance">
          Leadership Team
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {team.map((member, index) => <motion.div key={member.name} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} onMouseEnter={() => setHoveredMember(index)} onMouseLeave={() => setHoveredMember(null)} className="relative group">
              <div className="glass-panel rounded-2xl overflow-hidden">
                {/* Portrait */}
                <div className="relative aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />

                  {/* Gold border animation */}
                  <motion.div className="absolute inset-0 border-2 border-[var(--gold)]" initial={{
                opacity: 0
              }} animate={{
                opacity: hoveredMember === index ? 1 : 0
              }} transition={{
                duration: 0.3
              }} />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--gold)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4">
                    {member.role}
                  </p>

                  <AnimatePresence>
                    {hoveredMember === index && <motion.div initial={{
                  opacity: 0,
                  height: 0
                }} animate={{
                  opacity: 1,
                  height: 'auto'
                }} exit={{
                  opacity: 0,
                  height: 0
                }} transition={{
                  duration: 0.3
                }}>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        <div className="flex space-x-3">
                          <a href="#" className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] transition-all duration-300" aria-label="LinkedIn">
                            <Linkedin size={16} />
                          </a>
                          <a href="#" className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] transition-all duration-300" aria-label="Twitter">
                            <Twitter size={16} />
                          </a>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export default TeamGrid;