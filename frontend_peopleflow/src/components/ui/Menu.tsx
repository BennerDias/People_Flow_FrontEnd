import React from "react";
import Buttons from "./Buttons";

function Menu() {
  return (
    <div display='flex' flexdirection='row'>
      <h1 className='text-2xl font-bold mb-4'>People Flow</h1>
      <Buttons variant='save'>Adicionar Funcionário</Buttons>
    </div>
  );
}

export default Menu;
