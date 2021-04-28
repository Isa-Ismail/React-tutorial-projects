import React, { useState,useEffect } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

 const [text, setText] = useState('Happiest Birthday');
 useEffect(()=>{
console.log('hey')
  alert('hi')
},[text])
 const handler=()=>{
if(text==="Happiest Birthday"){
  setText('From Fahim')
}
else{
  setText('Happiest Birthday')
}
 }

  return (
    <React.Fragment>
   <h1>{text}</h1>
   <button className='btn' onClick={handler}>click here birthday boy/girl</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
