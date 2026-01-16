import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            aria-label="Toggle Language"
        >
            <motion.div
                className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center text-[10px] font-bold text-blue-600"
                animate={{ x: language === 'en' ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {language.toUpperCase()}
            </motion.div>
        </button>
    );
};

export default LanguageToggle;
