import React,{useEffect, useState} from 'react'

function Time() {
const [sec, setSec]=useState(0);
const [min, setMin]=useState(0);
const [hr, setHr]=useState(0);
const [str, setStr]=useState(false)
const [start,setStart]= useState('Start')
useEffect(()=>{
if(str){
    if(sec<60){
    setTimeout(()=>{setSec((sec)=> {return sec+1})},1000)
    }
    else{
        setSec(0)
        if(min<60)
        {setMin(min=>{return min+1})}
    }
    if(min===60){
        setMin(0)
        setHr(hr=>{return hr+1})
    }
}
})    
return (<>
        <div style={{display:'flex',marginTop:'3rem', backgroundColor:'black', padding:'3rem'}}>
         <h3 style={{color:'white',marginLeft:'30rem',textAlign:'center',}}>{hr} hour: </h3> 
         <h3 style={{color:'green',textAlign:'center'}}>{min} min: </h3>
         <h3 style={{color:'reds',textAlign:'center'}}>{sec} sec</h3>  
        </div>
        <button className='btn' onClick={()=>{
            if(str){
                setStr(false)
                setStart('Start')
            }
            else{
                setStr(true)
                setStart('Stop')
            }
        }}>{start}</button>
        
    </>)
}

export default Time;
