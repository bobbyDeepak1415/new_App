import React, { useState } from 'react'

const Demo = () => {

  const userDetails={name:"",email:"",role:"",terms:false}

  const [step,setStep]=useState(1)

  const [formData,setFormData]=useState(userDetails)

  const [isSubmitted,setIsSubmitted]=useState(false)

  // console.log(formData.email)

  const isStep1Valid=formData.name && formData.email
  const isStep2Valid=formData.role && formData.terms


  if(isSubmitted){
    return (
      <div>
        <div>

         <label>Name:</label>
<span>{formData.name}</span>
        </div>
        <div>

         <label>emial:</label>
<span>{formData.email}</span>
        </div>
        <div>

         <label>Role:</label>
<span>{formData.role}</span>
        </div>
        <div>

         <label>Terms:</label>
<span>{formData.terms ? "yes" : "no"}</span>
        </div>
      </div>
    )
  }


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
          <input value={formData.email} type='email' onChange={(e)=>setFormData(prev=>({...prev,email:e.target.value}))}/>
          </div>
            <button disabled={!isStep1Valid} onClick={()=>setStep(2)}>Next</button>
        </div>
      )}

{step===2 && (
  <div>
    <div>
            <label>Role:</label>

<select onChange={(e)=>setFormData(prev=>({...prev,role:e.target.value}))} value={formData.role}>

<option>Developer</option>
<option>Tester</option>
<option>Recruiter</option>
</select>
          </div>
          <div>
            <label>Terms:</label>
          <input   checked={formData.terms} type='checkbox' onChange={(e)=>setFormData(prev=>({...prev,terms:e.target.value}))}/>
          </div>
          <button onClick={()=>setIsSubmitted(true)} disabled={!isStep2Valid}>Register</button>
  </div>
)}
      
    </div>
  )
}

export default Demo
