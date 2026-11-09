import React, { useState } from 'react'

const Demo = () => {

  const userDetails={name:"",email:"",role:"",terms:false}

  const [step,setStep]=useState(1)

  const [formData,setFormData]=useState(userDetails)

  const [isSubmitted,setIsSubmitted]=useState(false)

  // console.log(formData.email)

  const isStep1Valid=formData.name && formData.email
  const isStep2Valid=formData.role && formData.terms

  return (
    <div>
      {step===1 && (
        <div>
          <div>
            <label>Name:</label>

          <input value={formData.name} type='text' onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          </div>
          <div>
            <label>Email:</label>
          <input value={formData.email} type='email' onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
          </div>
            
        </div>
      )}


      
    </div>
  )
}

export default Demo
