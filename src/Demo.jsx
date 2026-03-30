import React, { useState } from 'react'
import Child from './Child'

const Demo = () => {


  const [name,setName]=useState("Bobby")

  return (
    <div>
      <Child setName={setName}/>
    <h2>{name}</h2>
      
    </div>
  )
}

export default Demo
