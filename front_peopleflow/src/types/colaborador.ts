export interface ColaboradorApi {
  id: number;
  nome: string;
  funcao: string;
  salario: number;
  data_admissao: string;
  foto_url: string;
}
export interface Colaborador {
  id: number;
  nome: string;
  funcao: string;
  salario: number;
  data_admissao: Date;
  foto_url: string;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}
