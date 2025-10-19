// services/colaborador.service.ts
import api from "./apiClient";
import { ColaboradorApi, Colaborador, Paginated } from "../types/colaborador";

function parseColaborador(a: ColaboradorApi): Colaborador {
  return {
    ...a,
    data_admissao: new Date(a.data_admissao)
  };
}

const colaboradorService = {
  async getAll(page = 1, limit = 20): Promise<Paginated<Colaborador>> {
    const { data } = await api.get(`/cadastros?page=${page}&limit=${limit}`);

    // se o backend retornar um array simples
    const items = Array.isArray(data)
      ? data.map(parseColaborador)
      : (data.items ?? []).map(parseColaborador);

    return {
      items,
      total: Array.isArray(data)
        ? data.length
        : data.total ?? data.items?.length ?? 0,
      page: data.page ?? 1,
      limit: data.limit ?? limit
    };
  },

  async getById(id: number): Promise<Colaborador> {
    const { data } = await api.get(`/cadastros/${id}`);
    return parseColaborador(data as ColaboradorApi);
  },

  async getByName(name: string): Promise<Colaborador> {
    const { data } = await api.get(`/cadastros/nome/${name}`);
    return data;
  },

  async create(payload: Partial<ColaboradorApi>): Promise<Colaborador> {
    const { data } = await api.post("/cadastros", payload);
    return parseColaborador(data as ColaboradorApi);
  },

  async update(
    id: number,
    payload: Partial<ColaboradorApi>
  ): Promise<Colaborador> {
    const { data } = await api.put(`/cadastros/${id}`, payload);
    return parseColaborador(data as ColaboradorApi);
  },

  async remove(id: number): Promise<void> {
    await api.delete(`/cadastros/${id}`);
  }
};

export default colaboradorService;
