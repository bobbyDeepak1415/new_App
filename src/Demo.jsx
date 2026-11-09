import React, { useState } from 'react'

const Demo = () => {

  const userDetails={name:"",email:"boom",role:"",terms:false}

  const [formData,setFormData]=useState(userDetails)

  console.log(formData.email)

  return (
    <div>
      
    </div>
  )
}

export default Demo
