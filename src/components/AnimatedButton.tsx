'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

const AnimatedButton = ({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: AnimatedButtonProps) => {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: { scale: 0.95 },
  };

  // If href is provided, render a Link
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={className}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href} passHref>
        <motion.span
          className={className}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  // Otherwise, render a button
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="rest"
      whileHover={disabled ? {} : "hover"}
      whileTap={disabled ? {} : "tap"}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 