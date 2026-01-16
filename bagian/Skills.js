import React from 'react';
import Text from '../komponen/atom/text/Text';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMysql,
  SiGit, SiDocker, SiNetlify
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaAws, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const { t } = useLanguage();
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    { name: 'Neon', icon: FaDatabase, color: '#00E599' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Text variant="h2" className="text-gray-900 dark:text-white mb-4">
            {t.skills.title}
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
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2 + Math.random(), // Randomize duration slightly for natural feel
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-5xl mb-4"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </motion.div>
              <Text className="font-medium text-gray-700 dark:text-gray-200">
                {skill.name}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;