import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Botões = () => {
    const disp = useDispatch(   )
    return(
        <div>
            <h2>Preço: R$ 200,00</h2>
            <button onClick={() => disp({ type: 'ADICIONAR_UNIDADE'})}> Adicionar produto</button>
            <button onClick={() => disp({ type: 'REMOVER_UNIDADE' })}> Remover um produto </button>
        </div>
    )

}
export default Botões;