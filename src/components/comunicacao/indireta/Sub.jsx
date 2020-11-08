import React from 'react'

export default props =>{

    function acao(){
        props.onMeuEvento(Math.random(),'Gerado');
    }
    return (
    <div>
        <button onClick={acao}>Alterar</button>
    </div>
    );
    };