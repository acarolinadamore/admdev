'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 right-8 z-50"
    >
      <div className="bg-white rounded-full shadow-lg border-2 border-slate-200 p-1 flex gap-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
            language === 'pt'
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="text-lg">🇧🇷</span>
          PT
        </button>

        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
            language === 'en'
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="text-lg">🇺🇸</span>
          EN
        </button>
      </div>

      {/* Tooltip */}
      {language === 'en' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-0 bg-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
        >
          English version coming soon! 🚀
        </motion.div>
      )}
    </motion.div>
  );
}
