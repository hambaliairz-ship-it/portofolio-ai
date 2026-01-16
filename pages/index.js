import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../komponen/organisme/navbar/Navbar';
import Hero from '../komponen/organisme/hero/Hero';
import About from '../bagian/About';
import Skills from '../bagian/Skills';
import Projects from '../bagian/Projects';
import Experience from '../bagian/Experience';
import Contact from '../bagian/Contact';
import ScrollToTop from '../komponen/atom/scroll-to-top/ScrollToTop';
import SplashScreen from '../komponen/organisme/splash-screen/SplashScreen';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Head>
            <title>Portfolio Hambali</title>
            <meta name="description" content="Portfolio profesional dengan integrasi WhatsApp" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <ScrollToTop />

          <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center">
              <p>© {new Date().getFullYear()} ❤️ {t.footer.copyright} Hambali</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}