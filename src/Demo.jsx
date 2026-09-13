import React, { useState } from "react";

const Demo = () => {


  const initialValues={name:"",password:"",email:""}

  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setFormErrors]=useState({})

  const [isSubmit,setIsSubmit]=useState(false)

  const successMsg={
    color:"green",
    fontSize:"30px"
  }
  const formField={
    margin:"20px"
  }

  const errorMsg={
    color:"red",
    fontSize:"20px"
  }


  const handleChange=(e)=>{

    const {name,value}=e.target

    setFormValues({...formValues,[name]:value})

  }

  const handleSubmit=(e)=>{
e.preventDefault()

const errors=validate(formValues)
setFormErrors(errors)
// setFormValues({})

if(Object.keys(errors).length===0){
  setIsSubmit(prev=>!prev)
}


  }

  const validate=(formValues)=>{

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      const errors={}

      if(!formValues.name){
errors.name="Name required"
      }

      if(!formValues.email){
errors.email="Email required"
}else if(!emailRegex.test(formValues.email)){
  errors.email="Incorrect Email Format"
  
      }
      if(!formValues.password){
errors.password="Password required"
}else if(!passwordRegex.test(formValues.password)){
  errors.password="Incorrect Password Format"
  
      }

      return errors


  }

  return <div>

    {isSubmit ? (
<p style={successMsg}>Successfully LoggedIn</p>
    ):(
<form onSubmit={handleSubmit}>
      <div style={formField}>
<label>Name:</label>
      <input name="name" value={formValues.name} type="text" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.name}</p>
      </div>
      <div style={formField}>
<label>Email:</label>
      <input name="email" value={formValues.email} type="email" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.email}</p>
      </div>
      <div style={formField}>
<label>Password:</label>
      <input name="password" value={formValues.password} type="password" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.password}</p>
      </div>
      <button>Submit</button>
    </form>
    )}
    
  </div>
};

export default Demo;
