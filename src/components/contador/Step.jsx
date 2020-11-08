import React from 'react'

export default  (props) => 
{
   return (
       <div>
          <label htmlFor="inputContador">Passo </label>
          <input type="number" id="inputContador" value={props.step} onChange={e=> props.onStepChange(+e.target.value)}/>
       </div>
   );
};