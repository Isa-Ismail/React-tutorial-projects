import React, { useState } from 'react';

const UseStateCounter = () => {
const [counter,setCounter]=useState(0)

const complexD=()=>setTimeout(() => {
  setCounter((prevState)=>{return prevState-1})
}, 2000);

  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>
      complex counter
    </h2>
    <h1>
{counter}
    </h1>
    <button className='btn' onClick={()=>
setTimeout(() => {
  setCounter(function (prev) { return prev+1})
}, 2000)
}>complex increase</button>
    <button className='btn' onClick={()=>setCounter(0)}>reset</button>   
    <button className='btn' onClick={complexD}>complex decrease</button>  <br></br>
    <input type='text' placeholder='enter your birth year' className='input'></input>
  </section>
            
  
  
  
  </>;
};

export default UseStateCounter;
