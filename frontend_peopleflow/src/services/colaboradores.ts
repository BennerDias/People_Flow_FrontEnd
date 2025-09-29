import { Colaborador } from "../types/Colaborador";
import { api } from "./api";

export const ColaboradoresService = {
  getAll: async (): Promise<Colaborador[]> => {
    const { data } = await api.get<Colaborador[]>("/colaboradores");
    return data;
  },

  getById: async(id:number) => {
    const { data } = await api.get<Colaborador>('/colaboradores', payload)
    return data
  },
};
