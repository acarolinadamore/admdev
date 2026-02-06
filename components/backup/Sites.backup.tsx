"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye } from "lucide-react"
import { Product } from "@/types/product"

type Category = "todos" | "empresarial" | "landing" | "loja"

// Produtos de Sites
const products: Product[] = [
  // SITES WORDPRESS (primeiro)
  {
    id: 8,
    title: "Site Simples WordPress",
    subtitle: "Site WordPress até 3 páginas",
    description: "Site básico em WordPress",
    indicatedFor: "Autônomos, pequenos negócios, apresentação básica",
    image: "/images/site-placeholder.jpg",
    price: 1280,
    promoPrice: 1088,
    category: "empresarial",
    isWordPress: true,
    pages: "Até 3 páginas",
    features: [
      "WordPress instalado e configurado",
      "Design personalizado",
      "Home",
      "Sobre",
      "Contato (formulário + WhatsApp)",
      "Layout responsivo",
      "Hospedagem/domínio não inclusos",
    ],
    extras: ["Página extra: R$ 200", "Manutenção mensal: R$ 300"],
  },
  {
    id: 9,
    title: "Site Profissional WordPress",
    subtitle: "Site WordPress até 6 páginas",
    description: "Site completo em WordPress",
    indicatedFor: "Empresas, prestadores de serviço estruturados",
    image: "/images/site-placeholder.jpg",
    price: 1760,
    promoPrice: 1496,
    category: "empresarial",
    isWordPress: true,
    pages: "Até 6 páginas",
    features: [
      "WordPress instalado e configurado",
      "Design personalizado",
      "Home",
      "Sobre",
      "Serviços (1 página)",
      "Portfólio ou Galeria",
      "Depoimentos",
      "Contato",
      "Integração Google Analytics",
    ],
    extras: [
      "Página extra: R$ 200",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 10,
    title: "Site Premium WordPress",
    subtitle: "Site WordPress até 10 páginas",
    description: "Site premium em WordPress com recursos avançados",
    indicatedFor: "Empresas maiores, incorporadoras, marcas",
    image: "/images/site-placeholder.jpg",
    price: 2400,
    promoPrice: 2040,
    category: "empresarial",
    isWordPress: true,
    pages: "Até 10 páginas",
    features: [
      "WordPress instalado e configurado",
      "Design totalmente personalizado",
      "Estrutura pensada em conversão",
      "Performance otimizada",
      "Google Analytics",
    ],
    extras: [
      "Página extra: R$ 200",
      "Performance / Core Web Vitals: R$ 400 - 800",
      "Integração API externa: a partir de R$ 500",
      "Área restrita / login: R$ 600 - 1.200",
    ],
  },
  // SITES REACT/NODE
  {
    id: 1,
    title: "Site Simples",
    subtitle: "Ideal para começar sua presença online",
    description: "Site básico com as páginas essenciais",
    indicatedFor: "Autônomos, pequenos negócios, apresentação básica",
    image: "/images/site-placeholder.jpg",
    price: 1600,
    promoPrice: 1360,
    category: "empresarial",
    techStack: ["React", "Node"],
    pages: "Até 3 páginas",
    features: [
      "Home",
      "Sobre",
      "Contato (formulário + WhatsApp)",
      "Layout responsivo",
      "Integração WhatsApp",
      "Hospedagem/domínio não inclusos",
    ],
    extras: ["Página extra: R$ 200", "Manutenção mensal: R$ 300"],
  },
  {
    id: 2,
    title: "Site Profissional",
    subtitle: "Para empresas que querem se destacar",
    description: "Site completo com estrutura profissional",
    indicatedFor: "Empresas, prestadores de serviço estruturados",
    image: "/images/site-placeholder.jpg",
    price: 2200,
    promoPrice: 1870,
    category: "empresarial",
    techStack: ["React", "Node"],
    pages: "Até 6 páginas",
    features: [
      "Home",
      "Sobre",
      "Serviços (1 página)",
      "Portfólio ou Galeria",
      "Depoimentos",
      "Contato",
      "Integração Google Analytics",
      "Layout personalizado (não template cru)",
    ],
    extras: [
      "Página extra: R$ 200",
      "Blog (estrutura): R$ 300 - 600",
      "Manutenção mensal: R$ 300",
    ],
  },
  {
    id: 3,
    title: "Site Premium",
    subtitle: "Máxima qualidade e conversão",
    description: "Site premium com recursos avançados",
    indicatedFor: "Empresas maiores, incorporadoras, marcas",
    image: "/images/site-placeholder.jpg",
    price: 3000,
    promoPrice: 2550,
    category: "empresarial",
    techStack: ["React", "Node"],
    pages: "Até 10 páginas",
    features: [
      "Estrutura pensada em conversão",
      "Animações leves / microinterações",
      "Blog (1 modelo de post)",
      "Performance e acessibilidade básica",
      "Google Analytics + Tag Manager",
      "Layout totalmente personalizado",
    ],
    extras: [
      "Página extra: R$ 200",
      "Performance / Core Web Vitals: R$ 400 - 800",
      "Integração API externa: a partir de R$ 500",
      "Área restrita / login: R$ 600 - 1.200",
    ],
  },
  // LANDING PAGE WORDPRESS (primeiro)
  {
    id: 7,
    title: "Landing Page WordPress",
    subtitle: "Página única em WordPress",
    description: "Landing page otimizada em WordPress",
    indicatedFor: "Lançamentos, captação de leads, tráfego pago",
    image: "/images/site-placeholder.jpg",
    price: 960,
    promoPrice: 816,
    category: "landing",
    isWordPress: true,
    pages: "Página única",
    features: [
      "WordPress instalado e configurado",
      "Tema premium otimizado",
      "Copy organizada por seções",
      "CTA estratégico",
      "Integração WhatsApp / formulário",
      "Layout responsivo",
    ],
    extras: [
      "Página extra: R$ 200",
      "Integração com ferramentas de email marketing: R$ 300",
      "Pixel Facebook / Google Ads: R$ 200",
    ],
  },
  // LANDING PAGE REACT
  {
    id: 4,
    title: "Landing Page Conversão",
    subtitle: "Página única focada em resultados",
    description: "Landing page otimizada para conversão",
    indicatedFor: "Lançamentos, captação de leads, tráfego pago",
    image: "/images/site-placeholder.jpg",
    price: 1200,
    promoPrice: 1020,
    category: "landing",
    techStack: ["React"],
    pages: "Página única",
    features: [
      "Copy organizada por seções",
      "CTA estratégico",
      "Integração WhatsApp / formulário",
      "Ideal para tráfego pago",
      "Layout responsivo",
    ],
    extras: [
      "Integração com ferramentas de email marketing: R$ 300",
      "Pixel Facebook / Google Ads: R$ 200",
    ],
  },
  // LOJA VIRTUAL WORDPRESS (primeiro)
  {
    id: 11,
    title: "Loja Virtual Básica WordPress",
    subtitle: "WooCommerce básico",
    description: "E-commerce em WordPress com WooCommerce",
    indicatedFor: "Pequenos comerciantes, empreendedores iniciantes",
    image: "/images/site-placeholder.jpg",
    price: 2000,
    promoPrice: 1700,
    category: "loja",
    isWordPress: true,
    pages: "Estrutura de e-commerce",
    features: [
      "WordPress + WooCommerce configurado",
      "Até 20 produtos cadastrados",
      "Pagamento (Pix, cartão)",
      "Frete configurado",
      "Tema premium adaptado",
      "Treinamento básico",
      "Painel administrativo",
    ],
    extras: ["Produto extra: R$ 30 - 50", "Integração frete avançada: R$ 400"],
  },
  {
    id: 12,
    title: "E-commerce Completo WordPress",
    subtitle: "WooCommerce profissional",
    description: "E-commerce robusto em WordPress",
    indicatedFor: "Lojas estabelecidas, médias empresas",
    image: "/images/site-placeholder.jpg",
    price: 3600,
    promoPrice: 3240,
    category: "loja",
    isWordPress: true,
    pages: "Estrutura de e-commerce completa",
    features: [
      "WordPress + WooCommerce avançado",
      "Até 50 produtos cadastrados",
      "Filtros avançados",
      "Sistema de cupons",
      "Integração frete avançada",
      "Layout personalizado",
      "Relatórios de vendas",
      "Treinamento completo",
      "Plugins premium inclusos",
    ],
    extras: [
      "Produto extra: R$ 30 - 50",
      "Integração ERP: sob consulta",
      "Manutenção mensal: R$ 300",
    ],
  },
  // LOJA VIRTUAL REACT/NODE
  {
    id: 5,
    title: "Loja Virtual Básica",
    subtitle: "Comece a vender online",
    description: "E-commerce completo para começar",
    indicatedFor: "Pequenos comerciantes, empreendedores iniciantes",
    image: "/images/site-placeholder.jpg",
    price: 2500,
    promoPrice: 2125,
    category: "loja",
    techStack: ["React", "Node"],
    pages: "Estrutura de e-commerce",
    features: [
      "Até 20 produtos cadastrados",
      "Pagamento (Pix, cartão)",
      "Frete configurado",
      "Layout padrão adaptado",
      "Treinamento básico",
      "Painel administrativo",
    ],
    extras: ["Produto extra: R$ 30 - 50", "Integração frete avançada: R$ 400"],
  },
  {
    id: 6,
    title: "E-commerce Completo",
    subtitle: "Loja completa e profissional",
    description: "E-commerce robusto com recursos avançados",
    indicatedFor: "Lojas estabelecidas, médias empresas",
    image: "/images/site-placeholder.jpg",
    price: 4500,
    promoPrice: 4050,
    category: "loja",
    techStack: ["React", "Node"],
    pages: "Estrutura de e-commerce completa",
    features: [
      "Até 50 produtos cadastrados",
      "Filtros avançados",
      "Sistema de cupons",
      "Integração frete avançada",
      "Layout personalizado",
      "Relatórios de vendas",
      "Treinamento completo",
    ],
    extras: [
      "Produto extra: R$ 30 - 50",
      "Integração ERP: sob consulta",
      "Manutenção mensal: R$ 300 - 500",
    ],
  },
]

export default function Sites() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<Category>("todos")

  const categories = [
    { id: "todos", label: "TODOS" },
    { id: "empresarial", label: "SITE" },
    { id: "landing", label: "LANDING PAGE" },
    { id: "loja", label: "LOJA VIRTUAL" },
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
              className="space-y-3 lg:self-start lg:sticky "
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
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">
                          {product.category === "landing" && "📄"}
                          {product.category === "empresarial" && "🌐"}
                          {product.category === "loja" && "🛒"}
                        </div>
                      </div>
                      {/* Prazo de entrega - esquerda */}
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.category === "landing"
                          ? "Pronto em 15 dias"
                          : product.id === 10
                          ? "Pronto em 20 dias"
                          : product.id === 3
                          ? "Pronto em 60 dias"
                          : product.isWordPress
                          ? "Pronto em 15 dias"
                          : "Pronto em 30 dias"
                        }
                      </div>
                      {/* Tecnologia - direita */}
                      {product.isWordPress && (
                        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          WordPress
                        </div>
                      )}
                      {product.techStack && product.techStack.length > 0 && (
                        <div className="absolute top-3 right-3 flex gap-2">
                          {product.techStack.includes("React") && (
                            <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              React
                            </div>
                          )}
                          {product.techStack.includes("Node") && (
                            <div className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                              Node
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Conteúdo */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {product.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        {product.subtitle}
                      </p>

                      {/* Número de Páginas */}
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
