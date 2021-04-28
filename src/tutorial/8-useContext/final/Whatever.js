import React, { useState, useContext } from 'react';
import PersonContext from './1-context-api'
const List = () => {
    const mainData = useContext(PersonContext);
    console.log(mainData);
    return (
      <>
        {mainData.people.map((person) => {
          return <SinglePerson key={person.id} {...person} />;
        })}
      </>
    );
  };
  
  const SinglePerson = ({ id, name }) => {
    const lol = useContext(PersonContext);
  
    return (
      <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => lol.removePerson(id)}>remove</button>
      </div>
    );
  };
  export default List;