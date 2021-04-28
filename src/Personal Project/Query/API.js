import React, {useEffect , useState} from 'react'
import Navbar from './nav'
import {useFetch} from '../../tutorial/9-custom-hooks/final/2-useFetch'

const API = () => {
    const url='https://course-api.com/javascript-store-products'
    const [pix, setPix] = useState([])
    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setPix(products);
      };
      useEffect(() => {
        getProducts();
      }, []);
      
    console.log(pix)
    return (<>
    <Navbar pix={pix} setPix={setPix} />
    <h4>Welcome to e-store</h4>
        <div className="row" style = {{padding:'8rem'}}>
    {
               pix.map(e=>{
                   return(<div style = {{padding:'1rem'}}>
                   
                   <img style={{width:'360px', height:'220px'}} src={e.fields.image[0].url}  alt='' />
                   <h4 style={{padding:'1rem'}}>{e.fields.name}</h4>
                   <p>{e.fields.price} $</p>
                   </div>)
               })
           } 
        </div>    
    
        </>
    )
}

export default API

