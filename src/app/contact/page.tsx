'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedIcon from '@/components/AnimatedIcon';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="min-h-screen py-20"
    >
      <div className="container-custom">
        <motion.h1 
          variants={fadeIn('down')}
          className="text-4xl font-bold text-dark dark:text-white mb-8"
        >
          Kontakta mig
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div 
              variants={fadeIn('up', 0.3)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-dark dark:text-white mb-6">Kontaktuppgifter</h2>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <AnimatedIcon 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    animationType="pulse"
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-lg font-medium text-dark dark:text-white">Email</h3>
                    <motion.a 
                      href="mailto:noorani.safir@gmail.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      whileHover={{ color: '#0070f3' }}
                    >
                      Noorani.safir@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <AnimatedIcon 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    animationType="rotate"
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-lg font-medium text-dark dark:text-white">Sociala medier</h3>
                    <div className="space-y-2 mt-2">
                      {[
                        
                        { name: 'GitHub', url: 'https://github.com/Noorsaf1' },
                        
                      ].map((social, index) => (
                        <motion.a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                          whileHover={{ x: 5, color: '#0070f3' }}
                          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                          {social.name}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <AnimatedIcon 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    animationType="bounce"
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-lg font-medium text-dark dark:text-white">Plats</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Stockholm, Sverige
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 0.5)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">Arbetstider</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
               
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  Måndag - Fredag: 9:00 - 17:00
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                 
                </motion.li>
              </ul>
            </motion.div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection direction="left" delay={0.3}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-semibold text-dark dark:text-white mb-6">Skicka ett meddelande</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-md"
                >
                  Tack för ditt meddelande! Jag återkommer till dig så snart som möjligt.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-100 text-red-700 rounded-md"
                >
                  Det uppstod ett fel när meddelandet skulle skickas. Försök igen senare eller kontakta mig via email.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <motion.div 
                  variants={fadeIn('up', 0.5)}
                  className="mb-4"
                >
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Namn
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.5)" }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('up', 0.6)}
                  className="mb-4"
                >
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.5)" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('up', 0.7)}
                  className="mb-4"
                >
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Ämne
                  </label>
                  <motion.select
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.5)" }}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Välj ett ämne</option>
                    <option value="Projektförfrågan">Projektförfrågan</option>
                    <option value="Jobbmöjlighet">Jobbmöjlighet</option>
                    <option value="Samarbete">Samarbete</option>
                    <option value="Annat">Annat</option>
                  </motion.select>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('up', 0.8)}
                  className="mb-6"
                >
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Meddelande
                  </label>
                  <motion.textarea
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(0, 112, 243, 0.5)" }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  ></motion.textarea>
                </motion.div>
                
                <motion.button
                  variants={fadeIn('up', 0.9)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <motion.svg 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="-ml-1 mr-2 h-4 w-4 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </motion.svg>
                      Skickar...
                    </>
                  ) : (
                    'Skicka meddelande'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </motion.div>
  );
} 