import React, { useState } from 'react'

const Demo = () => {

  const initialValues={userName:"",email:"",password:""}

  const [formValues,setFormValues]=useState(initialValues)

  const [formErrors,setFormErrors]=useState({})

  const [isSubmit,setIsSubmit]=useState(false)

const successMsg={
  color:"green",
  fontSize:"20px",
  fontWeight:"bold"
}

  const formField={
    margin:"10px"
  }

  const handleChange=()=>{

  }

  return (
    <div>
      {isSubmit ? (
<p style={successMsg}>Successfully Logged In</p>
      ):(
<form>
        <div style={formField}>
          <label>Username:</label>
          <input value={formValues.userName} type='text' onChange={handleChange}/>
        </div>
        <div style={formField}>
          <label>Email:</label>
          <input value={formValues.email} type='email' onChange={handleChange}/>
        </div>
        <div style={formField}>
          <label>Password:</label>
          <input value={formValues.password} type='password' onChange={handleChange}/>
        </div>

<button>Submit</button>
      </form>
      )}
      
    </div>
  )
}

export default Demo
