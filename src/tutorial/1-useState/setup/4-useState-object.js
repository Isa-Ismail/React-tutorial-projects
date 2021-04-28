import React, { useState } from 'react';

const UseStateObject = () => {

 const [people,setPeople]=React.useState({name:'peter',age:24,message:'hola Amigo'})
// const [name,setName]=useState('peter')
// const [age,setAge]=useState(24)
// const [message,setMessage]=useState('hola amigo')

return(
<>
<h2>{people.name}</h2>
<h2>{people.age}</h2>
<h2>{people.message}</h2>

<button className='btn' onClick={()=>{
    
    if (people.message==='hola amigo'){
    setPeople({...people, message:'fuck u'})
    }
    else{
        setPeople({...people, message:'hola amigo'})
    }
    }
    }>click here boy</button>
    
</>
)
};

export default UseStateObject;
