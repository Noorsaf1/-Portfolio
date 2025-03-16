'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedButton from '@/components/AnimatedButton';
import { staggerContainer, fadeIn, slideIn } from '@/utils/animations';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-soft dark:bg-gradient-to-b dark:from-dark dark:to-slate-900 relative overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container-custom"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              variants={fadeIn('right', 0.3)}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white mb-6">
                Hej, jag är <span className="gradient-text">
                  <AnimatedText 
                    text="Safir Noorani" 
                    className="inline-block" 
                    charClassName="inline-block"
                  />
                </span>
              </h1>
              <motion.p 
                variants={fadeIn('right', 0.5)}
                className="text-xl text-muted dark:text-gray-300 mb-8 leading-relaxed"
              >
                Webbutvecklare med passion för att skapa moderna och användarvänliga webbapplikationer med fokus på design och användarupplevelse.
              </motion.p>
              <motion.div 
                variants={fadeIn('right', 0.7)}
                className="flex flex-wrap gap-4"
              >
                <AnimatedButton href="/projects" className="btn btn-primary">
                  Se mina projekt
                </AnimatedButton>
                <AnimatedButton href="/contact" className="btn btn-outline">
                  Kontakta mig
                </AnimatedButton>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0.5)}
              className="md:w-1/2 flex justify-center"
            >
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 60px rgba(99, 102, 241, 0.5)",
                    "0 0 20px rgba(99, 102, 241, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Profile Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-accent-light to-secondary-light flex items-center justify-center text-dark">
                  {/* Profile image with error handling */}
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Safir Noorani"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    onError={(e) => {
                      // This will run if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback display - only shown if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light via-accent-light to-secondary-light opacity-0">
                    <span className="text-lg font-medium text-dark">Safir Noorani</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div 
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary-light/40 dark:bg-primary/10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-accent-light/30 dark:bg-accent/10"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Skills Section */}
      <AnimatedSection className="py-24 bg-surface dark:bg-dark">
        <div className="container-custom">
          <motion.h2 
            variants={fadeIn('up')}
            className="section-title text-center"
          >
            Mina <span className="gradient-text">färdigheter</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
          >
            {/* Skill Item */}
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill, index) => (
              <motion.div
                key={skill}
                variants={fadeIn('up', index * 0.1)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="card p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-dark dark:text-white">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection 
        className="py-24 bg-light dark:bg-slate-900"
        direction="up"
        delay={0.2}
      >
        <div className="container-custom">
          <motion.h2 
            variants={fadeIn('up')}
            className="section-title text-center"
          >
            Utvalda <span className="gradient-text">projekt</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {/* Project Data */}
            {[
              {
                id: 1,
                title: "E-handelsplattform",
                description: "En modern e-handelsplattform byggd med React, Node.js och MongoDB med stöd för betalningar och användarhantering.",
                image: "/images/project3.jpg",
                demoUrl: "https://presentgatan.se/",
                githubUrl: "#"
              },
              {
                id: 2,
                title: "Portfolio Webbplats",
                description: "En responsiv portfolio webbplats byggd med Next.js, Framer Motion och Tailwind CSS med animationer och dark mode.",
                image: "/images/project2.jpg",
                demoUrl: "https://webwayna.se/",
                githubUrl: "#"
              },
              {
                id: 3,
                title: "Kund ",
                description: "En kundwebbplats för DISENO De Pelo, byggd med React, TypeScript och Firebase, med en elegant design och smidig användarupplevelse, byggd med React, TypeScript och Firebase.",
                image: "/images/project1.jpg",
                demoUrl: "https://disenodepelo.netlify.app/",
                githubUrl: "#"
              }
            ].map((project, index) => (
              <AnimatedCard
                key={project.id}
                className="card overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Project Image with Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-accent-light dark:from-primary/20 dark:via-dark dark:to-accent/20 flex items-center justify-center">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span className="absolute text-dark dark:text-white font-medium bg-white/70 dark:bg-dark/70 px-3 py-1 rounded-md">
                      {project.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">{project.title}</h3>
                  <p className="text-muted dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Link 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                    <Link 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-dark/70 dark:text-white/70 hover:text-dark dark:hover:text-white font-medium transition-colors flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.5)}
            className="mt-12 text-center"
          >
            <AnimatedButton href="/projects" className="btn btn-primary">
              Se alla projekt
            </AnimatedButton>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact CTA */}
      <AnimatedSection 
        className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden"
        direction="up"
        delay={0.3}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)"
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <div className="container-custom text-center relative z-10">
          <motion.h2 
            variants={fadeIn('up')}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Intresserad av att samarbeta?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.2)}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Jag är alltid öppen för nya spännande projekt och möjligheter. Kontakta mig för att diskutera hur vi kan arbeta tillsammans.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.4)}>
            <AnimatedButton href="/contact" className="btn bg-white text-primary hover:bg-white/90">
              Kontakta mig
            </AnimatedButton>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
} 