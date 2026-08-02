import React, { useState } from 'react'


const Demo = () => {

  const [page,SetPage]=useState(1)

  const initialValues={username:"",email:"",role:"",terms:""}

  const [formValues,setFromValues]=useState(initialValues)


  const handleChange=(e)=>{
setFromValues.username(e.target.value)
  }


  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      
      <div className='form container'>
        <div className='input field'>
<label>Username:</label>
<input onChange={handleChange} name="username" value={formValues.username}/>
        </div>
        <div className='input field'>
<label>email:</label>
<input name="email" value={formValues.email}/>
        </div>

      </div>

    </div>
  )
}

export default Demo
 