// hooks/useColaboradores.ts
"use client";
import useSWR from "swr";
import colaboradorService from "../services/colaborador.service";
import { Colaborador, Paginated } from "../types/colaborador";

type UseColaboradoresOpts = {
  page?: number;
  limit?: number;
  enabled?: boolean;
  search?: string;
};

export function useColaboradores({
  page = 1,
  limit = 20,
  enabled = true,
  search
}: UseColaboradoresOpts) {
  // Chave com paginação / busca: permite cache separado por params
  const key = enabled
    ? `/colaboradores?page=${page}&limit=${limit}&search=${search ?? ""}`
    : null;

  const fetcher = async () => {
    // Se sua API aceita search: ?q=...
    const res = await colaboradorService.getAll(page, limit);
    // res é Paginated<Colaborador>
    return res;
  };

  const { data, error, isLoading, mutate } = useSWR<
    Paginated<Colaborador> | undefined
  >(key, fetcher);

  return {
    colaboradores: data?.items,
    total: data?.total ?? 0,
    page: data?.page ?? page,
    limit: data?.limit ?? limit,
    isLoading,
    error,
    mutate // importante para revalidar / atualizar lista após criar/editar/excluir
  };
}
