import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../atom/button/Button';
import Text from '../../atom/text/Text';
import { motion } from 'framer-motion';
import Typewriter from '../../atom/typewriter/Typewriter';

import { useLanguage } from '../../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <Text variant="h1" className="text-gray-900 dark:text-white mb-4">
                {t.hero.greeting} <span className="text-blue-600"><Typewriter text="Hambali Syamsuddin" startDelay={500} /></span>
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text variant="h3" className="text-gray-700 dark:text-gray-300 mb-6">
                {t.hero.role}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Text className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                {t.hero.description}
              </Text>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="primary" size="lg">
                <Link href="#contact">{t.hero.contactBtn}</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#projects">{t.hero.projectsBtn}</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-blue-400 to-indigo-600 rounded-full overflow-hidden shadow-xl flex items-center justify-center relative"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              >
                <Image
                  src="/Hambali-transformed.png"
                  alt="Hambali Syamsuddin"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Text variant="small" className="text-gray-600 dark:text-gray-300">
                  {t.hero.expBadge}
                </Text>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;