'use client';

import { motion } from 'framer-motion';
import { textContainer, textLetter } from '@/utils/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  charClassName?: string;
}

const AnimatedText = ({ text, className = '', charClassName = '' }: AnimatedTextProps) => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          variants={textLetter}
          className={charClassName}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText; 