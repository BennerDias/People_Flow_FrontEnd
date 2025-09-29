"use client";
import React, { useEffect, useState } from "react";
import ColaboradorCard from "./ColaboradorCard";

type Colaborador = {
  id?: number;
  nome: string;
  funcao: string;
  salario: number;
  data_admissao: string;
  foto_url: string;
};

function ColaboradorList() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/cadastros")
      .then((response) => response.json())
      .then((data) => {
        setColaboradores(data);
      })
      .catch((error) => console.error("Erro ao buscar colaboradores: ", error));
  }, []);
  return (
    <div className='row'>
      {colaboradores.map((colaborador, index) => (
        <div className='col-12 col-md-6 col-lg-4' key={colaborador.id || index}>
          <ColaboradorCard
            nome={colaborador.nome}
            funcao={colaborador.funcao}
            salario={colaborador.salario}
            data_admissao={colaborador.data_admissao}
            foto_url={colaborador.foto_url}
          />
        </div>
      ))}
    </div>
  );
}

export default ColaboradorList;
