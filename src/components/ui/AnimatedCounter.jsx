import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AnimatedCounter({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(progress * end);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
        <motion.span
            ref={ref}
            className={`font-mono text-[var(--gold)] ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </motion.span>
    );
}

export default AnimatedCounter;
