import React, { useState } from 'react'

const Demo = () => {

  const userDetails={Name:"",email:"",role:"",terms:false}

  const [formData,setFormData]=useState(userDetails)
  const [formErrors,setFormErrors]=useState({})

  const [isSubmitted,setIsSubmitted]=useState(false)



const handleChange=(e)=>{

  


  setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
}

const handleSubmit=()=>{
  const errors=validate(formData)

  setFormErrors(errors)
}

const validate=(formData)=>{
if(!formData.Name){
  errors.Name="username required"
}
if(!formData.email){
  errors.email="email required"
}else if(!emailRegex.test(formData.email)){
  errors.email="email format incorrect"

}
if(!formData.role){
  errors.role="role required"

}
if(!formData.terms){
  errors.terms="terms required"
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


      <div>
        <label>Name:</label>
        <input  value={formData.Name} name="Name" onChange={handleChange}/>
        <p style={{color:"red"}}>{formErrors.Name}</p>
      </div>
      <div>
        <label>Email:</label>
        <input  value={formData.email} name="email" onChange={handleChange}/>
      </div>

    <div>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option>Developer</option>
          <option>Tester</option>
          <option>Recruiter</option>
        </select>
      </div>
      
      <div>
        <label>Terms:</label>
        <input name="terms" type='checkbox' checked={formData.terms} onChange={handleChange}/>
      </div>
      <button >Login</button>

    </form>
  )
}
}

export default Demo
