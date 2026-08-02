import React, { useState } from "react";

const Demo = () => {
  const [page, SetPage] = useState(1);

  const initialValues = { username: "", email: "", role: "", terms: false };

  const [formValues, setFromValues] = useState(initialValues);
  const [error, setError] = useState("");

  

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFromValues({ ...formValues, [name]: value });
  };







const handleClick=()=>{

  const isStep1Valid=formValues.username&&formValues.email
  const isStep2Valid=formValues.role&&formValues.terms

  if(isStep1Valid){
    SetPage(2)
  }else{
    setError("credentials required")
  }

  if(isStep2Valid){
    return "you have logged in"
  }



}

return (
  <div style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}>
    {page === 1 ? (
      <div className="form container">
        <div className="input field">
          <label>Username:</label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={formValues.username}
          />
        </div>
        <div className="input field">
          <label>email:</label>
          <input
            onChange={handleChange}
            name="email"
            value={formValues.email}
          />
        </div>

        {error}
      </div>
    ) : (
      <>
        <select onChange={handleChange}>
          <option value="">Select role</option>
          <option value={formValues.role}>Developer</option>
          <option value={formValues.role}>Designer</option>
          <option value={formValues.role}>Manager</option>
        </select>

        <span>You agree to terms</span>
        <input type="checkbox" value={formValues.terms} onChange={handleChange} type="select" />
      </>
    )}
    <button onClick={handleClick}>Next</button>
  </div>
);
};

  
  




export default Demo;
