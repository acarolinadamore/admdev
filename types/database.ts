export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string | null
          category: 'web' | 'app' | 'loja'
          image_url: string | null
          project_url: string | null
          technologies: string[] | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category: 'web' | 'app' | 'loja'
          image_url?: string | null
          project_url?: string | null
          technologies?: string[] | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: 'web' | 'app' | 'loja'
          image_url?: string | null
          project_url?: string | null
          technologies?: string[] | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      budget_requests: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          project_type: 'site' | 'sistema' | 'loja' | 'aplicativo'
          description: string
          deadline: string | null
          budget_range: string | null
          status: 'pending' | 'reviewing' | 'proposal_sent' | 'accepted' | 'rejected'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          project_type: 'site' | 'sistema' | 'loja' | 'aplicativo'
          description: string
          deadline?: string | null
          budget_range?: string | null
          status?: 'pending' | 'reviewing' | 'proposal_sent' | 'accepted' | 'rejected'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          project_type?: 'site' | 'sistema' | 'loja' | 'aplicativo'
          description?: string
          deadline?: string | null
          budget_range?: string | null
          status?: 'pending' | 'reviewing' | 'proposal_sent' | 'accepted' | 'rejected'
          created_at?: string
        }
      }
      proposals: {
        Row: {
          id: string
          budget_request_id: string | null
          client_name: string
          client_email: string
          client_phone: string | null
          project_title: string
          project_description: string
          scope: string
          deliverables: string
          timeline: string | null
          total_value: number
          payment_terms: string | null
          notes: string | null
          status: 'draft' | 'sent' | 'accepted' | 'rejected'
          valid_until: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          budget_request_id?: string | null
          client_name: string
          client_email: string
          client_phone?: string | null
          project_title: string
          project_description: string
          scope: string
          deliverables: string
          timeline?: string | null
          total_value: number
          payment_terms?: string | null
          notes?: string | null
          status?: 'draft' | 'sent' | 'accepted' | 'rejected'
          valid_until?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          budget_request_id?: string | null
          client_name?: string
          client_email?: string
          client_phone?: string | null
          project_title?: string
          project_description?: string
          scope?: string
          deliverables?: string
          timeline?: string | null
          total_value?: number
          payment_terms?: string | null
          notes?: string | null
          status?: 'draft' | 'sent' | 'accepted' | 'rejected'
          valid_until?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contracts: {
        Row: {
          id: string
          proposal_id: string | null
          contract_number: string
          client_name: string
          client_email: string
          client_cpf_cnpj: string | null
          project_title: string
          scope: string
          deliverables: string
          timeline: string | null
          total_value: number
          payment_terms: string | null
          start_date: string | null
          end_date: string | null
          terms_and_conditions: string | null
          status: 'active' | 'completed' | 'cancelled'
          signed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          proposal_id?: string | null
          contract_number: string
          client_name: string
          client_email: string
          client_cpf_cnpj?: string | null
          project_title: string
          scope: string
          deliverables: string
          timeline?: string | null
          total_value: number
          payment_terms?: string | null
          start_date?: string | null
          end_date?: string | null
          terms_and_conditions?: string | null
          status?: 'active' | 'completed' | 'cancelled'
          signed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          proposal_id?: string | null
          contract_number?: string
          client_name?: string
          client_email?: string
          client_cpf_cnpj?: string | null
          project_title?: string
          scope?: string
          deliverables?: string
          timeline?: string | null
          total_value?: number
          payment_terms?: string | null
          start_date?: string | null
          end_date?: string | null
          terms_and_conditions?: string | null
          status?: 'active' | 'completed' | 'cancelled'
          signed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      portfolio_images: {
        Row: {
          id: string
          project_id: string | null
          image_url: string
          alt_text: string | null
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          project_id?: string | null
          image_url: string
          alt_text?: string | null
          order_index?: number
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string | null
          image_url?: string
          alt_text?: string | null
          order_index?: number
          created_at?: string
        }
      }
    }
  }
}
