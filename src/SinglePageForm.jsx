import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  
  const validate=(formValues)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const errors=validate(formValues)

setFormErrors(errors)
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>User Form:</h1>
        <div>
          <label htmlFor="form-username">Username:</label>
          <input
            value={formValues.username}
            name="username"
            placeholder="username"
            onChange={handleChange}
            id="form-username"
          />
        </div>
        <div>
          <label htmlFor="form-email">Email:</label>
          <input
            value={formValues.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
            id="form-email"
          />
        </div>
        <div>
          <label htmlFor="form-username">Password:</label>
          <input
            value={formValues.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
            id="form-password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default SinglePageForm;
