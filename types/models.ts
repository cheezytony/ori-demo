interface Model {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface Company extends Model {
  name: string;
  description?: string;
  industry?: string;
}

export interface CompanyProvider extends Model {
  company_id: number;
  provider: string;
  status: 'active' | 'inactive';
  is_default: boolean;
  api_key: string;
  domain: string;
  access_token: string;
  refresh_token: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
}

export interface Faq extends Model {
  company_id: Company['id'];
  question: string;
  answer: string;
}

export interface Provider extends Partial<Model> {
  logo?: string;
  name: string;
  slug: string;
  description: string;
  industry?: string;
  status?: string;
  type?: string;
}

export interface User extends Model {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  role: string;
  company: Company;
}
