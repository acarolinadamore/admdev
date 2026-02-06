'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Entre em contato ou confira meu trabalho nas plataformas abaixo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <motion.a
            href="mailto:contato@anadamore.dev"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Email</h3>
                <p className="text-sm text-slate-500">Envie uma mensagem</p>
              </div>
            </div>
            <p className="text-slate-700 group-hover:text-blue-600 transition-colors">
              contato@anadamore.dev
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ana-damore/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">LinkedIn</h3>
                <p className="text-sm text-slate-500">Conecte-se comigo</p>
              </div>
            </div>
            <p className="text-slate-700 group-hover:text-blue-600 transition-colors flex items-center gap-2">
              /in/ana-damore
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/acarolinadamore"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-400 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">GitHub</h3>
                <p className="text-sm text-slate-500">Veja meus projetos</p>
              </div>
            </div>
            <p className="text-slate-700 group-hover:text-slate-900 transition-colors flex items-center gap-2">
              @acarolinadamore
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </motion.a>

          {/* Download CV */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-white hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                <Download className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Currículo</h3>
                <p className="text-sm text-blue-100">Download em PDF</p>
              </div>
            </div>
            <p className="text-white/90 group-hover:text-white transition-colors flex items-center gap-2">
              Baixar CV completo
              <Download className="w-4 h-4 group-hover:animate-bounce" />
            </p>
          </motion.button>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Buscando uma desenvolvedora Front-End?
          </h3>
          <p className="text-slate-600 mb-6">
            Estou disponível para novas oportunidades e projetos desafiadores.
          </p>
          <a
            href="mailto:contato@anadamore.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Entrar em Contato
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
