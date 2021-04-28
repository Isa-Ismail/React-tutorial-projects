import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers]=useState([])
  const userAsync= async ()=>
  {
    const people= await fetch(url)
    const newPeople=await people.json()
    setUsers(newPeople)
  }
  useEffect(()=>{
    userAsync();
  },[])

  return(
  <>
   <h1>Github Users</h1>
   <ul className="users">
   {
   users.map(user=>{
    
      const { id, login, avatar_url, html_url } = user;
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
      );
    
    }
    )
   }
   </ul>
</>
)
};

export default UseEffectFetchData;
