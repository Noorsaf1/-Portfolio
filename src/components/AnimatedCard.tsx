'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@/utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedCard = ({ children, className = '', onClick }: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 