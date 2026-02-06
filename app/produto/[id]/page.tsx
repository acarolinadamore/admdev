'use client';

import { useParams, useRouter } from 'next/navigation';
import { Check, MessageCircle, ArrowLeft } from 'lucide-react';
import { Product } from '@/types/product';

// Importar produtos de Sites
const siteProducts: Product[] = [
  // SITES WORDPRESS (primeiro)
  {
    id: 8,
    title: 'Site Simples WordPress',
    subtitle: 'Site WordPress até 3 páginas',
    description: 'Site básico em WordPress',
    indicatedFor: 'Autônomos, pequenos negócios, apresentação básica',
    image: '/images/site-placeholder.jpg',
    price: 1280,
    promoPrice: 1088,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 3 páginas',
    features: [
      'WordPress instalado e configurado',
      'Design personalizado',
      'Home',
      'Sobre',
      'Contato (formulário + WhatsApp)',
      'Layout responsivo',
      'Hospedagem/domínio não inclusos',
    ],
    extras: ['Página extra: R$ 200', 'Manutenção mensal: R$ 300'],
  },
  {
    id: 9,
    title: 'Site Profissional WordPress',
    subtitle: 'Site WordPress até 6 páginas',
    description: 'Site completo em WordPress',
    indicatedFor: 'Empresas, prestadores de serviço estruturados',
    image: '/images/site-placeholder.jpg',
    price: 1760,
    promoPrice: 1496,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 6 páginas',
    features: [
      'WordPress instalado e configurado',
      'Tema premium personalizado',
      'Home',
      'Sobre',
      'Serviços (1 página)',
      'Portfólio ou Galeria',
      'Depoimentos',
      'Contato',
      'Integração Google Analytics',
    ],
    extras: [
      'Página extra: R$ 200',
      'Blog (estrutura): R$ 300 - 600',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 10,
    title: 'Site Premium WordPress',
    subtitle: 'Site WordPress até 10 páginas',
    description: 'Site premium em WordPress com recursos avançados',
    indicatedFor: 'Empresas maiores, incorporadoras, marcas',
    image: '/images/site-placeholder.jpg',
    price: 2400,
    promoPrice: 2040,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 10 páginas',
    features: [
      'WordPress instalado e configurado',
      'Tema premium totalmente personalizado',
      'Estrutura pensada em conversão',
      'Blog (1 modelo de post)',
      'Performance otimizada',
      'Google Analytics + Tag Manager',
      'Plugins premium inclusos',
    ],
    extras: [
      'Página extra: R$ 200',
      'Performance / Core Web Vitals: R$ 400 - 800',
      'Integração API externa: a partir de R$ 500',
      'Área restrita / login: R$ 600 - 1.200',
    ],
  },
  // SITES REACT/NODE
  {
    id: 1,
    title: 'Site Simples',
    subtitle: 'Ideal para começar sua presença online',
    description: 'Site básico com as páginas essenciais',
    indicatedFor: 'Autônomos, pequenos negócios, apresentação básica',
    image: '/images/site-placeholder.jpg',
    price: 1600,
    promoPrice: 1360,
    category: 'empresarial',
    techStack: ['React', 'Node'],
    pages: 'Até 3 páginas',
    features: [
      'Home',
      'Sobre',
      'Contato (formulário + WhatsApp)',
      'Layout responsivo',
      'Integração WhatsApp',
      'Hospedagem/domínio não inclusos',
    ],
    extras: [
      'Página extra: R$ 200',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 2,
    title: 'Site Profissional',
    subtitle: 'Para empresas que querem se destacar',
    description: 'Site completo com estrutura profissional',
    indicatedFor: 'Empresas, prestadores de serviço estruturados',
    image: '/images/site-placeholder.jpg',
    price: 2200,
    promoPrice: 1870,
    category: 'empresarial',
    techStack: ['React', 'Node'],
    pages: 'Até 6 páginas',
    features: [
      'Home',
      'Sobre',
      'Serviços (1 página)',
      'Portfólio ou Galeria',
      'Depoimentos',
      'Contato',
      'Integração Google Analytics',
      'Layout personalizado (não template cru)',
    ],
    extras: [
      'Página extra: R$ 200',
      'Blog (estrutura): R$ 300 - 600',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 3,
    title: 'Site Premium',
    subtitle: 'Máxima qualidade e conversão',
    description: 'Site premium com recursos avançados',
    indicatedFor: 'Empresas maiores, incorporadoras, marcas',
    image: '/images/site-placeholder.jpg',
    price: 3000,
    promoPrice: 2550,
    category: 'empresarial',
    techStack: ['React', 'Node'],
    pages: 'Até 10 páginas',
    features: [
      'Estrutura pensada em conversão',
      'Animações leves / microinterações',
      'Blog (1 modelo de post)',
      'Performance e acessibilidade básica',
      'Google Analytics + Tag Manager',
      'Layout totalmente personalizado',
    ],
    extras: [
      'Página extra: R$ 200',
      'Performance / Core Web Vitals: R$ 400 - 800',
      'Integração API externa: a partir de R$ 500',
      'Área restrita / login: R$ 600 - 1.200',
    ],
  },
  {
    id: 4,
    title: 'Landing Page Conversão',
    subtitle: 'Página única focada em resultados',
    description: 'Landing page otimizada para conversão',
    indicatedFor: 'Lançamentos, captação de leads, tráfego pago',
    image: '/images/site-placeholder.jpg',
    price: 1200,
    promoPrice: 1020,
    category: 'landing',
    techStack: ['React'],
    pages: 'Página única',
    features: [
      'Copy organizada por seções',
      'CTA estratégico',
      'Integração WhatsApp / formulário',
      'Ideal para tráfego pago',
      'Layout responsivo',
    ],
    extras: [
      'Integração com ferramentas de email marketing: R$ 300',
      'Pixel Facebook / Google Ads: R$ 200',
    ],
  },
  {
    id: 5,
    title: 'Loja Virtual Básica',
    subtitle: 'Comece a vender online',
    description: 'E-commerce completo para começar',
    indicatedFor: 'Pequenos comerciantes, empreendedores iniciantes',
    image: '/images/site-placeholder.jpg',
    price: 2500,
    promoPrice: 2125,
    category: 'loja',
    techStack: ['React', 'Node'],
    pages: 'Estrutura de e-commerce',
    features: [
      'Até 20 produtos cadastrados',
      'Pagamento (Pix, cartão)',
      'Frete configurado',
      'Layout padrão adaptado',
      'Treinamento básico',
      'Painel administrativo',
    ],
    extras: [
      'Produto extra: R$ 30 - 50',
      'Integração frete avançada: R$ 400',
    ],
  },
  {
    id: 6,
    title: 'E-commerce Completo',
    subtitle: 'Loja completa e profissional',
    description: 'E-commerce robusto com recursos avançados',
    indicatedFor: 'Lojas estabelecidas, médias empresas',
    image: '/images/site-placeholder.jpg',
    price: 4500,
    promoPrice: 4050,
    category: 'loja',
    techStack: ['React', 'Node'],
    pages: 'Estrutura de e-commerce completa',
    features: [
      'Até 50 produtos cadastrados',
      'Filtros avançados',
      'Sistema de cupons',
      'Integração frete avançada',
      'Layout personalizado',
      'Relatórios de vendas',
      'Treinamento completo',
    ],
    extras: [
      'Produto extra: R$ 30 - 50',
      'Integração ERP: sob consulta',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 7,
    title: 'Landing Page WordPress',
    subtitle: 'Página única em WordPress',
    description: 'Landing page otimizada em WordPress',
    indicatedFor: 'Lançamentos, captação de leads, tráfego pago',
    image: '/images/site-placeholder.jpg',
    price: 960,
    promoPrice: 816,
    category: 'landing',
    isWordPress: true,
    pages: 'Página única',
    features: [
      'WordPress instalado e configurado',
      'Tema premium otimizado',
      'Copy organizada por seções',
      'CTA estratégico',
      'Integração WhatsApp / formulário',
      'Layout responsivo',
    ],
    extras: [
      'Página extra: R$ 200',
      'Integração com ferramentas de email marketing: R$ 300',
      'Pixel Facebook / Google Ads: R$ 200',
    ],
  },
  {
    id: 8,
    title: 'Site Simples WordPress',
    subtitle: 'Site WordPress até 3 páginas',
    description: 'Site básico em WordPress',
    indicatedFor: 'Autônomos, pequenos negócios, apresentação básica',
    image: '/images/site-placeholder.jpg',
    price: 1280,
    promoPrice: 1088,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 3 páginas',
    features: [
      'WordPress instalado e configurado',
      'Tema premium personalizado',
      'Home',
      'Sobre',
      'Contato (formulário + WhatsApp)',
      'Layout responsivo',
      'Hospedagem/domínio não inclusos',
    ],
    extras: [
      'Página extra: R$ 200',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 9,
    title: 'Site Profissional WordPress',
    subtitle: 'Site WordPress até 6 páginas',
    description: 'Site completo em WordPress',
    indicatedFor: 'Empresas, prestadores de serviço estruturados',
    image: '/images/site-placeholder.jpg',
    price: 1760,
    promoPrice: 1496,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 6 páginas',
    features: [
      'WordPress instalado e configurado',
      'Tema premium personalizado',
      'Home',
      'Sobre',
      'Serviços (1 página)',
      'Portfólio ou Galeria',
      'Depoimentos',
      'Contato',
      'Integração Google Analytics',
    ],
    extras: [
      'Página extra: R$ 200',
      'Blog (estrutura): R$ 300 - 600',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 10,
    title: 'Site Premium WordPress',
    subtitle: 'Site WordPress até 10 páginas',
    description: 'Site premium em WordPress com recursos avançados',
    indicatedFor: 'Empresas maiores, incorporadoras, marcas',
    image: '/images/site-placeholder.jpg',
    price: 2400,
    promoPrice: 2040,
    category: 'empresarial',
    isWordPress: true,
    pages: 'Até 10 páginas',
    features: [
      'WordPress instalado e configurado',
      'Tema premium totalmente personalizado',
      'Estrutura pensada em conversão',
      'Blog (1 modelo de post)',
      'Performance otimizada',
      'Google Analytics + Tag Manager',
      'Plugins premium inclusos',
    ],
    extras: [
      'Página extra: R$ 200',
      'Performance / Core Web Vitals: R$ 400 - 800',
      'Integração API externa: a partir de R$ 500',
      'Área restrita / login: R$ 600 - 1.200',
    ],
  },
  {
    id: 11,
    title: 'Loja Virtual Básica WordPress',
    subtitle: 'WooCommerce básico',
    description: 'E-commerce em WordPress com WooCommerce',
    indicatedFor: 'Pequenos comerciantes, empreendedores iniciantes',
    image: '/images/site-placeholder.jpg',
    price: 2000,
    promoPrice: 1700,
    category: 'loja',
    isWordPress: true,
    pages: 'Estrutura de e-commerce',
    features: [
      'WordPress + WooCommerce configurado',
      'Até 20 produtos cadastrados',
      'Pagamento (Pix, cartão)',
      'Frete configurado',
      'Tema premium adaptado',
      'Treinamento básico',
      'Painel administrativo',
    ],
    extras: [
      'Produto extra: R$ 30 - 50',
      'Integração frete avançada: R$ 400',
    ],
  },
  {
    id: 12,
    title: 'E-commerce Completo WordPress',
    subtitle: 'WooCommerce profissional',
    description: 'E-commerce robusto em WordPress',
    indicatedFor: 'Lojas estabelecidas, médias empresas',
    image: '/images/site-placeholder.jpg',
    price: 3600,
    promoPrice: 3240,
    category: 'loja',
    isWordPress: true,
    pages: 'Estrutura de e-commerce completa',
    features: [
      'WordPress + WooCommerce avançado',
      'Até 50 produtos cadastrados',
      'Filtros avançados',
      'Sistema de cupons',
      'Integração frete avançada',
      'Layout personalizado',
      'Relatórios de vendas',
      'Treinamento completo',
      'Plugins premium inclusos',
    ],
    extras: [
      'Produto extra: R$ 30 - 50',
      'Integração ERP: sob consulta',
      'Manutenção mensal: R$ 300',
    ],
  },
];

// Importar produtos de Sistemas
const sistemaProducts: Product[] = [
  {
    id: 13,
    title: 'Sistema Simples',
    subtitle: 'Solução básica para gerenciamento',
    description: 'Sistema web simples para necessidades específicas',
    indicatedFor: 'Pequenas empresas, startups, gestão interna básica',
    image: '/images/sistema-placeholder.jpg',
    price: 7000,
    promoPrice: 5950,
    category: 'gestao',
    pages: 'Até 5 telas',
    features: [
      'Login e autenticação',
      'CRUD básico',
      'Até 5 telas',
      'API existente ou mock',
      'Painel administrativo simples',
      'Layout responsivo',
      'Deploy e configuração inicial',
    ],
    extras: [
      'Tela extra: R$ 800 - 1.200',
      'Integração API externa: a partir de R$ 500',
      'Relatórios personalizados: R$ 600 - 1.000',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 14,
    title: 'Sistema de Gestão Empresarial',
    subtitle: 'Gestão completa do seu negócio',
    description: 'Sistema robusto para gestão empresarial',
    indicatedFor: 'Médias empresas, processos estruturados',
    image: '/images/sistema-placeholder.jpg',
    price: 12000,
    promoPrice: 10200,
    category: 'gestao',
    pages: 'Módulos completos',
    features: [
      'Gestão de usuários e permissões',
      'Dashboard com métricas',
      'Cadastros completos',
      'Relatórios gerenciais',
      'Integração com banco de dados',
      'Sistema de notificações',
      'Backup automático',
      'Treinamento incluso',
    ],
    extras: [
      'Módulo extra: R$ 2.000 - 4.000',
      'Integração ERP: sob consulta',
      'App mobile: sob consulta',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 15,
    title: 'CRM Starter',
    subtitle: 'Gerencie seus clientes',
    description: 'Sistema CRM básico para gestão de clientes',
    indicatedFor: 'Equipes de vendas, relacionamento com cliente',
    image: '/images/sistema-placeholder.jpg',
    price: 5000,
    promoPrice: 4250,
    category: 'crm',
    pages: 'Módulo CRM básico',
    features: [
      'Cadastro de clientes',
      'Histórico de interações',
      'Funil de vendas',
      'Tarefas e lembretes',
      'Relatórios básicos',
      'Dashboard de vendas',
      'Exportação de dados',
    ],
    extras: [
      'Integração WhatsApp: R$ 800',
      'Automação de emails: R$ 1.000',
      'Integração calendário: R$ 400',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 16,
    title: 'CRM Vendas Completo',
    subtitle: 'Potencialize suas vendas',
    description: 'CRM avançado com automação e inteligência',
    indicatedFor: 'Equipes estruturadas, alta demanda de vendas',
    image: '/images/sistema-placeholder.jpg',
    price: 10000,
    promoPrice: 8500,
    category: 'crm',
    pages: 'Sistema CRM completo',
    features: [
      'Gestão completa de clientes e leads',
      'Funil de vendas avançado',
      'Automação de processos',
      'Integração com email e WhatsApp',
      'Relatórios avançados',
      'Previsão de vendas',
      'Pipeline personalizado',
      'App mobile (consulta)',
      'Treinamento completo',
    ],
    extras: [
      'Integração telefonia: R$ 1.500',
      'Chatbot: R$ 2.000',
      'BI avançado: R$ 3.000',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 17,
    title: 'Sistema Web Sob Medida',
    subtitle: 'Desenvolvido para você',
    description: 'Sistema personalizado para suas necessidades',
    indicatedFor: 'Projetos complexos, necessidades específicas',
    image: '/images/sistema-placeholder.jpg',
    price: 15000,
    promoPrice: 13500,
    category: 'personalizado',
    pages: 'Projeto sob medida',
    features: [
      'Análise de requisitos completa',
      'Arquitetura personalizada',
      'React / Next.js / Vue',
      'Regras de negócio específicas',
      'Integrações customizadas',
      'Autenticação avançada',
      'Performance otimizada',
      'Documentação técnica',
      'Testes automatizados',
      'Suporte pós-lançamento',
    ],
    extras: [
      'Funcionalidade extra: sob consulta',
      'App mobile nativo: sob consulta',
      'Infraestrutura cloud: sob consulta',
      'Manutenção mensal: R$ 300',
    ],
  },
  {
    id: 18,
    title: 'Sistema Premium Enterprise',
    subtitle: 'Solução enterprise de alto nível',
    description: 'Sistema escalável para grandes operações',
    indicatedFor: 'Grandes empresas, alta complexidade',
    image: '/images/sistema-placeholder.jpg',
    price: 25000,
    promoPrice: 22500,
    category: 'personalizado',
    pages: 'Arquitetura enterprise',
    features: [
      'Arquitetura escalável (microserviços)',
      'Alta disponibilidade',
      'Multi-tenancy',
      'API REST + GraphQL',
      'Real-time com WebSockets',
      'Monitoramento e logs',
      'Testes completos (unit + e2e)',
      'CI/CD configurado',
      'Documentação completa',
      'Treinamento técnico',
      'Suporte dedicado 3 meses',
    ],
    extras: [
      'Módulo extra: sob consulta',
      'Infraestrutura AWS/Azure: sob consulta',
      'Consultoria arquitetural: R$ 300/hora',
      'SLA personalizado: sob consulta',
    ],
  },
];

const allProducts = [...siteProducts, ...sistemaProducts];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = parseInt(params.id as string);

  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const calculateInstallment = (price: number) => {
    return (price / 12).toFixed(2);
  };

  const whatsappNumber = '5567992429385';
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o plano: *${product.title}*`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botão voltar */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <div className="grid md:grid-cols-2 gap-0 shadow-2xl">
          {/* Left side - Image (sem borda) */}
          <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8">
            <div className="text-8xl">
              {product.category === 'landing' && '📄'}
              {product.category === 'empresarial' && '🌐'}
              {product.category === 'loja' && '🛒'}
              {(product.category === 'gestao' || product.category === 'crm' || product.category === 'personalizado') && '⚙️'}
            </div>
            {/* Prazo de entrega - esquerda */}
            <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              {product.category === 'landing'
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
              <div className="absolute top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                WordPress
              </div>
            )}
            {product.techStack && product.techStack.length > 0 && (
              <div className="absolute top-6 right-6 flex gap-2">
                {product.techStack.includes("React") && (
                  <div className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    React
                  </div>
                )}
                {product.techStack.includes("Node") && (
                  <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Node
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right side - Details (borda arredondada na direita) */}
          <div className="bg-white rounded-r-2xl p-8 overflow-y-auto">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-slate-600 mb-4">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                {/* Preço base */}
                <div className="text-2xl font-semibold text-gray-900 mb-2">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>

                {/* Parcelamento */}
                <div className="text-sm text-gray-600 mb-3">
                  Parcelamento disponível em até 10x com taxa da operadora
                </div>

                {/* Preço no Pix (destaque) */}
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  ou R$ {(product.promoPrice || product.price * 0.9).toFixed(2).replace('.', ',')} no Pix
                </div>

                {/* Texto desconto */}
                <div className="text-sm mb-3">
                  <span style={{ color: 'rgb(89, 192, 11)' }}>({product.promoPrice ? Math.round((1 - product.promoPrice / product.price) * 100) : 10}% de desconto no pix)</span>
                </div>

                {/* Metade entrada/entrega */}
                <div className="text-sm text-gray-600">
                  Metade na entrada, metade na entrega
                </div>
              </div>

              {/* Indicated for */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 uppercase mb-2">
                  Indicado para:
                </h3>
                <p className="text-slate-600">{product.indicatedFor}</p>
              </div>

              {/* Pages (if applicable) */}
              {product.pages && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-700 uppercase mb-2">
                    Escopo:
                  </h3>
                  <p className="text-slate-600">{product.pages}</p>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 uppercase mb-3">
                  Sugestões de páginas:
                </h3>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-slate-700">
                    <strong>Importante:</strong> Estas são apenas sugestões de páginas. As páginas finais do projeto são decididas pelo cliente de acordo com suas necessidades. Páginas extras podem ser adicionadas por R$ 200,00 cada.
                  </p>
                </div>
              </div>

              {/* Extras (if applicable) */}
              {product.extras && product.extras.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-700 uppercase mb-3">
                    Extras disponíveis:
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {product.extras.map((extra, index) => (
                      <li key={index}>• {extra}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors uppercase"
              >
                <MessageCircle className="w-5 h-5" />
                Contratar pelo WhatsApp
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
