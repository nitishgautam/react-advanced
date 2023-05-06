import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexInc =  () => {
    setTimeout( () => {
      // setValue(value + 1);
      setValue((prev) => {
        return prev + 1;
      }); 
    }, 2000);
  };

  return(
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={ () => setValue(value-1)}>-</button>
        <button className='btn' onClick={ () => setValue(0)}>Reset</button>
        <button className='btn' onClick={ ()=> setValue(value+1)}>+</button>
      </section>

      <section style={{margin:'4rem 0'}}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={complexInc}>+ Later</button>
        
      </section>
    </>
  );
};

export default UseStateCounter;
