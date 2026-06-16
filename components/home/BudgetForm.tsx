'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { projectDescriptions } from '@/lib/i18n/projectsData';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link?: string;
  displayAsApp?: boolean;
  hideConfidentialityMessage?: boolean;
}

const projects: Project[] = [
  {
    id: 34,
    title: "EVO - Evolução Urbana",
    description: "Site institucional da EVO Evolução Urbana, holding do setor imobiliário. Plataforma corporativa que apresenta as três marcas operacionais do grupo.",
    image: "/sites/site-evo-preview.png",
    technologies: ["WordPress", "Elementor"],
    category: "site",
    link: "https://grupoevo.dev.grupoimagetech.com.br/"
  },
  {
    id: 35,
    title: "Hartt",
    description: "Site da Hartt, marca premium do grupo EVO especializada em empreendimentos de alto padrão. Desenvolvido em WordPress com Elementor.",
    image: "/sites/site-hartt-preview.png",
    technologies: ["WordPress", "Elementor"],
    category: "site",
    link: "https://hartt.dev.grupoimagetech.com.br/"
  },
  {
    id: 37,
    title: "Jooy",
    description: "Site institucional da Jooy, marca do grupo EVO voltada ao segmento médio e médio-alto. Desenvolvido em WordPress com Elementor.",
    image: "/sites/site-jooy-preview.png",
    technologies: ["WordPress", "Elementor"],
    category: "site",
    link: "https://somosjooy.com.br/"
  },
  {
    id: 36,
    title: "Lyvo",
    description: "Site da Lyvo, marca do grupo EVO focada no segmento econômico e programa Minha Casa Minha Vida. Desenvolvido em WordPress com Elementor.",
    image: "/sites/site-lyvo-preview.png",
    technologies: ["WordPress", "Elementor"],
    category: "site",
    link: "https://lyvoincorporadora.com.br/"
  },
  {
    id: 1,
    title: "Rara Joias - Loja Virtual",
    description: "E-commerce premium de joias desenvolvido em WordPress com WooCommerce. Loja virtual completa com catálogo elegante, carrinho de compras, sistema de pagamento e painel administrativo.",
    image: "/sites/site-rara-preview.jpg",
    technologies: ["WordPress", "WooCommerce"],
    category: "site",
    link: "https://raraamazoniajoias.com.br/"
  },
  {
    id: 38,
    title: "Via Rosarium - Loja Virtual",
    description: "E-commerce católico especializado em terços e rosários personalizados artesanalmente. Loja virtual completa desenvolvida em Next.js com carrinho de compras, sistema de pagamento integrado e área administrativa para gestão de produtos e pedidos.",
    image: "/sites/site-rosarium-preview.png",
    technologies: ["Next.js", "React", "Node.js"],
    category: "site",
    link: "http://viarosarium.vercel.app/"
  },
  {
    id: 17,
    title: "Burger House",
    description: "Site para hamburgueria artesanal com cardápio digital, sistema de pedidos online e área de promoções. Design moderno e apetitoso que destaca os produtos.",
    image: "/sites/site-burger-preview.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "site"
  },
  {
    id: 29,
    title: "Quitanda",
    description: "Site para quitanda com catálogo de produtos frescos, sistema de pedidos online e delivery. Interface moderna e amigável que destaca produtos naturais e orgânicos.",
    image: "/sites/site-quitanda.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "site"
  },
  {
    id: 2,
    title: "Pantanal em Alerta - Bombeiros e Ministério Público",
    description: "Sistema desenvolvido em parceria com o Corpo de Bombeiros e Ministério Público para monitoramento e gestão de ações de preservação do Pantanal. Ferramenta estratégica para coordenação de operações ambientais.",
    image: "/sistemas/bombeiros-sistema1.jpg",
    technologies: ["React", "Node.js", "API REST", "PostgreSQL"],
    category: "sistema",
    link: "https://pantanalemalerta.bombeiros.ms.gov.br/"
  },
  {
    id: 39,
    title: "Via Rosarium - Painel Administrativo",
    description: "Sistema administrativo completo para gestão de e-commerce católico. Painel desenvolvido em Next.js com controle de produtos, gerenciamento de pedidos, estoque, relatórios de vendas e dashboard analítico para administração da loja Via Rosarium.",
    image: "/sistemas/sistema-rosarium.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    category: "sistema"
  },
  {
    id: 40,
    title: "Biblioteca Católica",
    description: "Plataforma digital de catalogação e consulta do acervo pessoal de livros católicos do Pe. Carlos Alberto Pereira. Sistema desenvolvido em Next.js com busca avançada por título, autor e palavra-chave, utilizando IA Claude para captura automática de capas e preenchimento de dados.",
    image: "/sistemas/sistema-biblioteca.png",
    technologies: ["Next.js", "React", "Claude AI", "Node.js"],
    category: "sistema",
    link: "https://minha-biblioteca-catolica.vercel.app/"
  },
  {
    id: 16,
    title: "ERP - Sistema de Gestão Empresarial",
    description: "Sistema completo de gestão empresarial integrado. Plataforma robusta com módulos de controle financeiro, estoque, vendas, compras e relatórios gerenciais para otimização de processos corporativos.",
    image: "/sistemas/erp-sistema2.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "API REST"],
    category: "sistema"
  },
  {
    id: 27,
    title: "SIMSEMP - Sindicato dos Servidores Públicos",
    description: "Sistema de sindicato dos servidores públicos do Mato Grosso do Sul. Plataforma completa com gestão de filiados, área de notícias, documentos sindicais, benefícios e comunicação com associados.",
    image: "/sistemas/simsemp-sistema.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "API REST"],
    category: "sistema"
  },
  {
    id: 26,
    title: "Detran MS - Autorização de Alteração Veicular",
    description: "Sistema oficial do Detran MS para gerenciamento de autorizações de alterações veiculares. Plataforma completa para registro, análise e aprovação de modificações em veículos com integração aos sistemas governamentais.",
    image: "/sistemas/sistema-detran-preview.png",
    technologies: ["Angular", "Java"],
    category: "sistema"
  },
  {
    id: 28,
    title: "Detran MS - ATPVE",
    description: "Sistema de Autorização Temporária de Trânsito para Veículos Especiais do Detran MS. Plataforma para gerenciamento e controle de autorizações temporárias de circulação de veículos com características especiais.",
    image: "/sistemas/sistema-atpve.png",
    technologies: ["Angular", "Java"],
    category: "sistema"
  },
  {
    id: 33,
    title: "Evenza - Sistema de Gestão de Eventos",
    description: "Painel administrativo para produtores e organizadores de eventos. Sistema back-office completo com gerenciamento de eventos, controle de vendas, emissão de ingressos, check-in, credenciamento, relatórios financeiros e dashboards analíticos.",
    image: "/sistemas/sistema-evenza.png",
    technologies: ["PHP", "Laravel", "MySQL"],
    category: "sistema"
  },
  {
    id: 3,
    title: "Aquaju - Academia Aquática",
    description: "Site institucional desenvolvido para academia de natação e atividades aquáticas. Design clean e responsivo com foco na apresentação dos serviços e captação de alunos.",
    image: "/sites/site-aquaju-preview.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "site"
  },
  {
    id: 32,
    title: "Evenza - Site de Eventos",
    description: "Site público para venda de ingressos online. Plataforma onde usuários podem visualizar eventos disponíveis, comprar ingressos, realizar pagamentos e receber confirmações por e-mail.",
    image: "/sites/site-evenza.png",
    technologies: ["PHP", "Laravel", "MySQL"],
    category: "site"
  },
  {
    id: 4,
    title: "Namoricão",
    description: "Site inovador para cadastro e matching de cachorros para encontros e reprodução. Plataforma com perfis de pets, filtros avançados e sistema de mensagens entre tutores.",
    image: "/sites/site-namoricao-preview.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "site"
  },
  {
    id: 5,
    title: "Portal de Notícias",
    description: "Portal de notícias completo com sistema de gerenciamento de conteúdo, categorização de matérias, área administrativa e layout otimizado para leitura.",
    image: "/sites/site-news-preview.jpg",
    technologies: ["React", "Next.js", "CMS"],
    category: "site"
  },
  {
    id: 6,
    title: "ShopBike - Loja Virtual",
    description: "Loja virtual completa especializada em bicicletas e acessórios. Sistema com catálogo de produtos, carrinho de compras, integração de pagamento e painel administrativo.",
    image: "/sites/site-shopbike-preview.png",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "site"
  },
  {
    id: 7,
    title: "Telessaúde MS",
    description: "Plataforma oficial do SUS para atendimento remoto utilizando tecnologias digitais de saúde. Site institucional WordPress com informações sobre telemedicina, agendamentos e recursos para profissionais de saúde.",
    image: "/sites/site-telessaude-preview.png",
    technologies: ["WordPress", "PHP", "MySQL"],
    category: "site"
  },
  {
    id: 8,
    title: "Laboratório Oswaldo Cruz",
    description: "Site institucional para laboratório de análises clínicas. Plataforma com informações sobre exames, agendamento online, área do paciente e sistema de resultados.",
    image: "/sites/site-laboratorio-preview.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "site"
  },
  {
    id: 9,
    title: "Editora Católica - Loja Virtual",
    description: "Loja virtual especializada em livros católicos. Sistema com catálogo de publicações, carrinho de compras e área de conteúdo religioso.",
    image: "/sites/site-editora-preview.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "site"
  },
  {
    id: 10,
    title: "Libera Limes - Plataforma de Cursos",
    description: "Sistema completo de gestão de cursos online. Plataforma EAD com área de alunos, videoaulas, avaliações, certificados e painel administrativo para gestão de conteúdo.",
    image: "/sites/site-cursos-preview.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "API REST"],
    category: "sistema"
  },
  {
    id: 11,
    title: "iDoctor - Agendamento Médico",
    description: "Aplicativo mobile para marcação de consultas médicas. Plataforma completa com busca de especialistas, agendamento online, histórico de consultas e notificações de lembretes.",
    image: "/app/app-idoctor-preview.jpg",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "Firebase"],
    category: "aplicativo",
    link: "https://www.figma.com/design/a7K0WjIuBOKk6CzN4WdOXE/Idoctor---Aplicativo?node-id=43-569&t=BCe0abcV4O27UrWs-0"
  },
  {
    id: 12,
    title: "Inkaza - Manutenção Residencial",
    description: "App mobile para contratação de serviços de manutenção residencial. Conecta clientes a prestadores de serviços qualificados com sistema de avaliação, chat e pagamento integrado.",
    image: "/app/app-inkaza-preview.jpg",
    technologies: ["React Native", "Expo", "Node.js", "API REST", "PostgreSQL"],
    category: "aplicativo"
  },
  {
    id: 13,
    title: "Glamour - Agenda de Beleza",
    description: "Aplicativo para agendamento de serviços de beleza como cabelo, unha, maquiagem e estética. Interface intuitiva com calendário integrado, notificações e perfil de profissionais.",
    image: "/app/glamour-preview.png",
    technologies: ["React Native", "Expo", "Firebase", "API REST"],
    category: "aplicativo"
  },
  {
    id: 30,
    title: "SINSEMP-MS",
    description: "Site institucional do Sindicato dos Servidores Públicos. Plataforma com área de notícias, documentos, benefícios para associados e comunicação sindical.",
    image: "/sites/site-simsemp.jpg",
    technologies: ["Figma"],
    category: "prototipo",
    hideConfidentialityMessage: true
  },
  {
    id: 15,
    title: "FETEC - Sindicato dos Bancários",
    description: "Protótipo de plataforma digital para sindicato dos bancários. Sistema completo com área de notícias, documentos, benefícios, calendário de eventos e comunicação com associados.",
    image: "/prototipo/prototipo-fetec.jpg",
    technologies: ["Figma"],
    category: "prototipo",
    hideConfidentialityMessage: true
  },
  {
    id: 18,
    title: "Vista Air",
    description: "Sistema corporativo para operações aeronáuticas.",
    image: "/app/app-vistaair.jpg",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/",
    displayAsApp: true
  },
  {
    id: 19,
    title: "Comunica Cidadão",
    description: "Aplicativo de atendimento ao cidadão.",
    image: "/prototipo/prototipo-comunica.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 20,
    title: "AgroDados",
    description: "Plataforma de análise e consulta de dados fundiários. Solução digital voltada ao apoio na tomada de decisão para aquisição de terras, permitindo a consulta e verificação de informações relevantes relacionadas a imóveis rurais.",
    image: "/prototipo/prototipo-agrodados.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 21,
    title: "Credência",
    description: "Plataforma para gestão de processos licitatórios. Sistema utilizado no contexto de leilões e licitações, com foco no gerenciamento e acompanhamento de etapas administrativas e cadastrais.",
    image: "/prototipo/prototipo-credencia.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 22,
    title: "DeskIT",
    description: "Sistema de organização de tarefas e atividades. Solução voltada ao cadastro, controle e acompanhamento de tarefas e atividades em ambientes corporativos.",
    image: "/prototipo/prototipo-deskit.jpg",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 23,
    title: "ChatBOT Vitória",
    description: "Chatbot institucional. Assistente virtual desenvolvido para atendimento automatizado em contextos institucionais, com foco em orientação e suporte ao usuário.",
    image: "/prototipo/prototipo-vitoria.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 24,
    title: "ChatBOT SARA",
    description: "Chatbot institucional da área da saúde. Assistente virtual voltado ao apoio informativo e ao atendimento automatizado no âmbito da saúde pública.",
    image: "/prototipo/prototipo-sara.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 25,
    title: "GeoCertifica",
    description: "Plataforma de assinatura digital. Solução digital destinada à autenticação e assinatura eletrônica de documentos em ambientes institucionais e corporativos.",
    image: "/prototipo/prototipo-geocertifica.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.grupoimagetech.com.br/"
  },
  {
    id: 31,
    title: "Banco da Amazônia - SIGAF",
    description: "Sistema de Gestão Administrativa e Financeira do Banco da Amazônia. Plataforma robusta para controle de processos financeiros, orçamentários e administrativos da instituição.",
    image: "/prototipo/prototipo-banco-amazonia-sigaf.png",
    technologies: ["Figma"],
    category: "prototipo",
    link: "https://www.bancoamazonia.com.br/"
  }
];

export default function BudgetForm() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("todos");

  // Function to get translated description
  const getDescription = (projectId: number) => {
    const descriptions = projectDescriptions[projectId];
    return descriptions ? descriptions[language] : '';
  };

  const categories = [
    { id: "todos", label: t("projects.categories.all") },
    { id: "site", label: t("projects.categories.site") },
    { id: "sistema", label: t("projects.categories.system") },
    { id: "aplicativo", label: t("projects.categories.app") },
    { id: "prototipo", label: t("projects.categories.prototype") },
  ];

  const filteredProjects = activeCategory === "todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);
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
        {/* Título e Descrição */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("projects.title")}
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            {t("projects.subtitle")}
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
                px-6 py-3 rounded-full font-semibold transition-all
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

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {filteredProjects.map((project, index) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            const isApp = project.category === "aplicativo" || project.displayAsApp;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isApp ? "flex justify-center" : ""}
              >
                <CardWrapper
                  {...cardProps}
                  className={`block bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all ${project.link ? 'cursor-pointer hover:scale-105' : ''} ${isApp ? 'max-w-[280px] w-full' : ''}`}
                >
                  {/* Imagem */}
                  <div className={`w-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden ${isApp ? 'h-[500px]' : 'h-48'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover ${isApp ? 'object-center' : 'object-top'}`}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5">
                    {/* Título */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                      {project.link && (
                        <span className="ml-2 text-cyan-400 text-sm">↗</span>
                      )}
                    </h3>

                    {/* Descrição */}
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {getDescription(project.id) || project.description}
                    </p>

                    {/* Mensagem de Confidencialidade para Protótipos */}
                    {project.category === "prototipo" && !project.hideConfidentialityMessage && (
                      <p className="text-white/50 text-xs italic mb-4">
                        {t("projects.confidentialProject")}
                      </p>
                    )}

                    {/* Tags de Tecnologias */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Mensagem se não houver projetos */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-white/50 py-20">
            <p className="text-xl">Nenhum projeto encontrado nesta categoria</p>
          </div>
        )}
      </div>
    </section>
  );
}
