"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

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
    "Transforme sua ideia em realidade",
    "Leve o seu negócio ao próximo nível",
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
          {/* Fundo grande - fora do container de imagens */}
          <img
            src="/fundo.png"
            alt="Background"
            className="absolute top-1/2 right-[20px] -translate-y-1/2 w-[500px] xl:w-[600px] opacity-20 pointer-events-none z-0"
          />

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

            {/* Texto animado "Somos experts em:" */}
            <div className="mb-8" style={{ lineHeight: "1.2" }}>
              <div className="text-3xl md:text-5xl lg:text-7xl font-normal text-white">
                Somos
              </div>
              <div className="text-3xl md:text-5xl lg:text-7xl font-normal text-white">
                experts em:
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

            {/* Botão único */}
            <div>
              <button
                onClick={() => {
                  // Navega para Orçamento (index 3)
                  const event = new CustomEvent("navigate-section", {
                    detail: 3,
                  })
                  window.dispatchEvent(event)
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 text-lg md:text-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 rounded-full"
              >
                Faça um Orçamento
              </button>
            </div>
          </motion.div>

          {/* Imagem flutuante - Ana */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: -130,
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
            className="hidden lg:block relative z-20 cursor-pointer"
          >
            <img
              src="/imagem-inicio.png"
              alt="Ana Carolina Damore"
              className="w-[280px] xl:w-[340px] rounded-full aspect-square object-cover drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
