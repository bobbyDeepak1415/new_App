import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
  };

  const validate = (formValues) => {
    const errors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

    if (!formValues.username) {
      errors.username = "user name required";
    }

    if (!formValues.email) {
      errors.email = "email required";
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "invalid email format";
    }
    if (!formValues.password) {
      errors.email = "email required";
    } else if (!passwordRegex.test(formValues.password)) {
      errors.password = "invalid password format";
    }

    return errors;
  };

  

  return (
    <div className="form container">
      <h1>User Form</h1>
      <div className="ui container">
        <form onSubmit={handleSubmit}>
          <div className="ui field">
            <label>Username:</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Username"
              name="username"
              value={formValues.username}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="ui field">
            <label>Email:</label>
            <input
              onChange={handleChange}
              // type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="ui field">
            <label>Password:</label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePageForm;
