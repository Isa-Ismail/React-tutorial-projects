import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [congo,setCongo]=useState('')
  const a=[1,2,3,4,5,6]
  let random=Math.floor(Math.random()*a.length)
const [ dice, setDice ] =useState(a[random])
const roll=()=>{
  const b=[1,2,3,4,5,6]
  let ra=Math.floor(Math.random()*a.length)
  setDice(b[ra])


}
const rtr=()=>{
  if(dice===6){
    setCongo('Congratulations')
  }
  else{
    setCongo('you are a loser you know that, I told you to click if its 6 LOSER boy')
  }
}
return(
  <>
  <div style={{borderColor:"black", border:"solid",}}><button className="btn" onClick={roll}>roll it</button> <h1 style={{padding:"2em",}}>{dice}</h1><button className="btn" onClick={rtr}>If You did hit a 6 click here boy</button><h3 style={{backgroundColor:"red",padding:".5rem"}}>{congo}</h3></div>
 
   <h2>Its a dice </h2>
  </>
  )
}


export default UseEffectBasics;
