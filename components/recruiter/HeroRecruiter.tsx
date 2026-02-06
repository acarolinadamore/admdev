'use client';

import { ArrowRight, Code2, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroRecruiter() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-blue-100">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Front-End Developer</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Ana Carolina
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Damore
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedora Front-End com expertise em React, Next.js e TypeScript.
            <span className="block mt-2">Especializada em criar interfaces modernas e performáticas.</span>
          </p>

          {/* Tech stack badges */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Stack Principal</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'Next.js', 'TypeScript', 'Vue.js', 'Node.js', 'TailwindCSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-semibold shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Outras Tecnologias</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {['JavaScript', 'HTML5', 'CSS3', 'Sass', 'Git', 'Figma', 'REST API', 'GraphQL', 'Jest', 'Redux'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contato@anadamore.dev"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Entrar em Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">7+</div>
              <div className="text-slate-600 mt-1">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">50+</div>
              <div className="text-slate-600 mt-1">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">10+</div>
              <div className="text-slate-600 mt-1">Tecnologias Dominadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}
