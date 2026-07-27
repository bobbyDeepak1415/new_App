import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const messageStyle = {
    color: "red",
  };

  const validate = (formValues) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

    if (!formValues.username) {
      errors.username = "username required";
    }

    if (!formValues.email) {
      errors.email = "email required";
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "Invalid email format";
    }
    if (!formValues.password) {
      errors.password = "password required";
    } else if (!passwordRegex.test(formValues.password)) {
      errors.password = "Invalid password format";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    setFormErrors(errors);
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
        <p style={messageStyle}>{formErrors.username}</p>
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
        <p style={messageStyle}>{formErrors.email}</p>
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
        <p style={messageStyle}>{formErrors.password}</p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default SinglePageForm;
