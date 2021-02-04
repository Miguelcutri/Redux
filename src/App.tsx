import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import { createStore} from 'redux'
import Botões from './Botões'
import Carrinho from './ValorCompra';

interface IntStore{
  carrinho: number
}

const EstadoInicial: IntStore ={
  carrinho: 0
}

function reducer (estado = EstadoInicial, acao: any){
  switch(acao.type){
    case 'ADICIONAR_UNIDADE':
      return{
        carrinho: estado.carrinho + 200.00
      }
    case 'REMOVER_UNIDADE':
      return{
        carrinho: estado.carrinho - 200.00
      }
      default: return estado
  }
}
const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Carrinho/>
        <Botões/>
      </Provider>
    </div>
  );
}

export default App;
