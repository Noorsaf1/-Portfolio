'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  id,
}: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 