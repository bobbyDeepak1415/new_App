import React, { useState } from 'react'


const Demo = () => {

  const [page,SetPage]=useState(1)

  const initialValues={username:"",email:"",role:"",terms:""}

  const [formValues,setFromValues]=useState(initialValues)



  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      
      <div className='form container'>
        <div className='input field'>
<label>Username:</label>
<input name="username" value={formValues.username}/>
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
 