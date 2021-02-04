import React from 'react';
import { useSelector } from 'react-redux'

interface Store {
  carrinho: number
}

const Carrinho  = () => {

  const valorCompra = useSelector((state: Store) => state.carrinho)

  return (
    <p>Valor total: R$ {valorCompra}</p>
  );

}

export default Carrinho;