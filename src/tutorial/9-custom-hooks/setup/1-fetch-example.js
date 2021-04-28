import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const [loading , setLoading]= useState(true)
  const [data, setData]= useState([])
  const fecthData= async()=>{
    const response= await fetch(url)
    const people= await response.json()
    setData(people)
    setLoading(false)
    
  }
  console.log(data)
  useEffect(() => {
    fecthData()
  }, [url])
  return(<div>
    {loading? <h1>loading</h1>:<h1>data
      </h1>}
  </div>)
}

export default Example
