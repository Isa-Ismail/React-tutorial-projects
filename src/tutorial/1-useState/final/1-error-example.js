import React, {useState, useEffect} from 'react';
import {css} from 'emotion'
const ErrorExample = () => {
const list=[
  {id:1, title:"X"},{id:1, title:"X"},{id:1, title:"0"},{id:1, title:"0"},{id:1, title:"X"},{id:1, title:"0"},{id:1, title:"0"},{id:1, title:"X"},{id:1, title:"X"}
]
const [mark, setMark]=useState(list)
const a=[], b=[]
let c=true
const solution=[[1,5,9],[1,4,7],[1,2,3],[3,4,5],[6,7,8],[3,5,7],[2,5,8],[3,6,9]]

 console.log(a)
  return (
    <>
      <h1>this is a tic tac toe game</h1>
  <h2>no</h2>
      
        
         <section className="bts">
           {
             mark.map(e=>{
              const {id, title}=e; 
              return(
                 <div className='board' key={id}>
                

                 </div>
               
             )})
              }
            
           
         </section>
      


    </>)
};

export default ErrorExample;
