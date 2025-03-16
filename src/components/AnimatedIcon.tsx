'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pulse, rotate, bounce } from '@/utils/animations';

type AnimationType = 'pulse' | 'rotate' | 'bounce' | 'none';

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  onClick?: () => void;
}

const AnimatedIcon = ({
  children,
  className = '',
  animationType = 'pulse',
  onClick,
}: AnimatedIconProps) => {
  // Select animation variant based on type
  const getVariant = () => {
    switch (animationType) {
      case 'pulse':
        return pulse;
      case 'rotate':
        return rotate;
      case 'bounce':
        return bounce;
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariant()}
      initial="rest"
      whileHover={animationType !== 'none' ? 'hover' : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon; 