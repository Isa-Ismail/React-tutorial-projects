import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
const ControlledInputs = () => {  
const [firstName, setFirstName]= useState('');
const [email , setEmail]= useState('');
const [people, setPeople]= useState([])
const [age, setAge]=useState(0)
const [flag, setFlag]= useState(false);
const submitHandler=(e)=>{ 
  e.preventDefault();//it prevents the default onClick/onSubmit actions/behaviors for any buttons inside the forms.
  if(firstName && email && age){
    const person= {id:new Date().getTime().toString(), firstName:firstName, email:email, age:age};
    setPeople((people)=>
    {
      return [...people, person]
    })
    setFirstName('');
    setEmail('');
    setAge('')
    console.log(firstName +" "+ email+" "+age); 
    console.log(person)
    console.log(typeof age)
}
else{
  alert(`empty inputs lol`)
}
}

useEffect(() => {
  // console.log(people);
  // console.log(firstName +" "+ email)
})
return <>
  <article>
    <h1>form action</h1><br/>
  <form className='form' onSubmit={submitHandler}>
    <div className='form-control'>
      <label htmlFor='firstName'>name:</label>
      <input 
      type='text'  
      id="firstName" 
      name='firstName' 
      value={firstName} 
      onChange={(e)=>setFirstName(e.target.value)}
      />
    </div>
    <div className='form-control'>
      <label htmlFor='email'>email:</label>
      <input 
      type='email'
      id="email"
      name='email' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className='form-control'>
      <label htmlFor='age'>age:</label>
      <input 
      type='number'
      id="age"
      name="age" 
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
    </div>
    <button type="submit">enter person</button>
  </form>
  <button className='btn' onClick={()=>{
    setFlag(!flag);
  }}>Show/hide people</button><br></br>
   {flag ? people.map(e=>{
           const {firstName, email, id, age}=e;
           return(
             <div className='item' key={id}>
             <h4>{firstName}</h4>
             <p>{email}</p>
             <h5>{age}</h5>
             </div>
      
      )})
    : <h3 style={{marginTop:'2rem'}}>click above to display entries</h3>
    }
  </article>
  </>;
};

export default ControlledInputs;
