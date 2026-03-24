'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-full border border-white/20 p-1 flex gap-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 flex items-center gap-1.5 ${
            language === 'pt'
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          title="Português"
        >
          <span className="text-base">🇧🇷</span>
        </button>

        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 flex items-center gap-1.5 ${
            language === 'en'
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          title="English"
        >
          <span className="text-base">🇺🇸</span>
        </button>
      </div>
    </motion.div>
  );
}
