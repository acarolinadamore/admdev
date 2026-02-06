# Configuração do Banco de Dados - Supabase

## Passo a Passo

### 1. Criar Conta no Supabase
- Acesse: https://supabase.com
- Crie uma conta gratuita
- Crie um novo projeto

### 2. Executar o Schema
1. No dashboard do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Cole todo o conteúdo do arquivo `schema.sql`
4. Clique em **Run** (ou pressione Ctrl+Enter)

### 3. Configurar Storage (para imagens do portfolio)
1. No menu lateral, vá em **Storage**
2. Crie um bucket chamado `portfolio-images`
3. Torne-o público:
   - Clique no bucket
   - Settings → Make public

### 4. Obter Credenciais
1. Vá em **Settings** → **API**
2. Copie:
   - `Project URL` (URL do projeto)
   - `anon/public` key

### 5. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua-url-aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-key-aqui
```

### 6. Criar Primeiro Usuário Admin (opcional)
No SQL Editor, execute:

```sql
-- Primeiro, crie o usuário no Supabase Auth manualmente
-- Depois execute isso com o ID do usuário criado:

INSERT INTO admin_users (id, email, full_name)
VALUES (
  'uuid-do-usuario-auth',
  'acarolinadamore@gmail.com',
  'Ana Carolina Damore'
);
```

## Estrutura das Tabelas

- **projects** - Portfolio de projetos
- **budget_requests** - Solicitações de orçamento do formulário público
- **proposals** - Propostas criadas no admin
- **contracts** - Contratos convertidos de propostas aceitas
- **admin_users** - Usuários administrativos
- **portfolio_images** - Imagens dos projetos

## Segurança (RLS)
O banco já está configurado com Row Level Security:
- Projetos: público pode ver, admin pode editar
- Orçamentos: qualquer um pode criar, admin gerencia
- Propostas e Contratos: apenas admin
