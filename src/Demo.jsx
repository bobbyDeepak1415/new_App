import React, { useState } from "react";

const Demo = () => {
  const [page, SetPage] = useState(1);

  const initialValues = { username: "", email: "", role: "", terms: "" };

  const [formValues, setFromValues] = useState(initialValues);
  const [error, setError] = useState("");

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFromValues({ ...formValues, [name]: value });
  };



const handleClick=()=>{

  if(!formValues.username &&!formValues.email){
setError("credentials required")
  }

  SetPage(2)
  

}

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}>

{page===1? (
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

        <button onClick={handleClick}>Next</button>

        {error}
      </div>
):(
  <p>Page2</p>
)}

     
    </div>
  );
};

export default Demo;
