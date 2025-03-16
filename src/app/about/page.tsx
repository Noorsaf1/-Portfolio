'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedButton from '@/components/AnimatedButton';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function About() {
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
          Om mig
        </motion.h1>
        
        {/* About Section */}
        <AnimatedSection className="mb-16" direction="up" delay={0.1}>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              variants={fadeIn('up', 0.1)}
              className="text-2xl font-semibold text-dark dark:text-white mb-4"
            >
              Vem är jag?
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.2)}
              className="text-gray-600 dark:text-gray-300 mb-4"
            >
              En motiverad och skicklig webbutvecklare med specialisering inom 
              frontend- och backendteknologier. Erfarenhet av att använda React, 
              Node.js och Bootstrap för att leverera responsiva och skalbara 
              webbapplikationer. Anpassningsbar, snabb på att lära och brinner för 
              att skapa intuitiva användarupplevelser för e-handelsplattformar.
            </motion.p>
            <motion.p 
              variants={fadeIn('up', 0.3)}
              className="text-gray-600 dark:text-gray-300"
            >
              När jag inte kodar, fixa applikationer och sälja dem . Jag tror på 
              kontinuerligt lärande och håller mig uppdaterad med de senaste trenderna 
              och teknologierna inom webbutveckling.
            </motion.p>
          </motion.div>
        </AnimatedSection>
        
        {/* Skills Section */}
        <AnimatedSection className="mb-16" direction="up" delay={0.2}>
          <motion.h2 
            variants={fadeIn('up')}
            className="section-title"
          >
            Mina färdigheter
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Frontend</h3>
              <ul className="space-y-2">
                {[
                  'HTML5, CSS3, JavaScript (ES6+)',
                  'React, Next.js',
                  'TypeScript',
                  'Tailwind CSS, SASS',
                  'Responsive Design, Accessibility'
                ].map((skill, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <motion.span 
                      className="w-4 h-4 bg-primary rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    ></motion.span>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Backend */}
            <motion.div 
              variants={fadeIn('left', 0.3)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Backend & Verktyg</h3>
              <ul className="space-y-2">
                {[
                  'Node.js, Express',
                  'MongoDB, SQL',
                  'Git, GitHub',
                  'Vercel, Netlify',
                  'VS Code, Figma'
                ].map((skill, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <motion.span 
                      className="w-4 h-4 bg-primary rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    ></motion.span>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
        
        {/* Experience Section */}
        <AnimatedSection className="mb-16" direction="up" delay={0.3}>
          <motion.h2 
            variants={fadeIn('up')}
            className="section-title"
          >
            Erfarenhet
          </motion.h2>
          
          <div className="space-y-8">
            {/* Experience Item */}
           
             {/* Experience Item */}
             <motion.div 
              variants={fadeIn('up', 0.5)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white">Backendutvecklare </h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">Twistshake of Sweden AB</span>
                  <motion.span 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.2)' }}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    August 2024 — Närvarande
                  </motion.span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
              Arbetade med backendutveckling, API-integrationer och databasoptimering för e-handelsplattformen. Fokus på prestanda, säkerhet och externa integrationer.
              </p>
            </motion.div>
            
            {/* Experience Item */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white">Backendutvecklare (praktik)</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">Appears</span>
                  <motion.span 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.2)' }}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    Februari 2024 — Maj 2024
                  </motion.span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
              - Ansvarade för utveckling av serverlogik och databashantering.
              - Designade och optimerade databasfrågor för kunder och 
                applikationer.
                - Säkerställde effektiv och pålitlig hantering av data i företagets 
                webbaserade plattformar.
              </p>
            </motion.div>


            <motion.div 
              variants={fadeIn('up', 0.4)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white">Frontend-utvecklare (praktik)</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-gray-500 dark:text-gray-400 mr-2"> Operando AB</span>
                  <motion.span 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.2)' }}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                     September 2023 — December 2024
                  </motion.span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
              - Ledde frontendutveckling, inklusive UI/UX-design med React och 
                Bootstrap.
                - Utvecklade och optimerade serverlogik med Node.js och Express.
                - Samarbetade med tvärfunktionella team för att leverera en responsiv 
                e-handelsplattform
              </p>
            </motion.div>
            


          </div>
        </AnimatedSection>






        
        {/* Education Section */}
        <AnimatedSection className="mb-16" direction="up" delay={0.4}>
          <motion.h2 
            variants={fadeIn('up')}
            className="section-title"
          >
            Utbildning
          </motion.h2>
          
          <div className="space-y-8">
            {/* Education Item */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white">Examen i Webbutveckling E-handel</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">Medieinstitutet</span>
                  <motion.span 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 112, 243, 0.2)' }}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    Augusti 2022 — Juni 2024
                  </motion.span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
              Praktiska projekt med fokus på frontend- och backendutveckling
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
        
        {/* CTA */}
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="text-center"
        >
          <AnimatedButton href="/contact" className="btn btn-primary">
            Kontakta mig
          </AnimatedButton>
        </motion.div>
      </div>
    </motion.div>
  );
} 