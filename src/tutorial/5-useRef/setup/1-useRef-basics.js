import React, { useRef, useEffect } from 'react';
const useRefBasics=()=>{
const user= useRef(null);
useEffect(()=>{
user.current.focus()
console.log(user.current)
})
return(<>
<form className="form">
<input type='text' ref={user}/>
<button className="btn" onClick={(e)=>{
e.preventDefault()
console.log(user.current.value)
}}></button>
</form>
</>)
}
export default useRefBasics
