import React, {useState} from 'react'
import { FormControl, Input, FormHelperText, InputLabel } from '@material-ui/core';
export const Form=()=>{
const [person, setPerson]=useState({name:'', email:'', password:''})
const [people, setPeople] = useState([])
const handleChange=(e)=>{
const name=e.target.name
const value=e.target.value
setPerson({...person, [name]:value})
}
const submitHandler=(e)=>{
  e.preventDefault();
if(person.name && person.email && person.password){
 const newPerson={...person,id: new Date().getTime.toString()}
 setPeople([...people, newPerson])
 setPerson({name:'', email:'', password:''})
 alert('success')
}
else{
  alert('more info required')
}
}
return(
<form className='container' style={{backgroundColor:'wheat', width:'450px', padding:'.5rem', marginTop:'3rem', borderRadius:'.4rem'}} onSubmit={submitHandler}>
<h2 style={{color:'black'}}>Sign Up</h2>
<FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" name='name' aria-describedby="my-helper-text" value={person.name} onChange={handleChange}/>
  <FormHelperText id="my-helper-text"></FormHelperText>
</FormControl><br></br>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" name='email'value={person.email} onChange={handleChange}/>
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl><br></br>
<FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" type='password' name='password' value={person.password} onChange={handleChange}/>
  <FormHelperText id="my-helper-text">We suggest to insert strong Password.</FormHelperText>
</FormControl><br></br>
<button type='submit' className='btn'>Submit</button>
</form>)
}
