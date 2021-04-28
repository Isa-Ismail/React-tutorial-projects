import React from 'react'
import {useFetch} from '../../9-custom-hooks/final/2-useFetch'
const Fetch = () => {
    const {products}=useFetch('https://jsonplaceholder.typicode.com/todos')
    console.log(products)

    return (
        <div>
            {
                products.filter(e=>e.completed===false).map(pic=>{
                    const {title}=pic

                    return(<>
                    <p style={{color:'orange'}}>{title}</p>
                    </>)
                })
            }
        </div>
    )
}
export default Fetch
