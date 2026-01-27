// import React, { useState } from 'react'

const Home = ({setEmail,setName,name,email}) => {

// const setEmail=props.setEmail
// const setName=props.setName

// const name=props.name 
// const email=props.email



 
  return (
    <div>
      <h1>HomePage</h1>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <button>Enter</button>
      </form>
    </div>
  );
}

export default Home
