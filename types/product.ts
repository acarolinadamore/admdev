export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  indicatedFor: string;
  image: string;
  price: number;
  promoPrice?: number;
  category: 'empresarial' | 'landing' | 'loja' | 'gestao' | 'crm' | 'personalizado';
  features: string[];
  pages?: string;
  extras?: string[];
  isWordPress?: boolean;
  techStack?: string[];
}
