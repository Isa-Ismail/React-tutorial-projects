import React, { useState, useEffect } from 'react';


const TicTac=()=>{
    const [section, setSection]= useState({name1:"",name2:"",name3:"",name4:"",name5:"",name6:"",name7:"",name8:"",name9:""})
    const [flag,setFlag]= useState(true)
    const solution=[[1,2,3],[1,5,9],[1,4,7],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]]
    let [player1, setPlayer1]=useState([])
    let [player2, setPlayer2]=useState([])
    const [winner, setWinner]= useState('')
    const [tie, setTie]= useState('')
    const [f,setf]= useState(false)
    const [turn , setTurn]= useState(false)
    
    let c=0;
    let d=0;
    let check =player1.length===5 && player2.length==4;
    let check2=check && c<3
    let check3=check2 && d<3;
    const Result=()=>{
        for(let i=0; i<solution.length; i++){
            c=0; d=0;
            solution[i].map(e=>{
                if(player1.indexOf(e)>=0){
                    c++; 
                }
                else if(player2.indexOf(e)>=0){
                    d++;
                }})
               
                 if(c===3){
                    setWinner('X wins loL')
                    alert('X wins XD')
                    break;
                }
                else if(d===3){
                    setWinner('O wins loL')
                    alert('O wins XD')
                    break;
                }
            }
        return(<h4>{winner}</h4>)
    }
    return(
        <>
        <h3>TicTacToe React.js trial (conditional rendering) by Isa Mohammad Ismail (demo react project).</h3>
        { check3 ?alert('tie'): <Result/>  }
        <button className='btn' onClick={()=>{setSection({name1:"",name2:"",name3:"",name4:"",name5:"",name6:"",name7:"",name8:"",name9:""})
    setPlayer1([]);setPlayer2([]);
    }}>refresh</button>
        
        <article style = {{backgrounColor:'black'}}>
            <div  onClick={()=>{
                if(flag){
                    setSection({...section, name1:'X'})
                  player1.push(1);
                  setFlag(!flag)
                }
                else if(!flag){
                    setSection({...section, name1:"O"})
                    player2.push(1);
                    setFlag(!flag)
                   
                    return player2
                }
        
            }} >
                <h1>{section.name1}</h1>
            </div>
            <div onClick={()=>{
                if(flag){
                    setSection({...section,name2:'X'})
                    player1.push(2)
                    setFlag(!flag)
                    
                    return player1
                   
                }
                else if(!flag){
                    setSection({...section, name2:"O"})
                    player2.push(2)
                    setFlag(!flag)
                    
                    return player2
                }
              
            }}>
                <h1>{section.name2}</h1>
            </div>
            <div onClick={()=>{
               if(flag){
                    setSection({...section, name3:"X"})
                player1.push(3)
                setFlag(!flag)
               
                return player1
            }
            else if(!flag){
                setSection({...section, name3:"O"})
                player2.push(3)
                setFlag(!flag)
               
                return player2
            }
            }}>
                <h1>{section.name3}</h1>
            </div>
            <div onClick={()=>{
                if(flag){
                    
                    setSection({...section, name4:"X"})
                    player1.push(4)
                setFlag(!flag)
               
                return player1;
                   
                }
                else if(!flag){
                    setSection({...section, name4:"O"})
                    player2.push(4)
                setFlag(!flag)
               
                return player2
                }
               
            }}>
                <h1>{section.name4}</h1>
            </div>
            <div onClick={()=>{
                if(flag){
                    
                    setSection({...section, name5:"X"})
                    player1.push(5)
                    setFlag(!flag)
                   
                    return player1
                   
                }
                else if(!flag){
                    setSection({...section, name5:"O"})
                    player2.push(5)
                setFlag(!flag)
               
                return player2
                }
               
            }}>
                <h1>{section.name5}</h1>
            </div>
            <div onClick={()=>{
                if(flag){
                    
                    setSection({...section, name6:"X"})
                    player1.push(6)
                setFlag(!flag)
               
                return player1
                   
                }
                else if(!flag){
                    setSection({...section, name6:"O"})
                    player2.push(6)
                    setFlag(!flag)
                   
                    return player2
                }
                
            }}>
                <h1>{section.name6}</h1>
            </div>
            <div onClick={()=>{
              if(flag){
                    
                setSection({...section, name7:"X"})
                player1.push(7)
                setFlag(!flag)
               
                return player1
            }
            else if(!flag){
                setSection({...section, name7:"O"})
                player2.push(7)
                setFlag(!flag)
               
                return player2
            }
                
            }}>
                <h1>{section.name7}</h1>
            </div>
            <div onClick={()=>{
                if(flag){
                    
                    setSection({...section, name8:"X"})
                    player1.push(8)
                setFlag(!flag)
               
                return player1
                   
                }
                else if(!flag){
                    setSection({...section, name8:"O"})
                    player2.push(8)
                    setFlag(!flag)
                   
                    return player2
                }
             
            }}>
                <h1>{section.name8}</h1>
            </div>
            <div onClick={()=>{
              if(flag){
                    
                setSection({...section, name9:"X"})
                player1.push(9)
                setFlag(!flag)
                console.log(player1, player2)
                return player1
               
            }
            else if(!flag){
                setSection({...section, name9:"O"})
                player2.push(9)
                setFlag(!flag)
               console.log(player1, player2)
                return player2
            }
               
            }}>
                <h1>{section.name9}</h1>
            </div>
            {console.log(player1, player2, player1.length, player2.length, check)}
        </article>
        </>
      
    )
    }

export default TicTac;