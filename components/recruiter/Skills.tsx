'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Zap, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Layout,
    title: 'Front-End Development',
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code2,
    title: 'Styling & Design',
    skills: ['TailwindCSS', 'Sass/SCSS', 'CSS3', 'Styled Components', 'Responsive Design'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Database,
    title: 'Back-End & APIs',
    skills: ['Node.js', 'REST API', 'GraphQL', 'Express', 'MongoDB'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Wrench,
    title: 'Tools & Testing',
    skills: ['Git/GitHub', 'Jest', 'Webpack', 'Vite', 'NPM/Yarn'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    skills: ['Web Vitals', 'Lighthouse', 'SEO Optimization', 'Lazy Loading', 'Code Splitting'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Globe,
    title: 'Design & UX',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Sempre Aprendendo</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Estou constantemente atualizando minhas habilidades e explorando novas tecnologias
            para entregar as melhores soluções para cada projeto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
