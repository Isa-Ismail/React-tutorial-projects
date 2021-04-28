import React, { useState, useEffect } from 'react';

const useEffectBasics=()=>{
  const [greet, setGreet]=useState('hey people')
  const [value, setValue]=useState(0)
  useEffect(()=>{
    console.log('useEffect')
    if(value>=2){
     setGreet(`you tapped ${value} times`)
    }
  })

console.log('render component')

return(
<>
<h2 className='ss'>{greet}</h2>
<h1>{value}</h1>
<button className='btn' onClick={()=>{
  setValue(e=>{ return e+1})
}}>increase</button>
</>
)
}

export default useEffectBasics;

