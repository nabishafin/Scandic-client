import React from 'react';
import { motion } from 'framer-motion';
interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function GlassPanel({
  children,
  className = '',
  delay = 0
}: GlassPanelProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.6,
    delay
  }} className={`glass-panel rounded-2xl p-8 ${className}`}>
      {children}
    </motion.div>;
}
export default GlassPanel;