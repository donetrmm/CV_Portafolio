import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-dark-200 border border-dark-100',
    glass: 'glass-effect',
    bordered: 'bg-dark-200 border-2 border-primary-600/30'
  };

  const hoverClasses = hover ? 'card-hover cursor-pointer' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}; 