import React from "react";
import Card from "../ui/Card";

type ColaboradorCardProps = {
  nome: string;
  funcao: string;
  salario: string | number;
  data_admissao: string;
  foto_url: string;
};

function ColaboradorCard({
  nome,
  funcao,
  salario,
  data_admissao,
  foto_url
}: //funções para chamar os botões vem aqui também. precisam ser declaradas
ColaboradorCardProps) {
  return (
    <Card >
      <div  className='card mb-3 ' >
        <div className='row g-0' >
          <div className=''>
            <img 
              src={foto_url}
              className='img-fluid rounded-start'
              alt={nome}
            />
          </div> 
          <div >
            <div className='card-body'>
              <h5 className='card-title'>{nome}</h5>
              <p className='card-text'>{funcao}</p>
              <p className='card-text'>Salário: R$ {salario}</p>
              <p className='card-text'>
                <small className='text-body-secondary'>
                  Data de Admissão: {data_admissao}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ColaboradorCard;
