import React from 'react';
import Text from '../komponen/atom/text/Text';
import PortfolioGrid from '../komponen/organisme/portfolio-grid/PortfolioGrid';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projectsMeta = [
    {
      techStack: ['React', 'Tailwind CSS', 'Netlify', 'Neon'],
      demoUrl: 'https://hambali-razzan.netlify.app/login',
      sourceCodeUrl: 'https://share.google/2GfPWWVECaF4zjFnY',
      image: '/images/projects/GUDANG.png'
    },
    {
      techStack: ['Next.js', 'Netlify', 'Neon', 'Tailwind CSS'],
      demoUrl: 'https://restoran-nzan.netlify.app/',
      sourceCodeUrl: 'https://share.google/2GfPWWVECaF4zjFnY',
      image: '/images/projects/restoran.png'
    },
    {
      techStack: ['HTML', 'CSS', 'vercel'],
      demoUrl: 'https://happy-birthday-weld-pi.vercel.app',
      sourceCodeUrl: 'https://share.google/2GfPWWVECaF4zjFnY',
      image: '/images/projects/birthday.png'
    }
  ];

  // Merge translations with metadata
  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...projectsMeta[index]
  }));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="h2" className="text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </Text>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <PortfolioGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;