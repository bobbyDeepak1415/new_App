import React, { useReducer, useState } from 'react'

const Demo = () => {

  const userDetails={userName:"",email:"",password:""}

  const [formData,setFormData]=useState(userDetails)
  const [formErrors,setFormErrors]=useState({})
  const [isSubmitted,setIsSubmitted]=useState(false)

  const handleChange=(e)=>{

    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit=(e)=>{
e.preventDefault()

const errors=validate(formData)
setFormErrors(errors)

if(Object.keys(errors).length===0){
setIsSubmitted(false)
}

  }

  const validate=(formData)=>{

    const errors={}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!formData.userName){
      errors.userName="username required"
    }
    if(!formData.email){
      errors.email="email  required"
    }else if(!emailRegex.test(formData.email)){
      errors.email="email format incorrect"

    }
if(!formData.password){
      errors.password="password  required"
    }

    return errors

  }

  return (
    <div>
{!isSubmitted ?(
 <form onSubmit={handleSubmit}>
      <div>
        <label>UserName:</label>
        <input name="userName" value={formData.userName} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{formErrors.userName}</p>
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{formErrors.email}</p>
      </div>
      <div>
        <label>Password:</label>
        <input name="password" value={formData.password} onChange={(e)=>handleChange(e)}/>
        <p style={{color:"red"}}>{formErrors.password}</p>
      </div>
      <button>Login</button>
    </form>
):(
  <p>Successfully logged in</p>
)}

    
   
    </div>
  )
}

export default Demo



