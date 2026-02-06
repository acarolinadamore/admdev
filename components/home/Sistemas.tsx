"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Technology = {
  name: string
  icon: string
  category: string[]
}

const technologies: Technology[] = [
  { name: "HTML5", icon: "/tecnologias/logo-html.jpg", category: ["frontend"] },
  { name: "CSS3", icon: "/tecnologias/logo-css.jpg", category: ["frontend"] },
  { name: "JavaScript", icon: "/tecnologias/logo-js.jpg", category: ["frontend"] },
  { name: "React", icon: "/tecnologias/logo-react.png", category: ["frontend"] },
  { name: "Next.js", icon: "/tecnologias/logo-next.png", category: ["frontend"] },
  { name: "Vite", icon: "/tecnologias/logo-vite.png", category: ["frontend"] },
  { name: "Bootstrap", icon: "/tecnologias/logo-bootstrap.png", category: ["frontend"] },
  { name: "SASS", icon: "/tecnologias/logo-sass.png", category: ["frontend"] },
  { name: "Tailwind", icon: "/tecnologias/logo-tail.png", category: ["frontend"] },
  { name: "PHP", icon: "/tecnologias/logo-php.png", category: ["backend"] },
  { name: "Laravel", icon: "/tecnologias/logo-laravel.png", category: ["backend"] },
  { name: "Node.js", icon: "/tecnologias/logo-node.png", category: ["backend"] },
  { name: "SQL", icon: "/tecnologias/logo-sql.png", category: ["backend"] },
  { name: "Supabase", icon: "/tecnologias/logo-supabase.png", category: ["backend"] },
  { name: "Git", icon: "/tecnologias/logo-git.png", category: ["tecnologias"] },
  { name: "GitHub", icon: "/tecnologias/logo-github.png", category: ["tecnologias"] },
  { name: "GitLab", icon: "/tecnologias/logo-gitlab.svg", category: ["tecnologias"] },
  { name: "NPM", icon: "/tecnologias/logo-npm.png", category: ["tecnologias"] },
  { name: "Yarn", icon: "/tecnologias/logo-yarn.jpg", category: ["tecnologias"] },
  { name: "Vercel", icon: "/tecnologias/logo-vercel.png", category: ["tecnologias"] },
  { name: "Render", icon: "/tecnologias/logo-render.png", category: ["tecnologias"] },
  { name: "Figma", icon: "/tecnologias/logo-figma.svg", category: ["uiux"] },
  { name: "Axure", icon: "/tecnologias/logo-axure.png", category: ["uiux"] },
  { name: "Adobe XD", icon: "/tecnologias/logo-adobexd.png", category: ["uiux"] },
  { name: "Photoshop", icon: "/tecnologias/logo-photoshop.png", category: ["uiux"] },
]

const categories = [
  { id: "todas", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "uiux", label: "UI/UX" },
  { id: "tecnologias", label: "Tecnologias" },
]

export default function Sistemas() {
  const [activeCategory, setActiveCategory] = useState("todas")

  const filteredTechnologies = activeCategory === "todas"
    ? technologies
    : technologies.filter(tech => tech.category.includes(activeCategory))

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
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h1>
          <p className="text-white/70 text-lg">
            Ferramentas e tecnologias que domino
          </p>
        </motion.div>

        {/* Filtros/Abas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grid de Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-4 flex flex-row items-center gap-4 hover:bg-white/20 hover:border-blue-400/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensagem se não houver tecnologias */}
        {filteredTechnologies.length === 0 && (
          <div className="text-center text-white/50 py-20">
            <p className="text-xl">Nenhuma tecnologia encontrada nesta categoria</p>
          </div>
        )}
      </div>
    </section>
  )
}
