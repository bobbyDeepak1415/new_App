import React from 'react'

const Demo = () => {

  const initialValues={userName:"",email:"",password:""}

  

  const formField={
    margin:"10px"
  }

  return (
    <div>
      <form>
        <div style={formField}>
          <label>Username:</label>
          <input/>
        </div>


      </form>
    </div>
  )
}

export default Demo
