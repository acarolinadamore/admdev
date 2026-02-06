'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento Front-End',
      description: 'Especialista em React, Next.js, TypeScript e Vue. Código limpo, testável e escalável.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design responsivo e centrado no usuário. Protótipos em Figma e Adobe XD.',
    },
    {
      icon: Rocket,
      title: 'Performance & SEO',
      description: 'Sites otimizados para velocidade, acessibilidade e mecanismos de busca.',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração eficiente com designers, back-end e stakeholders.',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Vue.js',
    'GraphQL', 'REST API', 'HTML5', 'CSS3',
    'TailwindCSS', 'Figma', 'Jest', 'Git',
    'Docker', 'Firebase', 'Vercel',
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Front-End Developer apaixonada por criar experiências digitais que combinam
            design excepcional com código de qualidade.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-slate-700">
              <p>
                Com <strong>7 anos de experiência</strong> na área, atuo no desenvolvimento de
                sistemas complexos e interfaces modernas, sempre com foco em UX/UI e boas práticas.
              </p>
              <p>
                Tenho formação em <strong>Tecnologia em Sistemas para Internet</strong> pelo IFMS
                e <strong>Design Gráfico</strong> pela UNIP, combinando conhecimento técnico com
                sensibilidade visual.
              </p>
              <p>
                Trabalho com as tecnologias mais modernas do mercado, integrando APIs REST e GraphQL,
                sempre entregando código limpo, testável e escalável em colaboração com times de
                design e back-end.
              </p>
            </div>

            {/* Contact info */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Vamos conversar?</h3>
              <div className="space-y-2 text-slate-700">
                <p>📧 acarolinadamore@gmail.com</p>
                <p>📱 (67) 99242-9385</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <skill.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
