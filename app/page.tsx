'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/ui/Header';
import Hero from '@/components/home/Hero';
import Sites from '@/components/home/Sites';
import Sistemas from '@/components/home/Sistemas';
import BudgetForm from '@/components/home/BudgetForm';
import CV from '@/components/home/CV';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const sections = [
    { component: Hero, name: t('header.menu.home') },
    { component: Sites, name: t('header.menu.about') },
    { component: Sistemas, name: t('header.menu.technologies') },
    { component: BudgetForm, name: t('header.menu.projects') },
    { component: CV, name: t('header.menu.cv') },
  ];
  const [currentSection, setCurrentSection] = useState(0); // Começa em "Início" (index 0)
  const [direction, setDirection] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleNavigate = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < sections.length) {
      setDirection(newIndex > currentSection ? 1 : -1);
      setCurrentSection(newIndex);
      setIsFirstLoad(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNavigate(currentSection + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handleNavigate(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Custom navigation events from components (like Hero buttons)
  useEffect(() => {
    const handleCustomNavigate = (e: CustomEvent) => {
      handleNavigate(e.detail);
    };

    window.addEventListener('navigate-section', handleCustomNavigate as EventListener);
    return () => window.removeEventListener('navigate-section', handleCustomNavigate as EventListener);
  }, [currentSection]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <>
      <Header currentSection={currentSection} onNavigate={handleNavigate} sections={sections} />

      <main className="relative h-screen overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSection}
            custom={direction}
            variants={slideVariants}
            initial={isFirstLoad ? false : "enter"}
            animate="center"
            exit="exit"
            transition={isFirstLoad ? { duration: 0 } : {
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="flex flex-col">
              {CurrentComponent && <CurrentComponent />}
              {currentSection === sections.length - 1 && <Footer />}
            </div>
          </motion.div>
        </AnimatePresence>

      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
