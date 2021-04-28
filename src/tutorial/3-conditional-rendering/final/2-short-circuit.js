import React, { useState, useEffect } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [arr,setArr]= useState([12344,323,12,3,24,12,23123])
useEffect(() => {
  setArr(arr.sort((a,b)=>a-b))
  return () => {
    
  }
})
  return (
    <>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={()=>{
        setIsError(!isError)
        }}>toggle error</button> 
      
      {
      arr.sort((a,b)=>a-b).map(e=>{
        return <h1>
        {e}
        </h1>
      })
      }
      {
        isError ? <h2>there is a big fat error</h2>:
        <article>
          <h2>there is no big fat error .. lol</h2>
        </article> 
      }
    </>
  );
};

export default ShortCircuit;
