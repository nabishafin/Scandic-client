import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Home, Database, Heart, Car, Ship, CreditCard, Shield } from 'lucide-react';
import SectionTitle from '../../ui/SectionTitle';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

export function EcosystemPreview() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'fly', icon: Plane, label: 'Scandic Fly', description: 'Private Aviation' },
    { id: 'estate', icon: Home, label: 'Scandic Estate', description: 'Real Estate' },
    { id: 'pay', icon: CreditCard, label: 'Scandic Pay', description: 'Payments' },
    { id: 'yachts', icon: Ship, label: 'Scandic Yachts', description: 'Yacht Services' },
    { id: 'data', icon: Database, label: 'Scandic Data', description: 'Cloud & AI' },
    { id: 'health', icon: Heart, label: 'Scandic Health', description: 'Telemedicine' },
    { id: 'cars', icon: Car, label: 'Scandic Cars', description: 'Luxury Mobility' },
    { id: 'sec', icon: Shield, label: 'Scandic Sec', description: 'Security' }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="One token, unlimited possibilities across aviation, real estate, data infrastructure, and luxury lifestyle services.">
          Scandic Ecosystem
        </SectionTitle>

        {/* Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="relative group h-full">
                  <div className="glass-panel rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border border-[var(--gold)]/20 
                    hover:border-[var(--gold)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/20 transition-colors">
                      <Icon size={32} className="text-[var(--gold)]" />
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {node.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--gold-light)] transition-colors">
                      {node.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/ecosystem">
            <Button size="lg">Explore Full Ecosystem</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default EcosystemPreview;
