-- Ana Carolina Damore - Database Schema
-- Execute este script no Supabase SQL Editor

-- 1. Tabela de Projetos do Portfolio
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('web', 'app', 'loja')),
  image_url TEXT,
  project_url TEXT,
  technologies TEXT[], -- Array de tecnologias usadas
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabela de Solicitações de Orçamento (do formulário público)
CREATE TABLE budget_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  project_type VARCHAR(50) NOT NULL CHECK (project_type IN ('site', 'sistema', 'loja', 'aplicativo')),
  description TEXT NOT NULL,
  deadline VARCHAR(100),
  budget_range VARCHAR(50),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'proposal_sent', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabela de Propostas (criadas no admin)
CREATE TABLE proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  budget_request_id UUID REFERENCES budget_requests(id) ON DELETE SET NULL,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(20),
  project_title VARCHAR(255) NOT NULL,
  project_description TEXT NOT NULL,
  scope TEXT NOT NULL, -- Escopo detalhado
  deliverables TEXT NOT NULL, -- Entregas
  timeline VARCHAR(255), -- Prazo de entrega
  total_value DECIMAL(10, 2) NOT NULL,
  payment_terms TEXT, -- Condições de pagamento
  notes TEXT,
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'rejected')),
  valid_until DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabela de Contratos (convertidos de propostas aceitas)
CREATE TABLE contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_id UUID REFERENCES proposals(id) ON DELETE CASCADE,
  contract_number VARCHAR(50) UNIQUE NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_cpf_cnpj VARCHAR(20),
  project_title VARCHAR(255) NOT NULL,
  scope TEXT NOT NULL,
  deliverables TEXT NOT NULL,
  timeline VARCHAR(255),
  total_value DECIMAL(10, 2) NOT NULL,
  payment_terms TEXT,
  start_date DATE,
  end_date DATE,
  terms_and_conditions TEXT, -- Termos e condições completos
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
  signed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabela de Usuários Admin (para autenticação - integrada com Supabase Auth)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Tabela de Imagens do Portfolio (storage)
CREATE TABLE portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_budget_requests_status ON budget_requests(status);
CREATE INDEX idx_budget_requests_created ON budget_requests(created_at DESC);
CREATE INDEX idx_proposals_status ON proposals(status);
CREATE INDEX idx_contracts_status ON contracts(status);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_proposals_updated_at BEFORE UPDATE ON proposals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contracts_updated_at BEFORE UPDATE ON contracts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) - Segurança
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE budget_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Policies - Projetos (público pode ler, admin pode tudo)
CREATE POLICY "Projects são públicos para leitura" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Apenas admin pode inserir projects" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Apenas admin pode atualizar projects" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Apenas admin pode deletar projects" ON projects
  FOR DELETE USING (auth.role() = 'authenticated');

-- Policies - Budget Requests (público pode criar, admin pode ler/atualizar)
CREATE POLICY "Qualquer um pode criar budget request" ON budget_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Apenas admin pode ler budget requests" ON budget_requests
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Apenas admin pode atualizar budget requests" ON budget_requests
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies - Proposals (apenas admin)
CREATE POLICY "Apenas admin pode acessar proposals" ON proposals
  FOR ALL USING (auth.role() = 'authenticated');

-- Policies - Contracts (apenas admin)
CREATE POLICY "Apenas admin pode acessar contracts" ON contracts
  FOR ALL USING (auth.role() = 'authenticated');

-- Policies - Portfolio Images (público lê, admin gerencia)
CREATE POLICY "Portfolio images são públicas" ON portfolio_images
  FOR SELECT USING (true);

CREATE POLICY "Apenas admin pode gerenciar images" ON portfolio_images
  FOR ALL USING (auth.role() = 'authenticated');

-- Dados iniciais de exemplo (opcional)
INSERT INTO projects (title, description, category, technologies, featured) VALUES
('Radiant Jewelry Site', 'Site institucional para joalheria de luxo desenvolvido com Next.js e Tailwind', 'web', ARRAY['Next.js', 'TypeScript', 'TailwindCSS'], true),
('Sistema de Gestão', 'Sistema completo de gestão empresarial com dashboard analytics', 'sistema', ARRAY['React', 'Node.js', 'PostgreSQL'], false),
('E-commerce Fashion', 'Loja virtual completa com pagamento integrado', 'loja', ARRAY['Next.js', 'Stripe', 'Prisma'], true);
