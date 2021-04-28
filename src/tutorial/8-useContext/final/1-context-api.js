import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import List from './Whatever'
// more components
// fix - context api, redux (for more complex cases)
export const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

// const List = () => {
//   const mainData = useContext(PersonContext);
//   console.log(mainData);
//   return (
//     <>
//       {mainData.people.map((person) => {
//         return <SinglePerson key={person.id} {...person} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const lol = useContext(PersonContext);

//   return (
//     <div className='item'>
//       <h4>{name}</h4>
//       <button onClick={() => lol.removePerson(id)}>remove</button>
//     </div>
//   );
// };

export default ContextAPI;
