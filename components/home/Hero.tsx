"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Facebook, Instagram, Linkedin, Github, Mail, MessageCircle } from "lucide-react"

export default function Hero() {
  const words = [
    "sites",
    "sistemas",
    "wordpress",
    "loja virtual",
    "protótipos",
    "frontend",
  ]
  const phrases = [
    "Crio soluções que impactam e geram resultados",
    "Leve sua equipe de desenvolvimento para o próximo nível",
  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Vídeo de fundo */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay azul para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-8 relative">
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl relative z-10"
          >
            {/* Texto acima com animação de fade */}
            <div className="text-lg md:text-xl lg:text-2xl font-normal mb-4 h-8 md:h-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-white/80"
                >
                  {phrases[currentPhraseIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Texto animado "Sou expert em:" */}
            <div className="mb-8" style={{ lineHeight: "1.2" }}>
              <div className="text-xl md:text-3xl lg:text-4xl font-normal text-white mb-4">
                Oi, sou Ana Damore
              </div>
              <div className="text-3xl md:text-5xl lg:text-7xl font-normal text-white">
                Sou expert em:
              </div>
              <div className="relative h-16 md:h-20 lg:h-28 overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWordIndex}
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 70, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-black whitespace-nowrap"
                  >
                    {words[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Ícones de redes sociais */}
            <div className="flex gap-4 mb-6">
              <a
                href="http://facebook.com/acarolinadamore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="http://instagram.com/acarolinadamore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://wa.me/5511982653711"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/ana-damore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://github.com/acarolinadamore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="mailto:acarolinadamore@gmail.com"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>

            {/* Botão único */}
            <div>
              <button
                onClick={() => {
                  window.open('https://wa.me/5511982653711', '_blank')
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 text-lg md:text-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 rounded-full"
              >
                Fale Comigo
              </button>
            </div>
          </motion.div>

          {/* Imagem flutuante - Ana */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [30, 0, 30],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => window.open('https://lnkd.in/dew8SBPe', '_blank')}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:relative lg:top-auto lg:right-auto lg:-translate-x-32 z-20 cursor-pointer"
          >
            {/* Círculo brilhante ao redor */}
            <div
              className="rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[296px] xl:w-[356px] lg:h-[296px] xl:h-[356px] flex items-center justify-center"
              style={{
                background: 'linear-gradient(to right, rgba(34, 211, 238, 1), rgba(59, 130, 246, 1), rgba(168, 85, 247, 1))',
                boxShadow: `
                  0 0 10px rgba(59, 130, 246, 0.8),
                  0 0 20px rgba(59, 130, 246, 0.6),
                  0 0 30px rgba(59, 130, 246, 0.4),
                  0 0 40px rgba(59, 130, 246, 0.2),
                  inset 0 0 15px rgba(59, 130, 246, 0.3)
                `,
                filter: 'brightness(1.3)',
              }}
            >
              {/* Imagem */}
              <img
                src="/ana.JPG"
                alt="Ana Carolina Damore"
                className="w-[132px] h-[132px] sm:w-[172px] sm:h-[172px] lg:w-[280px] xl:w-[340px] lg:h-[280px] xl:h-[340px] rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
