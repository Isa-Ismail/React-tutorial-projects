import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [isError,setIsError]= useState(false);
  const [loading, setLoading]= useState(true);
  const [users, setUsers]=useState([])
  const userAsync= ()=>
  {
     fetch(url).
     then(response=>response.json()).
     
     then(data=>setUsers(data)).
     
     catch(error=>console.log(error))
     
     setLoading(false);
    // const newPeople=await people.json()
    // setUsers(e=>{return newPeople})
  }
  useEffect(()=>{
    setTimeout(()=>userAsync(), 2000);
  },[])
  if(loading){
    return <h2>Loading...</h2>
  }
  console.log(users);
  return(
  <>
   <h1>Github Users</h1>
   <div className="users">
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
   </div>
</>
)
};

export default UseEffectFetchData;
