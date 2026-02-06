"use client"

import { motion } from "framer-motion"

export default function Sites() {
  return (
    <section className="relative h-screen overflow-hidden pt-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="grid md:grid-cols-2 gap-12 items-start w-full py-8">
          {/* Coluna Esquerda - Foto e Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            {/* Foto */}
            <div
              className="rounded-full w-[300px] h-[300px] flex items-center justify-center"
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
              <img
                src="/ana4.JPG"
                alt="Ana Carolina Damore"
                className="w-[284px] h-[284px] rounded-full object-cover object-top"
              />
            </div>

            {/* Cards de Experiência e Localização - Grid 2x2 */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-cyan-400 mb-1">5+</p>
                <p className="text-white/90 text-xs">Anos em desenvolvimento</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-blue-400/30 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-blue-400 mb-1">8+</p>
                <p className="text-white/90 text-xs">Anos em UI/UX</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border-2 border-purple-400/30 rounded-xl p-3 flex items-center gap-2">
                <p className="text-xl font-bold text-purple-400">📍</p>
                <p className="text-white/90 text-xs">Campo Grande, MS</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-indigo-400/30 rounded-xl p-3 flex items-center gap-2">
                <p className="text-xl font-bold text-indigo-400">🎓</p>
                <p className="text-white/90 text-xs">IFMS - Sistemas para Internet</p>
              </div>
            </div>
          </motion.div>

          {/* Texto à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h1>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-white/90">
                Sou uma <span className="font-semibold text-cyan-400">Desenvolvedora</span> apaixonada por criar experiências digitais interativas. Com uma base sólida em tecnologias modernas da web e um olhar atento para o design, faço a integração entre código funcional e excelência estética.
              </p>

              <p className="text-white/90">
                Gosto de resolver problemas complexos e transformar ideias inovadoras em realidade. Tenho prazer em construir experiências digitais limpas, rápidas e eficientes.
              </p>
            </div>

            {/* 3 Quadrados de estatísticas */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                <p className="text-3xl font-bold text-cyan-400">35+</p>
                <p className="text-sm text-white/70 mt-1">Projetos Entregues</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-sm text-white/70 mt-1">Clientes Satisfeitos</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-green-400/50 rounded-xl p-4 flex items-center justify-center hover:bg-green-500/40 transition-all">
                <p className="text-base font-bold text-green-300 text-center">Disponibilidade Imediata</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
