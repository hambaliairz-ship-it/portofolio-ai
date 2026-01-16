import React from 'react';
import Text from '../komponen/atom/text/Text';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="h2" className="text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </Text>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text className="text-gray-600 dark:text-gray-300 mb-6">
            {t.about.p1}
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mb-6">
            {t.about.p2}
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            {t.about.p3}
          </Text>
        </motion.div>
      </div>
    </section>
  );
};

export default About;