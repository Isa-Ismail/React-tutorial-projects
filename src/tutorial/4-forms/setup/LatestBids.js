import { formatCountdown } from 'antd/lib/statistic/utils'
import React from 'react'
import {Arr} from './Bids'
const LatestBids = () => {
    console.log(Arr)
    return (<div>
            {Arr.length>0?<h2>List of bids people placed so far</h2>:<h2>Please Start bidding</h2>}<br></br><br></br>

            {
            (Arr.map(list=>{
                const {firstName, id, email, age, url, model}=list
                return(<div  key={id} style={{textAlign:'left', marginTop:'3rem', display:'grid', gridTemplateColumns: 'repeat (3 ,1fr)'}}>
                    <div>
                    <h5 style={{color:'maroon'}}>Bidder's name: {firstName}</h5>
                    <h5 style={{color:'maroon'}}>Price bidden: $ {age}</h5>
                    </div>
                    <div>
                    <img src={url} alt='model' style={{width: '350px',height: '190px', borderRadius:'.4rem'}}/>
                    <p style={{color:'crimson'}}>model: {model}</p>
                    </div>
                    
                </div>)
            }))
        }
        </div>
    )
    
}

export default LatestBids
