import React,{useState} from 'react'

export default (props) => {
    const [numbers,setNumbers] = useState(Array(props.qtdNumbers).fill(0))

     function gerarNumerosNaoContidos(array)
     {
         const min =1;
         const max = 60;
         const newNumber = parseInt(Math.random() * (max - min)) + min;

         return array.includes(newNumber)?gerarNumerosNaoContidos(array):newNumber;
     }

    function gerarNumeros() {
        // const newArray = Array(props.qtdNumbers)
        // .fill(0)
        // .reduce((a=>[...a,gerarNumerosNaoContidos(a)],[])
        // .sort((a,b) => a - b);
        const newArray = Array(props.qtdNumbers)
        .fill(0)    
         .reduce((a,e)=> {
            const newNumber = gerarNumerosNaoContidos(a);
            // console.log(a,e,newNumber);
            return [...a,newNumber]
         },[])
         .sort((a,b) => a - b);
       setNumbers(newArray);
    }

    return(
        <>
        <h3>Mega</h3>
    <h4>{numbers.join(' ')}</h4>
    <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}
