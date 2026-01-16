import React from 'react';
import Text from '../../atom/text/Text';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

const PortfolioGrid = ({ projects }) => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -10 }}
        >
          <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image'; // Fallback image
                }}
              />
            ) : (
              <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-medium">No Image</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <Text variant="h3" className="text-gray-900 dark:text-white mb-2">
              {project.title}
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {project.description}
            </Text>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t.projects.viewDemo}
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {t.projects.sourceCode}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;