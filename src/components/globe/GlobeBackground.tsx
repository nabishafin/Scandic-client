import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedGlobe from './AnimatedGlobe';
export function GlobeBackground() {
  const {
    scrollY
  } = useScroll();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // Parallax effect based on scroll
  const globeY = useTransform(scrollY, [0, 1000], [0, -100]);
  const globeScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <motion.div className="fixed bottom-0 left-0 right-0 h-[60vh] pointer-events-none z-0" style={{
    y: globeY,
    scale: globeScale
  }}>
    <motion.div className="w-full h-full" animate={{
      x: mousePosition.x,
      y: mousePosition.y
    }} transition={{
      type: 'spring',
      stiffness: 50,
      damping: 20
    }}>
      <AnimatedGlobe />
    </motion.div>

    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[var(--bg-primary)]/30 to-[var(--bg-primary)]/80 pointer-events-none" />
  </motion.div>;
}
export default GlobeBackground;