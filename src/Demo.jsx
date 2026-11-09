import React, { useState } from 'react'

const Demo = () => {

  const userDetails={Name:"",email:"",role:"",terms:false}

  const [formData,setFormData]=useState(userDetails)

  const []
  const [step,setStep]=useState(1)


const isStep1Valid=formData.Name && formData.email 
const isStep2Valid=formData.role && formData.terms

  return (
    <div>

{step===1 && (
  <div>

      <div>
        <label>Name:</label>
        <input  value={formData.Name} onChange={(e)=>setFormData(prev=>({...prev,Name:e.target.value}))}/>
      </div>
      <br></br>
      <div>
        <label>Email:</label>
        <input  value={formData.email} name="email" onChange={(e)=>setFormData(prev=>({...prev,[e.target.name]:e.target.value}))}/>
      </div>
      <button disabled={!isStep1Valid} onClick={()=>setStep(2)}>Next</button>
  </div>

)}

{step===2 && (

<div>

      <br></br>
      <div>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={(e)=>setFormData(prev=>({...prev,[e.target.name]:e.target.value}))}>
          <option>Developer</option>
          <option>Tester</option>
          <option>Recruiter</option>
        </select>
      </div>
      <br></br>
      <div>
        <label>Terms:</label>
        <input name="terms" type='checkbox' checked={formData.terms} onChange={(e)=>setFormData(prev=>({...prev,[e.target.name]:e.target.value}))}/>
      </div>
      <button disabled={!isStep2Valid} onClick={}>Login</button>
      <br></br>
</div>
)}
    </div>
  )
}

export default Demo
