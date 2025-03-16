'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxBackgroundProps {
  className?: string;
}

const ParallaxBackground = ({ className = '' }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Create a smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Transform values based on scroll
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.2,
    color: i % 5 === 0 ? 'primary' : i % 5 === 1 ? 'secondary' : i % 5 === 2 ? 'accent' : i % 5 === 3 ? 'primary-light' : 'accent-light',
  }));

  return (
    <div ref={ref} className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light to-surface dark:from-dark dark:to-slate-900" />

      {/* Soft radial gradient */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_40%_80%,rgba(249,115,22,0.1),transparent_50%)]" />

      {/* Parallax particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            y: particle.id % 3 === 0 ? y1 : particle.id % 3 === 1 ? y2 : y3,
          }}
        />
      ))}

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-surface dark:from-dark"
        style={{ opacity }}
      />
    </div>
  );
};

export default ParallaxBackground; 