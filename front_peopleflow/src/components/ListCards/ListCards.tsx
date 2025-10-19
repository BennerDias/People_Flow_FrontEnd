"use client";
import React from "react";
import Card from "../Card/Card";
import { useColaboradores } from "../../hooks/useColaboradores";
import styles from "./ListCards.module.css";

function ListCards() {
  const { colaboradores, isLoading, error, mutate } = useColaboradores({});

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os colaboradores 😒</p>;

  return (
    <div className={styles.content}>
      <div className={styles.buttonDiv}>
        <button
          type='button'
          class='rounded-md border-2 border-sky-500 bg-sky-400 hover:bg-sky-500 px-5 py-2 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600'
        >
          Novo Colaborador
        </button>
      </div>
      <div className={styles.contentListCards}>
        {colaboradores?.map((colaborador) => (
          <Card
            key={colaborador.id}
            colaborador={colaborador}
            onDeleted={mutate}
          />
        ))}
      </div>
    </div>
  );
}

export default ListCards;
