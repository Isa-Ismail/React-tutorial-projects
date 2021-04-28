import React from 'react'
import {List} from './search'
import Card from './cards'
import {useParams} from 'react-router-dom'
const QueryCar = ({setCart, setItem, item}) => {
    const {name}= useParams() 
    const [cars, setCars]=React.useState([])
    React.useEffect(()=>{
        
        setCars(List)
    })
    return (<div>
            {
                cars.map(e=>{
                    return(
                        <Card {...e} setCart={setCart}  setCart={setCart} setItem={setItem} item={item} />
                    )
                })
            }
        </div>
    )
}

export default QueryCar;
