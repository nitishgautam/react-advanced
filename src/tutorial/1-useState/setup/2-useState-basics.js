import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random title');

  const handler = () => {
    if(text === 'random title'){
      setText('hello nitish');
    } 
    else {
      setText('random title')
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handler}>
        change title
      </button>
    </React.Fragment>
  )

};

export default UseStateBasics;
