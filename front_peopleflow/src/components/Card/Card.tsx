import React from "react";
import styles from "./Card.module.css";
import { Colaborador } from "../../types/colaborador";
import colaboradorService from "../../services/colaborador.service";

type CardProps = {
  colaborador: Colaborador;
  onDeleted?: () => void;
};
function Card({ colaborador }: CardProps) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Excluir ${colaborador.nome}?`);
    if (!confirmDelete) return;

    try {
      await colaboradorService.remove(colaborador.id);
      alert("Colaborador excluído com sucesso!");
      onDeleted?.();
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir colaborador.");
    }
  };
  return (
    <div>
      <div className={styles.card}>
        <img
          src={colaborador.foto_url || "https://via.placeholder.com/150"}
          alt={colaborador.nome}
        />
        <div className={styles.description}>
          <h2>{colaborador.nome}</h2>
          <p>{colaborador.funcao}</p>
          <p>Salário: R$ {colaborador.salario}</p>
          <p>Admissão: DEU BO</p>
          <div className={styles.buttons}>
            <button
              type='button'
              class='rounded-md border-2 border-emerald-500 bg-emerald-400 hover:bg-emerald-500 px-3 py-1 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-600'
            >
              Editar
            </button>
            <button
              type='button'
              class='rounded-md border-2 border-rose-500 bg-rose-400 hover:bg-rose-500 px-3 py-1 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600'
              onClick={handleDelete}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
function onDeleted() {
  throw new Error("Function not implemented.");
}
