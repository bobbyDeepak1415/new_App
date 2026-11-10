import React, { useReducer, useState } from 'react'

const Demo = () => {

  const userDetails={userName:"",email:"",password:""}

  const [formData,setFormData]=useState(userDetails)
  const [formErrors,setFormErrors]=useState({})

  const handleChange=(e)=>{

    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit=()=>{
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UserName:</label>
        <input name="userName" value={formData.userName} onChange={(e)=>handleChange(e)}/>
        <p>{formErrors.userName}</p>
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={(e)=>handleChange(e)}/>
        <p>{formErrors.email}</p>
      </div>
      <div>
        <label>Password:</label>
        <input name="password" value={formData.password} onChange={(e)=>handleChange(e)}/>
        <p>{formErrors.password}</p>
      </div>
      <button>Login</button>
    </form>
  )
}

export default Demo



