import React, {useState, useEffect} from 'react'

const list=[
    'My name is Fahim',
    'I am 22 years old',
    'I like developing software',
    'I am handsome and a lady killer', 
    'One of the girle got a crush on me',
    'I love Sanzida And she wanna have sex with me'
]
const Dice = () => {
    const i = (Math.floor(Math.random()*list.length))
    const [name, setName]= useState(list[i])
    const change = () =>{
        setTimeout(() => {
            setName(list[(Math.floor(Math.random()*list.length))])
        },2000)    
    }

     console.log(name)
     return(
        <div>
            <h3>{name}</h3>
            <button className='btn' onClick={change}>Hey</button>
        </div>
    )
}

export default Dice
