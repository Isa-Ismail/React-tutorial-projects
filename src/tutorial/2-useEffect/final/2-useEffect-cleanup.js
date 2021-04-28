import React, { useState, useEffect } from 'react';
// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [title, setTitle]= useState(0)
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  const hola=()=>{
    setTimeout(()=>{
      setTitle((e)=>{return e+1})
   },2000)
  }

  useEffect(() => {
  
    alert("l")

    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  },[]);
  console.log('render');
  return (
    <>
      <button className="btn" onClick={hola}>ad</button>
      <h1>{title}</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
