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

   
  const handleChange=(e)=>{

const {name,value}=e.target
setFormValues({...formValues,[name]:value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    const errors=validate(formValues)

    setFormErrors(errors)


  }


  const validate=(formValues)=>{
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      const errors={}

      if(!formValues.userName){
        errors.userName="UserName required...!"
      }

      
      if(!formValues.email){
        errors.email="Email required...!"
      }else if(!emailRegex.test(formValues.email)){
        errors.email="Invalid Email Format...!"

      }
      if(!formValues.password){
        errors.password="Password required...!"
      }else if(!passwordRegex.test(formValues.password)){
        errors.email="Invalid Password Format...!"

      }


      return errors


  }

  return (
    <div>
      {isSubmit ? (
<p style={successMsg}>Successfully Logged In</p>
      ):(
<form onSubmit={handleSubmit}>
        <div style={formField}>
          <label>Username:</label>
          <input value={formValues.userName} type='text' onChange={handleChange}/>
          <p>{formErrors.userName}</p>
        </div>
        <div style={formField}>
          <label>Email:</label>
          <input value={formValues.email} type='email' onChange={handleChange}/>
          <p>{formErrors.email}</p>
        </div>
        <div style={formField}>
          <label>Password:</label>
          <input value={formValues.password} type='password' onChange={handleChange}/>
          <p>{formErrors.password}</p>
        </div>

<button>Submit</button>
      </form>
      )}
      
    </div>
  )
}

export default Demo
