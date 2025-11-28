
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LiveTicker from '../../ui/LiveTicker';
export function HeroSection() {
  return <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--gold)] mb-6 leading-tight">
        Built for Real-World Value
      </motion.h1>

      <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut'
      }} className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
        Scandic Coin (SNC) is a regulated utility token connecting aviation,
        real estate, data, and lifestyle under one blockchain ecosystem.
        Experience seamless transactions across multiple industries with
        transparent governance, fast settlements, and sustainable growth. Join
        the future of real-world blockchain finance where every token powers
        genuine utility across licensed, operational businesses.
      </motion.p>

      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
        <Link to="/how-to-buy">
          <Button size="lg" className="group">
            <span className="flex items-center space-x-2">
              <span>Buy SNC</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>

        <Link to="/whitepapers">
          <Button variant="outline" size="lg" className="group">
            <span className="flex items-center space-x-2">
              <FileText size={20} />
              <span>Read Whitepaper</span>
            </span>
          </Button>
        </Link>
      </motion.div>

      <LiveTicker />
    </div>
  </section>;
}
export default HeroSection;