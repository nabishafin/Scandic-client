import React from 'react';
import { motion } from 'framer-motion';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    type = 'button'
}) {
    const baseStyles = 'font-medium rounded-xl transition-all duration-300 relative overflow-hidden';

    const variantStyles = {
        primary: 'bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] text-[var(--bg-primary)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]',
        secondary: 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--gold)]/30 hover:border-[var(--gold)]',
        outline: 'border border-[var(--gold)] text-[var(--text-primary)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]'
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Sheen effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

export default Button;
