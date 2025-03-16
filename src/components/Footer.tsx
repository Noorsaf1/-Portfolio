'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedIcon from '@/components/AnimatedIcon';
import { fadeIn, staggerContainer } from '@/utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/safir-noorani' },
    { name: 'GitHub', url: 'https://github.com/Noorsaf1' },
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
      className="bg-surface dark:bg-dark shadow-elegant py-12"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h3>
            <p className="text-muted dark:text-gray-300 leading-relaxed">
              En personlig portfolio med mina projekt och erfarenheter inom webbutveckling.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-dark dark:text-white mb-6">Länkar</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Hem' },
                { href: '/about', label: 'Om mig' },
                { href: '/projects', label: 'Projekt' },
                { href: '/contact', label: 'Kontakt' },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-muted dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary mr-2 inline-block"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-dark dark:text-white mb-6">Kontakt</h3>
            <ul className="space-y-3">
              <motion.li 
                className="text-muted dark:text-gray-300 flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <AnimatedIcon 
                  className="bg-primary-light dark:bg-primary/20 p-2 rounded-full mr-3 text-primary"
                  animationType="pulse"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </AnimatedIcon>
                <div>
                  <span className="font-medium text-dark dark:text-white">Email:</span>{' '}
                  <motion.a 
                    href="noorani.safir@gmail.com"
                    className="hover:text-primary dark:hover:text-primary transition-colors"
                    whileHover={{ color: '#6366f1' }}
                  >
                   noorani.safir@gmail.com
                  </motion.a>
                </div>
              </motion.li>
              
              {socialLinks.map((social, index) => (
                <motion.li 
                  key={index}
                  className="text-muted dark:text-gray-300 flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <AnimatedIcon 
                    className="bg-primary-light dark:bg-primary/20 p-2 rounded-full mr-3 text-primary"
                    animationType={index === 0 ? "rotate" : "bounce"}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </AnimatedIcon>
                  <div>
                    <span className="font-medium text-dark dark:text-white">{social.name}:</span>{' '}
                    <motion.a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      whileHover={{ color: '#6366f1' }}
                    >
                      {social.url.replace('https://', '')}
                    </motion.a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-muted dark:text-gray-400"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="inline-block"
          >
            <p>© {currentYear} Min Portfolio. Alla rättigheter förbehållna.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 