"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function CV() {
  const { t, language } = useLanguage()

  // Define CV paths based on language
  const cvPaths = {
    frontend: language === 'en' ? '/EN CV-FrontEnd-AnaDamore.pdf' : '/CV-FrontEnd-AnaDamore.pdf',
    uiux: language === 'en' ? '/EN-UIUX-AnaDamore.pdf' : '/CV-UIUX-AnaDamore.pdf'
  }

  const cvFileNames = {
    frontend: language === 'en' ? 'EN-CV-FrontEnd-AnaDamore.pdf' : 'CV-FrontEnd-AnaDamore.pdf',
    uiux: language === 'en' ? 'EN-CV-UIUX-AnaDamore.pdf' : 'CV-UIUX-AnaDamore.pdf'
  }
  return (
    <section className="relative h-screen overflow-hidden pt-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pb-6 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Frontend - Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("cv.frontend")}
              </span>
            </h2>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a
                href={cvPaths.frontend}
                download={cvFileNames.frontend}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 rounded-full"
              >
                <Download size={24} />
                {t("cv.download")}
              </a>

              <a
                href={cvPaths.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 text-lg rounded-full"
              >
                <Eye size={24} />
                {t("cv.view")}
              </a>
            </div>
          </motion.div>

          {/* UI/UX - Lado Direito */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {t("cv.uiux")}
              </span>
            </h2>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a
                href={cvPaths.uiux}
                download={cvFileNames.uiux}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 rounded-full"
              >
                <Download size={24} />
                {t("cv.download")}
              </a>

              <a
                href={cvPaths.uiux}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 text-lg rounded-full"
              >
                <Eye size={24} />
                {t("cv.view")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
