import React, { useEffect, useState } from 'react'

const Demo = () => {

  const url="https://dummyjson.com/products"

  const [products,setProducts]=useState([])


  useEffect(()=>{
const fetchData=async()=>{
const res=await fetch(url)
const response=await res.json()
setProducts(response)
}

fetchData()
  },[])

  return (
    <div>
      
      <h2>Your Products:</h2>
      <div>
        <ul>

        {products.map((product)=>{
          return <li>

          </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default Demo


