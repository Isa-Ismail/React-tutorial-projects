import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people,setPeople] = React.useState(data);
const remove=(d)=>{
let newp = people.filter(e=>e.id!==d)
  setPeople(newp)
}
let bol='remove boy'
const[a,b]=React.useState(bol)



  return (
  <React.Fragment>
  
{
people.map(e=>{
const {id, name}=e;
return(
  <div key={id} className='item'>
<h4>{name}</h4>
<button className='btn' onClick={()=>remove(id)}>
  remove item
</button>
  </div>
)

})

}
  <button className='btn' onClick={()=>{
    if(people===data){  
    setPeople([])
   }
    else{
      setPeople(data)
    } 
  if(a==='remove boy'){
  b('add boy')
  }
  else{
    b('remove boy')
  }

  
  }
   
  

   }
  >{a} </button>
  </React.Fragment>
  );
};

export default UseStateArray;
