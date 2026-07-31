import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);
    setFormErrors(errors);
  };

  const validate = (formValues) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const errors = {};

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

  return (
    <div
      className="form-container"
      style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
            onChange={handleChange}
            name="username"
            value={formValues.username}
            type="text"
          />
          <p>{formErrors.username}</p>
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
            onChange={handleChange}
            name="email"
            value={formValues.email}
            type="email"
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
            onChange={handleChange}
            name="password"
            value={formValues.password}
            type="password"
          />
          <p>{formErrors.password}</p>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default SinglePageForm;
