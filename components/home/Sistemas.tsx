"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calculator, Send, CheckCircle } from "lucide-react"

type SystemType = {
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

const systemTypes: SystemType[] = [
  {
    id: "sistema-simples",
    name: "Sistema Simples",
    description: "Solução básica para gerenciamento",
    icon: "⚙️",
    basePrice: 4000,
    additionalPagePrice: 500,
    minPages: 0,
    baseIncludes: "(Login, CRUD, Painel Admin)",
    features: [
      "Login e autenticação",
      "CRUD básico",
      "Até 5 telas",
      "API existente ou mock",
      "Painel administrativo simples",
      "Layout responsivo",
      "Deploy e configuração inicial",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: "gestao-empresarial",
    name: "Gestão Empresarial",
    description: "Gestão completa do negócio",
    icon: "📊",
    basePrice: 12000,
    additionalPagePrice: 2000,
    minPages: 0,
    baseIncludes: "(Gestão, Dashboard, Relatórios)",
    features: [
      "Gestão de usuários e permissões",
      "Dashboard com métricas",
      "Cadastros completos",
      "Relatórios gerenciais",
      "Integração com banco de dados",
      "Sistema de notificações",
      "Backup automático",
      "Treinamento incluso",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    id: "crm-starter",
    name: "CRM Starter",
    description: "Gerencie seus clientes",
    icon: "👥",
    basePrice: 5000,
    additionalPagePrice: 800,
    minPages: 0,
    baseIncludes: "(Clientes, Vendas, Tarefas)",
    features: [
      "Cadastro de clientes",
      "Histórico de interações",
      "Funil de vendas",
      "Tarefas e lembretes",
      "Relatórios básicos",
      "Dashboard de vendas",
      "Exportação de dados",
    ],
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "crm-completo",
    name: "CRM Completo",
    description: "Potencialize suas vendas",
    icon: "🚀",
    basePrice: 10000,
    additionalPagePrice: 1500,
    minPages: 0,
    baseIncludes: "(CRM Avançado, Automação)",
    features: [
      "Gestão completa de clientes e leads",
      "Funil de vendas avançado",
      "Automação de processos",
      "Integração com email e WhatsApp",
      "Relatórios avançados",
      "Previsão de vendas",
      "Pipeline personalizado",
      "Treinamento completo",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "RabbitMQ"]
  },
  {
    id: "aplicativo",
    name: "Aplicativo",
    description: "App mobile personalizado",
    icon: "📱",
    basePrice: 4000,
    additionalPagePrice: 500,
    minPages: 0,
    baseIncludes: "(Home, Login, Menu)",
    features: [
      "Aplicativo mobile nativo ou híbrido",
      "Design responsivo",
      "Navegação fluida",
      "Integração com APIs",
      "Autenticação de usuário",
      "Layout personalizado",
      "Deploy nas lojas",
    ],
    technologies: ["React Native", "Expo", "Node.js", "Supabase"]
  },
]

export default function Sistemas() {
  const [selectedType, setSelectedType] = useState<SystemType | null>(null)
  const [numberOfPages, setNumberOfPages] = useState<string>("")
  const [showResult, setShowResult] = useState(false)

  const calculatePrice = () => {
    if (!selectedType) return { normal: 0, pix: 0 }

    // Calcula o preço: base + (páginas/telas adicionais * preço por página)
    const pages = parseInt(numberOfPages) || 0
    const normalPrice = selectedType.basePrice + (pages * selectedType.additionalPagePrice)
    const pixPrice = normalPrice * 0.9 // 10% de desconto no PIX

    return { normal: normalPrice, pix: pixPrice }
  }

  const { normal: normalPrice, pix: pixPrice } = calculatePrice()

  const handleSelectType = (type: SystemType) => {
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

*Tipo de Sistema:* ${selectedType.name}
*Telas/Módulos Adicionais:* ${pages}
*Valor Normal:* R$ ${normalPrice.toFixed(2).replace(".", ",")}
*Valor no PIX (10% desconto):* R$ ${pixPrice.toFixed(2).replace(".", ",")}

Aguardo retorno!`

    const whatsappNumber = "5548999445853" // Seu número do WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative h-screen overflow-hidden pt-28 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
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
            Quanto custa criar seu sistema?{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Descubra agora!
            </span>
          </h1>
        </motion.div>

        {/* Grid de Tipos de Sistema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">1. Escolha o tipo de sistema</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {systemTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => handleSelectType(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative p-4 rounded-lg transition-all duration-300
                  ${
                    selectedType?.id === type.id
                      ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg ring-4 ring-purple-400"
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
                  <div className="text-4xl">{type.icon}</div>
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
                        className="px-3 py-1 bg-purple-600 rounded-full text-sm"
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
              <div className="mb-4 p-4 bg-purple-600/30 rounded-lg">
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
                      <p className="text-xs opacity-70 mb-1">+ por tela adicional</p>
                      <p className="text-lg font-bold text-cyan-400">
                        R$ {selectedType.additionalPagePrice}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Número de Telas Adicionais */}
              {selectedType.additionalPagePrice > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Número de telas adicionais:
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
                      className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400"
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
