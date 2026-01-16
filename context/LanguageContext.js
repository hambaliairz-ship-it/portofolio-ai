import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../konfigurasi/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default to English

    // Persist language preference
    // Persist language preference
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
        // Force English if no saved language or to override for this session context if desired
        // For now, prioritizes saved language, but default state is 'en'
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'id' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
