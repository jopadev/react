import React, {useState} from 'react'
import Sub from './Sub'

export default props =>
{
    const [texto,setTexto] = useState("Valor")
    const [num,setNum] = useState(0)

    function quandoClicar(valorGerado,textoFornecido)
    {
        setTexto(textoFornecido)
        setNum(valorGerado)
    }
    return (
        <div>
            <h4>{texto} : {num}</h4>
            <Sub onMeuEvento={quandoClicar}></Sub>
        </div>
    );
};