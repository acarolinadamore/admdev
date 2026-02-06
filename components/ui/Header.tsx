"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface Section {
  name: string
  component?: any
  isExternal?: boolean
  path?: string
}

interface HeaderProps {
  currentSection: number
  onNavigate: (index: number) => void
  sections?: Section[]
}

export default function Header({
  currentSection,
  onNavigate,
  sections,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = sections || [
    { name: "Home" },
    { name: "Sobre" },
    { name: "Portfolio" },
    { name: "Orçamento" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-md border-b border-white/10">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />

      {/* Progress Bar with Neon Effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        style={{
          boxShadow: `
            0 0 10px rgba(59, 130, 246, 0.8),
            0 0 20px rgba(59, 130, 246, 0.6),
            0 0 30px rgba(59, 130, 246, 0.4),
            0 0 40px rgba(59, 130, 246, 0.2),
            0 -5px 15px rgba(59, 130, 246, 0.3)
          `,
          filter: "brightness(1.3)",
        }}
        initial={{ width: 0 }}
        animate={{
          width: `${((currentSection + 1) / menuItems.length) * 100}%`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner glow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 blur-sm opacity-70" />
        {/* Core light */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-white opacity-50" />
      </motion.div>

      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate(0)}
          >
            <img
              src="/adm-branco.svg"
              alt="ADM Logo"
              className="h-8 md:h-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              style={{ width: "130px" }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`relative text-base font-medium transition-all ${
                  currentSection === index
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "text-white/70 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                }`}
              >
                {item.name}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                    style={{
                      boxShadow: `
                        0 0 8px rgba(59, 130, 246, 0.8),
                        0 0 15px rgba(59, 130, 246, 0.6),
                        0 0 25px rgba(59, 130, 246, 0.4),
                        0 2px 10px rgba(59, 130, 246, 0.3)
                      `,
                      filter: "brightness(1.3)",
                    }}
                    initial={index === 0 ? { x: "-100%", opacity: 0 } : false}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  onNavigate(index)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${
                  currentSection === index
                    ? "bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] backdrop-blur-sm border border-white/20"
                    : "text-white/80 hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
