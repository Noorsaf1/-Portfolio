'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-handelsplattform',
      description: 'En modern e-handelsplattform byggd med Next.js, Tailwind CSS och Stripe för betalningar.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      imageUrl: '/images/project1.jpg',
      demoUrl: 'https://presentgatan.se/',
      githubUrl: 'https://github.com',
    },
    
   
    {
      id: 5,
      title: 'Portfolio Webbplats',
      description: 'En responsiv portfolio-webbplats byggd med Next.js och Tailwind CSS.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: '/images/project5.jpg',
      demoUrl: 'https://webwayna.se/',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Agrilli',
      description: 'En kundwebbplats för AGRILLI, byggd med React, TypeScript och Firebase, med en elegant design och smidig användarupplevelse.',
      technologies: ['React', 'Spotify API', 'CSS Modules', 'Context API'],
      imageUrl: '/images/project6.jpg',
      demoUrl: 'https://agrilli.netlify.app/',
      githubUrl: 'https://github.com',
    },
  ];

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
          Mina projekt
        </motion.h1>
        
        <motion.p 
          variants={fadeIn('up', 0.2)}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
        >
          Här är ett urval av projekt jag har arbetat med. Varje projekt representerar olika 
          färdigheter och tekniker jag har använt för att lösa specifika problem.
        </motion.p>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.1 * index)}
            >
              <AnimatedCard 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md h-full flex flex-col"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-gray-500 dark:text-gray-400 relative z-10">{project.title}</span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-dark dark:text-white mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: 'rgba(0, 112, 243, 0.2)' 
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={`/projects/${project.id}`} 
                        className="text-primary hover:underline"
                      >
                        Läs mer
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 