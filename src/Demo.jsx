import React, { useEffect, useState } from 'react'

const Demo = () => {

  const url="https://dummyjson.com/products"

  const [products,setProducts]=useState([])

  const [item,setItem]=useState("")


  useEffect(()=>{
const fetchData=async()=>{
const res=await fetch(url)
const response=await res.json()
setProducts(response.products)
}

fetchData()
  },[])

  const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(item.toLowerCase()))

  return (
    <div>
      
      <h2>Your Products:</h2>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <div>
        <ul>

        {filteredProducts.map((product)=>{
          return <li key={product.id}>{product.title}</li>

          
        })}
        </ul>
      </div>
    </div>
  )
}

export default Demo


