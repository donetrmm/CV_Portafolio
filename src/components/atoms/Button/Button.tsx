import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    primary: 'btn-primary-pro',
    secondary: 'btn-secondary-pro',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 hover:shadow-lg hover:-translate-y-0.5',
    ghost: 'bg-transparent border border-slate-300 text-slate-300 hover:bg-slate-300/10 hover:border-slate-200 hover:-translate-y-0.5',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const hoverVariants = {
    primary: {
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    secondary: {
      y: -1,
      backgroundColor: "rgba(248, 250, 252, 0.1)",
      borderColor: "rgba(148, 163, 184, 0.3)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    accent: {
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    ghost: {
      y: -1,
      backgroundColor: "rgba(248, 250, 252, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const tapVariants = {
    scale: 0.98,
    transition: { duration: 0.1 }
  };

  const buttonContent = (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={!disabled ? hoverVariants[variant] : undefined}
      whileTap={!disabled ? tapVariants : undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
      
      <span className="relative z-10 font-medium flex items-center gap-2">
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className="inline-block"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return buttonContent;
}; 