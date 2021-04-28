import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading]= useState(false);
  const [isError, setIsError]= useState(false);
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    setLoading(true);
  fetch(url).then((res)=>{
    console.log(res);
    return res.json()
    }).then((users)=>{
    console.log(users);
    const {company}= users;
    console.log(company)
    setUsers(company);
    setTimeout(()=>{ return setLoading(false)}, 2000);
  }).catch(error=>console.log(error))
},[])
// console.log(loading)
// console.log(users)

  if(loading){
  return <h2>loading...</h2>;
  }
  else if(isError){
    return<h1>error</h1>
  }
  else{
  return(<div>
  <h1>{users}</h1>
  </div>
  )}
};

export default MultipleReturns;
