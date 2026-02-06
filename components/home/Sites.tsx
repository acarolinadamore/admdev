"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calculator, Send, CheckCircle } from "lucide-react"

type SiteType = {
  id: string
  name: string
  description: string
  icon: string
  basePrice: number
  additionalPagePrice: number
  minPages: number
  maxPages?: number
  baseIncludes: string
  features: string[]
  technologies?: string[]
}

const siteTypes: SiteType[] = [
  {
    id: "wordpress",
    name: "Site WordPress",
    description: "Site ou Loja Virtual",
    icon: "/wp-logo.png",
    basePrice: 1280,
    additionalPagePrice: 200,
    minPages: 0,
    baseIncludes: "(Home, Login, Cadastro, Recuperar Senha)",
    features: [
      "WordPress instalado e configurado",
      "Design personalizado",
      "Layout responsivo",
      "Formulário de contato",
      "Integração WhatsApp",
    ],
    technologies: ["WordPress", "Elementor", "WooCommerce"]
  },
  {
    id: "react-vite",
    name: "Site React + Vite",
    description: "Site moderno e rápido",
    icon: "/react.png",
    basePrice: 1600,
    additionalPagePrice: 200,
    minPages: 0,
    baseIncludes: "(Home, Login, Cadastro, Recuperar Senha)",
    features: [
      "React + Vite configurado",
      "Tailwind CSS",
      "Design responsivo",
      "Performance otimizada",
      "Formulário de contato",
      "Integração WhatsApp",
      "Animações modernas",
      "Gerenciamento de estado",
    ],
    technologies: ["React", "Vite", "Tailwind"]
  },
  {
    id: "landing",
    name: "Landing Page",
    description: "Página única focada em conversão",
    icon: "📄",
    basePrice: 960,
    additionalPagePrice: 0,
    minPages: 0,
    maxPages: 0,
    baseIncludes: "(Página única completa)",
    features: [
      "WordPress otimizado",
      "Design focado em conversão",
      "Formulário de captação",
      "Integração WhatsApp",
      "Pixel Facebook/Google Ads",
      "Layout responsivo",
    ],
    technologies: ["WordPress", "Elementor", "React", "Vite"]
  },
  {
    id: "frontend-only",
    name: "Apenas Front-End",
    description: "Site front-end puro, sem backend",
    icon: "/react.png",
    basePrice: 1000,
    additionalPagePrice: 200,
    minPages: 0,
    baseIncludes: "(Home, Login, Cadastro, Recuperar Senha)",
    features: [
      "HTML/CSS/JS ou Tailwind ou React",
      "Design responsivo",
      "Performance otimizada",
      "Formulário de contato",
      "Integração WhatsApp",
      "Animações modernas",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React"]
  },
  {
    id: "prototipo",
    name: "Protótipo",
    description: "Fundação do desenvolvimento",
    icon: "/figma-logo.png",
    basePrice: 300,
    additionalPagePrice: 100,
    minPages: 0,
    baseIncludes: "(Home)",
    features: [
      "Design básico funcional",
      "Estrutura de páginas",
      "Navegação simples",
      "Formulário básico",
      "Layout responsivo",
      "Ideal para testes e validação",
    ],
    technologies: ["Figma"]
  },
]

export default function Sites() {
  const [selectedType, setSelectedType] = useState<SiteType | null>(null)
  const [numberOfPages, setNumberOfPages] = useState<string>("")
  const [showResult, setShowResult] = useState(false)

  const calculatePrice = () => {
    if (!selectedType) return { normal: 0, pix: 0 }

    // Calcula o preço: base + (páginas adicionais * preço por página)
    const pages = parseInt(numberOfPages) || 0
    const normalPrice = selectedType.basePrice + (pages * selectedType.additionalPagePrice)
    const pixPrice = normalPrice * 0.9 // 10% de desconto no PIX

    return { normal: normalPrice, pix: pixPrice }
  }

  const { normal: normalPrice, pix: pixPrice } = calculatePrice()

  const handleSelectType = (type: SiteType) => {
    setSelectedType(type)
    setNumberOfPages("")
    setShowResult(false)
  }

  const handleCalculate = () => {
    setShowResult(true)
  }

  const handleSendWhatsApp = () => {
    if (!selectedType) return

    const pages = parseInt(numberOfPages) || 0
    const message = `Olá! Gostaria de solicitar um orçamento:

*Tipo de Site:* ${selectedType.name}
*Páginas Adicionais:* ${pages}
*Valor Normal:* R$ ${normalPrice.toFixed(2).replace(".", ",")}
*Valor no PIX (10% desconto):* R$ ${pixPrice.toFixed(2).replace(".", ",")}

Aguardo retorno!`

    const whatsappNumber = "5548999445853" // Seu número do WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Quanto custa criar seu site?{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Descubra agora!
            </span>
          </h1>
        </motion.div>

        {/* Grid de Tipos de Site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">1. Escolha o tipo de site</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {siteTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => handleSelectType(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative p-4 rounded-lg transition-all duration-300
                  ${
                    selectedType?.id === type.id
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-4 ring-blue-400"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
                  }
                `}
              >
                {selectedType?.id === type.id && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                )}
                <div className="mb-2 flex items-center justify-center h-12">
                  {type.icon.startsWith('/') ? (
                    <img src={type.icon} alt={type.name} className="h-12 w-12 object-contain" />
                  ) : (
                    <div className="text-4xl">{type.icon}</div>
                  )}
                </div>
                <h3 className="font-bold text-sm mb-1">{type.name}</h3>
                <p className="text-xs opacity-90">{type.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Detalhes do Tipo Selecionado */}
        {selectedType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {/* Informações do Tipo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white overflow-hidden">
              <h3 className="text-xl font-bold mb-4">O que está incluído:</h3>
              <ul className="space-y-2">
                {selectedType.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {selectedType.technologies && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedType.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Calculadora */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">2. Configure seu projeto</h3>

              {/* Valor Base */}
              <div className="mb-4 p-4 bg-blue-600/30 rounded-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="text-sm opacity-80">Valor base:</p>
                      <p className="text-xs opacity-60">{selectedType.baseIncludes}</p>
                    </div>
                    <p className="text-2xl font-bold">
                      R$ {selectedType.basePrice.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  {selectedType.additionalPagePrice > 0 && (
                    <div className="text-right">
                      <p className="text-xs opacity-70 mb-1">+ por página adicional</p>
                      <p className="text-lg font-bold text-cyan-400">
                        R$ {selectedType.additionalPagePrice}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Número de Páginas Adicionais */}
              {selectedType.additionalPagePrice > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Número de páginas adicionais:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={numberOfPages}
                      onChange={(e) => {
                        setNumberOfPages(e.target.value)
                        setShowResult(false)
                      }}
                      onBlur={(e) => {
                        const value = parseInt(e.target.value)
                        if (isNaN(value) || value < 0) {
                          setNumberOfPages("0")
                        } else if (value > 20) {
                          setNumberOfPages("20")
                        }
                      }}
                      placeholder="0"
                      className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              )}

              {/* Botão Calcular */}
              <button
                onClick={handleCalculate}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
              >
                <Calculator className="w-5 h-5" />
                Calcular Preço
              </button>

              {/* Resultado */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  <div className="p-4 bg-white/20 rounded-lg">
                    <p className="text-sm opacity-80 mb-1">Valor Normal:</p>
                    <p className="text-2xl font-bold">
                      R$ {normalPrice.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-xs opacity-70 mt-1">
                      Parcelamento em até 10x com taxa
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
                    <p className="text-sm mb-1">Valor no PIX (10% OFF):</p>
                    <p className="text-3xl font-bold">
                      R$ {pixPrice.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-xs mt-1">
                      Economia de R$ {(normalPrice - pixPrice).toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <div className="text-xs opacity-80 text-center py-2">
                    50% na entrada, 50% na entrega
                  </div>

                  {/* Botão WhatsApp */}
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar para WhatsApp
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
