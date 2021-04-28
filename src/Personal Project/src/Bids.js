import React, {useState, useEffect} from 'react'
import LatestBids from './LatestBids'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export const Arr=[];


function Bids({url, model, specification, price, rev}) {
  const [flag, setFlag]= useState(false);
  const [person, setPerson] = useState({ firstName: '', email: '', age: ''});
  const [people, setPeople] = useState([]);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(email) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  return re.test(String(email).toLowerCase());
}

  const handleChange = (e) => {
    if(e.target.name==='age'){
      const name = e.target.name;
    const value = parseInt(e.target.value);
    setPerson({...person, [name]:value})
    }
    else{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]:value})
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(person.firstName) && validateEmail(person.email) && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString(), model, url, price };
      if(person.age>=price){
      Arr.push(newPerson);
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
      setFlag(true)
      console.log(Arr)
    }
    else{
      alert('please enter bid which is greater than the initial one')
    }
  }
    else{
      alert('give proper info or valid email')
    }
  };
  useEffect(() => {
    if(flag){
      setTimeout(()=>{
        setFlag(false)
      },3000)
    }
  })
    return (
      <>
        <Route path='/Bids'>
          
           <h2>
               The initial Bid is {price} $
           </h2>
           {flag&&<p style={{color:'red'}}>your response has been recorded. Thanks for your cooperation</p>}
           <form>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
              placeholder='Must conatain character and digits'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Money'>Bid ($): </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
            <Link to='/latestbids'>
              <button type='submit' className='btn' onClick={handleSubmit}>
                Submit
                </button>
                </Link>
        </form>
        </Route>
        <br></br><br></br>
        <br></br><br></br>
        </>
    )
}

export default Bids;
