import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'Nitsh', 
    age:24, 
    message:'hello',
    // we can setup mutiple state values as well instead of giant on object
  });
  
  const changeMessage =  () => {
    return setPerson({...person, message:'hiya'})
  }

  return( 
   <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>  Change </button>
   </>
  );
};

export default UseStateObject;
