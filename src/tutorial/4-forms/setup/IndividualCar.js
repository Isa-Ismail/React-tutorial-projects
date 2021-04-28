import React, {useState,useEffect}from 'react'
import ShowRoom from './ShowRoom'
import Bids from './Bids'
import {BrowserRouter as Router, Route, Switch, Link,useParams } from 'react-router-dom'
function IndividualCar() {
    const [name, setName]=useState({})
    const {id}= useParams();
    console.log(useParams())
    useEffect(() => {
        const newCarList= ShowRoom.find(car=>car.model===id)
        setName(newCarList)
    },[])
    console.log(name)
    const {url, model, specification, price, rev}=name;
    return (<Router>
        
        <div style={{textAlign:'left', display:'flex'}}>
            <div>
            <h3>{model}</h3>
            <img src={url} alt={model} style={{height:'300px', widgt:'600px', borderRadius:'.4em'}}/><br></br><br></br>
            <h5>${price}</h5>
            </div>
            <div>
                <h5 style={{marginLeft:'4rem', marginTop:'4rem', color:'naviBlue'}}>{rev}</h5>
                <Link to='/Bids'>
                    <button className='btn' style={{marginLeft:'4rem',marginTop:'4rem', backgroundColor:'red'}}>
                    Place Bid
                    </button>
                </Link>
            </div>
            
        </div>
        
        <Route path='/Bids'>
            <Bids {...name}/>
        </Route >
        </Router>
    )
    
}

export default IndividualCar
