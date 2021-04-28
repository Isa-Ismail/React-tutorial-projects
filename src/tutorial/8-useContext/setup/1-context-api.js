import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import {Button} from 'reactstrap'

// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people , setPeople]= useState(data)
  const remove=(id)=>{
    setPeople(per=>{
      return per.filter(p=>p.id!== id)
    })
  }
  return (
    <PersonContext.Provider value={{ remove, people }}>
      <List />
    </PersonContext.Provider>
  );
};
const List=()=>{
  const main= useContext(PersonContext)
  return(<>
  {main.people.map(e=>{
    return(
      <Rtr key={e.id} id={e.id} name={e.name}/>
    )
  })}
  </>)
}
const Rtr=({id ,name})=>{
const lo=useContext(PersonContext)
return(<div className='item'style={{backgroundColor:'wheat'}}>
  <h3>{name}</h3>
  <p>age :{id}</p>
  <Button outline color="danger" onClick={()=>lo.remove(id)} style={{marginBottom:"2rem"}}>danger</Button>
</div>)
}

export default ContextAPI;
