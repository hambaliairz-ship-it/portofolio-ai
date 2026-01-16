import React from 'react';
import Text from '../komponen/atom/text/Text';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = t.experience.items;
  const education = t.experience.eduItems;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="h2" className="text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </Text>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <Text variant="h3" className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              {t.experience.work}
            </Text>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <Text variant="h4" className="font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </Text>
                  <Text variant="large" className="text-blue-600 dark:text-blue-400 mb-1">
                    {exp.company}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {exp.period}
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text variant="h3" className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              {t.experience.education}
            </Text>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-green-600"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-600"></div>
                  <Text variant="h4" className="font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </Text>
                  <Text variant="large" className="text-green-600 dark:text-green-400 mb-1">
                    {edu.institution}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {edu.period}
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;