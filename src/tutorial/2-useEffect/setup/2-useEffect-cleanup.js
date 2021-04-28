import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize]=useState(window.innerWidth);
  const [txt, setTxt] =useState("stretch your device window")
  useEffect(()=>{
    alert("effect")
    if(size<=680 || size>=780){
      setTxt("thats too big or small")
    
    }
    else{
      setTxt("thats all right")
    }
    const setS=()=>{
      setSize(window.innerWidth)
    }
    window.addEventListener("resize",setS)
    return ()=>{(
      window.removeEventListener("resize",setS)
    )}
  
  },[])

  return(<>
    <button className="btn" onMouseOver={()=>{
      setSize(window.innerWidth)
      if(txt==="whatever"){
      setTxt("sdasas")}
      else{
        setTxt('whatever')
      }
      }}>{txt}</button>
    <h1>keep your screen width in between 680 to 780, weird kiddo</h1>
    <h2 style={{marginTop:"5em", backgroundColor:"green", padding:"1rem", borderRadius:"1rem"}}>{txt}</h2>
    <h4> {size} PX</h4>
  </>) 
};

export default UseEffectCleanup;
