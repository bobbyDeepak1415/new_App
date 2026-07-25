import React, { useState } from 'react'

const SinglePageForm = () => {

  const initialValues={username:"",email:"",password:""}


  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setFormErrors]=useState({})

  const handleChange=(e)=>{
const {name,value}=e.target

setFormValues({...formValues,[name]:value})


  }

  const validate=()=>{

  }

  const handleSubmit=(e)=>{

    const 

e.preventDefault()
validate(setFormErrors())


  }



  return (
    <div className='form container'>
<div>

      <form onSubmit={handleSubmit}>
        <h1>User Form</h1>
        <div>
          <label>Username:</label>
          <input value={formValues.username} name="username" type='text' placeholder='username' onChange={handleChange}/>
        </div>
        <div>
          <label>Email:</label>
          <input value={formValues.email} name="email" type='email' placeholder='email' onChange={handleChange}/>
        </div>
        <div>
          <label>Password:</label>
          <input value={formValues.password} name="password" type='password' placeholder='password' onChange={handleChange}/>
        </div>
        <button onClick={}>Login</button>

      </form>
</div>
    </div>
  )
}

export default SinglePageForm
