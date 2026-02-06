"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye } from "lucide-react"
import { Product } from "@/types/product"

type Category = "todos" | "gestao" | "crm" | "personalizado"

// Produtos de Sistemas
const products: Product[] = [
  {
    id: 13,
    title: "Sistema Simples",
    subtitle: "Solução básica para gerenciamento",
    description: "Sistema web simples para necessidades específicas",
    indicatedFor: "Pequenas empresas, startups, gestão interna básica",
    image: "/images/sistema-placeholder.jpg",
    price: 7000,
    promoPrice: 5950,
    category: "gestao",
    pages: "Até 5 telas",
    features: [
      "Login e autenticação",
      "CRUD básico",
      "Até 5 telas",
      "API existente ou mock",
      "Painel administrativo simples",
      "Layout responsivo",
      "Deploy e configuração inicial",
    ],
    extras: [
      "Tela extra: R$ 800 - 1.200",
      "Integração API externa: a partir de R$ 500",
      "Relatórios personalizados: R$ 600 - 1.000",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 14,
    title: "Sistema de Gestão Empresarial",
    subtitle: "Gestão completa do seu negócio",
    description: "Sistema robusto para gestão empresarial",
    indicatedFor: "Médias empresas, processos estruturados",
    image: "/images/sistema-placeholder.jpg",
    price: 12000,
    promoPrice: 10200,
    category: "gestao",
    pages: "Módulos completos",
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
    extras: [
      "Módulo extra: R$ 2.000 - 4.000",
      "Integração ERP: sob consulta",
      "App mobile: sob consulta",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 15,
    title: "CRM Starter",
    subtitle: "Gerencie seus clientes",
    description: "Sistema CRM básico para gestão de clientes",
    indicatedFor: "Equipes de vendas, relacionamento com cliente",
    image: "/images/sistema-placeholder.jpg",
    price: 5000,
    promoPrice: 4250,
    category: "crm",
    pages: "Módulo CRM básico",
    features: [
      "Cadastro de clientes",
      "Histórico de interações",
      "Funil de vendas",
      "Tarefas e lembretes",
      "Relatórios básicos",
      "Dashboard de vendas",
      "Exportação de dados",
    ],
    extras: [
      "Integração WhatsApp: R$ 800",
      "Automação de emails: R$ 1.000",
      "Integração calendário: R$ 400",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 16,
    title: "CRM Vendas Completo",
    subtitle: "Potencialize suas vendas",
    description: "CRM avançado com automação e inteligência",
    indicatedFor: "Equipes estruturadas, alta demanda de vendas",
    image: "/images/sistema-placeholder.jpg",
    price: 10000,
    promoPrice: 8500,
    category: "crm",
    pages: "Sistema CRM completo",
    features: [
      "Gestão completa de clientes e leads",
      "Funil de vendas avançado",
      "Automação de processos",
      "Integração com email e WhatsApp",
      "Relatórios avançados",
      "Previsão de vendas",
      "Pipeline personalizado",
      "App mobile (consulta)",
      "Treinamento completo",
    ],
    extras: [
      "Integração telefonia: R$ 1.500",
      "Chatbot: R$ 2.000",
      "BI avançado: R$ 3.000",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 17,
    title: "Sistema Web Sob Medida",
    subtitle: "Desenvolvido para você",
    description: "Sistema personalizado para suas necessidades",
    indicatedFor: "Projetos complexos, necessidades específicas",
    image: "/images/sistema-placeholder.jpg",
    price: 15000,
    promoPrice: 13500,
    category: "personalizado",
    pages: "Projeto sob medida",
    features: [
      "Análise de requisitos completa",
      "Arquitetura personalizada",
      "React / Next.js / Vue",
      "Regras de negócio específicas",
      "Integrações customizadas",
      "Autenticação avançada",
      "Performance otimizada",
      "Documentação técnica",
      "Testes automatizados",
      "Suporte pós-lançamento",
    ],
    extras: [
      "Funcionalidade extra: sob consulta",
      "App mobile nativo: sob consulta",
      "Infraestrutura cloud: sob consulta",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 18,
    title: "Sistema Premium Enterprise",
    subtitle: "Solução enterprise de alto nível",
    description: "Sistema escalável para grandes operações",
    indicatedFor: "Grandes empresas, alta complexidade",
    image: "/images/sistema-placeholder.jpg",
    price: 25000,
    promoPrice: 22500,
    category: "personalizado",
    pages: "Arquitetura enterprise",
    features: [
      "Arquitetura escalável (microserviços)",
      "Alta disponibilidade",
      "Multi-tenancy",
      "API REST + GraphQL",
      "Real-time com WebSockets",
      "Monitoramento e logs",
      "Testes completos (unit + e2e)",
      "CI/CD configurado",
      "Documentação completa",
      "Treinamento técnico",
      "Suporte dedicado 3 meses",
    ],
    extras: [
      "Módulo extra: sob consulta",
      "Infraestrutura AWS/Azure: sob consulta",
      "Consultoria arquitetural: R$ 300/hora",
      "SLA personalizado: sob consulta",
    ],
  },
]

export default function Sistemas() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<Category>("todos")

  const categories = [
    { id: "todos", label: "TODOS" },
    { id: "gestao", label: "GESTÃO" },
    { id: "crm", label: "CRM" },
    { id: "personalizado", label: "PERSONALIZADO" },
  ]

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  const calculateInstallment = (price: number) => {
    return (price / 12).toFixed(2)
  }

  const handleViewDetails = (productId: number) => {
    router.push(`/produto/${productId}`)
  }

  return (
    <>
      <section className="relative h-screen overflow-hidden pt-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pb-6">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8 h-full">
            {/* Abas Verticais - Fixas */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3 lg:self-start lg:sticky"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as Category)}
                  className={`
                    w-full px-6 py-4 rounded-lg font-bold text-left transition-all duration-300 uppercase text-sm
                    ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            {/* Grid de Produtos - Rolável */}
            <div className="overflow-y-auto overflow-x-hidden pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-3">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Imagem */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">⚙️</div>
                      </div>
                      {/* Prazo de entrega - esquerda */}
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Pronto em 30 dias
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {product.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        {product.subtitle}
                      </p>

                      {/* Número de Páginas/Telas */}
                      <p className="text-sm text-indigo-700 font-semibold mb-3">
                        {product.pages}
                      </p>

                      {/* Preços */}
                      <div className="mb-3">
                        {/* Preço base */}
                        <div className="text-lg font-semibold text-gray-900 mb-1">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </div>

                        {/* Parcelamento */}
                        <div className="text-xs text-gray-600 mb-2">
                          Parcelamento disponível em até 10x com taxa da
                          operadora
                        </div>

                        {/* Preço no Pix (destaque) */}
                        <div className="text-xl font-bold text-blue-600 mb-1">
                          ou R${" "}
                          {(product.promoPrice || product.price * 0.9)
                            .toFixed(2)
                            .replace(".", ",")}{" "}
                          no Pix
                        </div>

                        {/* Texto desconto */}
                        <div className="text-xs mb-2">
                          <span style={{ color: "rgb(89, 192, 11)" }}>
                            (
                            {product.promoPrice
                              ? Math.round(
                                  (1 - product.promoPrice / product.price) *
                                    100,
                                )
                              : 10}
                            % de desconto no pix)
                          </span>
                        </div>

                        {/* Metade entrada/entrega */}
                        <div className="text-xs text-gray-600">
                          Metade na entrada, metade na entrega
                        </div>
                      </div>

                      {/* Botão */}
                      <button
                        onClick={() => handleViewDetails(product.id)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 uppercase text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Ver Detalhes
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Empty state */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-300 text-lg">
                      Nenhum produto encontrado nesta categoria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
