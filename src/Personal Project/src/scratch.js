import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
const MultipleInputs=()=>{
    const [person, setPerson]=useState({firstName:'', email:'', age:''})
    const [people, setPeople]= useState([])
    const [flag, setFlag]= useState(false);
    const [data, setData]= useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users').then(resp=>{
            if(resp.status>=200 && resp.status<=300){
                return resp.json();
            }
        }).then((data)=>{
        console.log(data);
        setTimeout(()=>{
            setData(dat=>{return data})
        },5000)})
        }, [])
    const Empty=()=>{
        return (
            people.map(e=>{
                const {id ,firstName, age, email}=e;
                return(<div className='users' key={id}>
                    <h3>{firstName}</h3>
                    <p>{email}</p>
                    <p>age :{age}</p>
                </div>)
            }
         )
        )
    }
    const Toggle=()=>{
        return(<>
         <h2 style={{marginTop:'2rem'}}>Here are the list of your entries</h2>
         {
         people.length!==0 ?<Empty/>:<h3 style={{marginTop:'2rem'}}>sorry you didnt enter any</h3>
            }
        </>
        )
    }
    const sumitHandler=(e)=>{
        e.preventDefault();
        if(person.firstName && person.age && person.email){
            const newPerson={...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName:'',email:'',age:''})
        }
    }
    const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setPerson((person)=>{ return {...person, [name]:value}})
    }
    console.log(data, person, people);

    return(
        <article>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='firstName'>user name :</label>
                    <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={person.firstName}
                    onChange={handleChange}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>email :</label>
                    <input 
                    type='text'
                    id='email'
                    name='email'
                    value={person.email}
                    onChange={handleChange}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='age'>age :</label>
                    <input 
                    type='text'
                    id='age'
                    name='age'
                    value={person.age}
                    onChange={handleChange}/>
                </div>
                <button color='primary' onClick={sumitHandler}>Submit asshole sanzida</button>
            </form>
            <button onClick={()=>setFlag(!flag)}>
                Toggle show/hide
            </button>
            {
                flag? <Toggle/>:<h3 style={{marginTop:'2rem'}}>click above button to show hide people</h3>
            }
        </article>

    )
}

export default MultipleInputs;