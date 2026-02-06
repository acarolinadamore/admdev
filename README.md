# Ana Carolina Damore - Portfolio & Budget Platform

Site profissional para freelancer Front-End Developer, com portfolio interativo, sistema de solicitação de orçamentos e futuro painel administrativo para gestão de propostas e contratos.

## 🚀 Tecnologias

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animações fluidas
- **React Hook Form + Zod** - Validação de formulários
- **Lucide React** - Ícones modernos

### Backend & Database
- **Supabase** - Backend as a Service
- **PostgreSQL** - Banco de dados relacional
- **Supabase Auth** - Autenticação
- **Supabase Storage** - Armazenamento de arquivos

## 📋 Funcionalidades

### ✅ Implementado (v1.0 - Visual)
- [x] Hero Section moderna e animada
- [x] Seção "Sobre Mim" profissional
- [x] Portfolio com filtros por categoria (Web, App, Loja)
- [x] Formulário de orçamento com validação
- [x] Integração com WhatsApp
- [x] Design 100% responsivo
- [x] SEO otimizado

### 🔄 Próximas Implementações

#### Admin Dashboard
- [ ] Autenticação com Supabase Auth
- [ ] Dashboard com estatísticas
- [ ] Gestão de Portfolio (CRUD completo)
- [ ] Upload de imagens para Supabase Storage
- [ ] Visualização de solicitações de orçamento
- [ ] Criação de propostas personalizadas
- [ ] Geração de contratos a partir de propostas
- [ ] Sistema de templates para propostas
- [ ] Envio de propostas por email
- [ ] Histórico de contratos

#### Integrações
- [ ] Envio de formulário para Supabase
- [ ] Notificação por email (Resend/EmailJS)
- [ ] Analytics (Google Analytics ou Plausible)
- [ ] Assinatura digital de contratos

## 🏗️ Estrutura do Projeto

```
ana-damore-site/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home page
│   └── globals.css         # Estilos globais
├── components/
│   ├── home/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # Sobre mim
│   │   ├── Portfolio.tsx   # Portfolio com filtros
│   │   └── BudgetForm.tsx  # Formulário de orçamento
│   ├── ui/
│   │   └── Footer.tsx      # Rodapé
│   ├── portfolio/          # (Futuro) Componentes admin
│   ├── budget/             # (Futuro) Gestão de orçamentos
│   └── admin/              # (Futuro) Dashboard admin
├── lib/
│   └── supabase.ts         # Cliente Supabase
├── types/
│   └── database.ts         # Types do banco
├── database/
│   ├── schema.sql          # Schema SQL completo
│   └── README.md           # Instruções de setup
└── public/
    └── images/             # Imagens do site
```

## 🛠️ Setup & Instalação

### 1. Clonar o Repositório
```bash
git clone [repository-url]
cd ana-damore-site
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente
Copie o arquivo `.env.local.example` para `.env.local`:
```bash
cp .env.local.example .env.local
```

Configure as variáveis:
```env
NEXT_PUBLIC_SUPABASE_URL=sua-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-key-supabase
NEXT_PUBLIC_WHATSAPP_NUMBER=5567992429385
```

### 4. Configurar Banco de Dados (Supabase)

1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Vá em **SQL Editor**
4. Execute o script `database/schema.sql`
5. Configure o Storage para imagens do portfolio

**Detalhes completos em:** `database/README.md`

### 5. Executar em Desenvolvimento
```bash
npm run dev
```

Acesse: http://localhost:3000

## 📦 Build & Deploy

### Build de Produção
```bash
npm run build
npm start
```

### Deploy na Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

Ou conecte o repositório diretamente no [Vercel Dashboard](https://vercel.com).

## 🗄️ Banco de Dados

### Tabelas Principais

- **projects** - Portfolio de projetos
- **budget_requests** - Solicitações de orçamento
- **proposals** - Propostas criadas no admin
- **contracts** - Contratos gerados
- **portfolio_images** - Imagens dos projetos
- **admin_users** - Usuários administrativos

### Segurança (RLS)
Todas as tabelas possuem Row Level Security configurado:
- Projetos: público pode visualizar
- Orçamentos: público pode criar, admin gerencia
- Propostas/Contratos: apenas admin

## 📱 Contato

**Ana Carolina Damore**
- Email: acarolinadamore@gmail.com
- WhatsApp: (67) 99242-9385
- Portfolio: [em breve]

## 📄 Licença

© 2025 Ana Carolina Damore. Todos os direitos reservados.

---

**Status do Projeto:** Em Desenvolvimento (v1.0 - Frontend Visual Completo)
