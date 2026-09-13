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


  const handleChange=()=>{

    const {name,value}=e.target

    setFormValues({...formValues,[name]:value})

  }

  const handleSubmit=(e)=>{
e.preventDefault()


  }

  return <div>

    {isSubmit ? (
<p style={successMsg}>Successfully LoggedIn</p>
    ):(
<form onSubmit={handleSubmit}>
      <div style={formField}>
<label>Name:</label>
      <input value={formValues.name} type="text" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.name}</p>
      </div>
      <div style={formField}>
<label>Email:</label>
      <input value={formValues.email} type="email" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.email}</p>
      </div>
      <div style={formField}>
<label>Password:</label>
      <input value={formValues.password} type="password" onChange={handleChange}/>
      <p style={errorMsg}>{formErrors.password}</p>
      </div>
    </form>
    )}
    
  </div>
};

export default Demo;
