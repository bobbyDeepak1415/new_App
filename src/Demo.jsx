import React, { useState } from 'react'

const Demo = () => {

  const userDetails={userName:"",email:"",role:"",terms:false}

  const [formData,setFormData]=useState(userDetails)
  const [formErrors,setFormErrors]=useState({})

  const [isSubmit,setIsSubmit]=useState(false)

  const handleChange=(e)=>{

  setFormData(prev=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit=(e)=>{

e.preventDefault()

const errors=validate(formData)

setFormErrors(errors)

if(Array.keys(errors).length===0){
setIsSubmit(true)
}



  }

  const validate=(formData)=>{

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


if(!formData.userName){
  errors.userName="User name required"
}
if(!formData.email){
  errors.userName="Email required"
}else if(!emailRegex.test(formData.email)){
  errors.userName="Email format incorrect"

}
if(!formData.role){
  errors.userName="role required"
}
if(!formData.terms){
  errors.userName="terms required"
}

  }

  return (

    <div>
      {!isSubmit ? (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name='userName' value={formData.userName} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{errors.userName}</p>
      </div>
      <div>
        <label>Eamil:</label>
        <input name='email' value={formData.email} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{errors.email}</p>
      </div>
      <div>
        <label>Role:</label>
        <select name='role' value={formData.role} onChange={(e)=>handleChange(e)}>
          <option>Developer</option>
          <option>Tester</option>
          <option>Recruiter</option>
        </select>
        <p style={{color:"red"}}>{errors.role}</p>
      </div>
      <div>
        <label>Name:</label>
        <input name='terms' type='checkbox' checked={formData.terms} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{errors.terms}</p>
      </div>

    </form>
      ):(
<h2>Successfully loggedIn</h2>
      )}

    </div>
  )
}

export default Demo
