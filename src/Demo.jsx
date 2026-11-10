import React, { useState } from 'react'

const Demo = () => {

  const userDetails={Name:"",email:"",role:"",terms:false}

  const [formData,setFormData]=useState(userDetails)
  const [formErrors,setFormErrors]=useState({})

  const [isSubmitted,setIsSubmitted]=useState(false)
  const [step,setStep]=useState(1)


const isStep1Valid=formData.Name && formData.email 
const isStep2Valid=formData.role && formData.terms

const handleChange=(e)=>{

  


  setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
}

if(isSubmitted){
  return <div>
    <p>Name: {formData.Name}</p>
    <br></br>
    <br></br>
    <p>Email: {formData.email}</p>
    <br></br>
    <br></br>
    <p>Role: {formData.role}</p>
    <br></br>
    <br></br>
    <p>terms: {formData.terms ? 'Yes' :"No"}</p>
    <br></br>
    <br></br>
    <p>Successfully LoggedIn</p>
  </div>
}


  return (
    <form onSubmit={handleSubmit}>

{step===1 && (
  <div>

      <div>
        <label>Name:</label>
        <input  value={formData.Name} name="Name" onChange={handleChange}/>
      </div>
      <br></br>
      <div>
        <label>Email:</label>
        <input  value={formData.email} name="email" onChange={handleChange}/>
      </div>
      <button disabled={!isStep1Valid} onClick={()=>setStep(2)}>Next</button>
  </div>

)}

{step===2 && (

<div>

      <br></br>
      <div>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option>Developer</option>
          <option>Tester</option>
          <option>Recruiter</option>
        </select>
      </div>
      <br></br>
      <div>
        <label>Terms:</label>
        <input name="terms" type='checkbox' checked={formData.terms} onChange={handleChange}/>
      </div>
      <button disabled={!isStep2Valid} onClick={()=>setIsSubmitted(true)}>Login</button>
      <br></br>
</div>
)}
    </form>
  )
}

export default Demo
