import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const errorMsg = {
    color: "red",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit((prev) => !prev);
    }
  };

  const validate = (formValues) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
      {isSubmit ? (
        <h2 style={{ color: "green", fontSize: "20px" }}>
          Registration successfull
        </h2>
      ) : (
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
            <p style={errorMsg}>{formErrors.username}</p>
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
            <p style={errorMsg}>{formErrors.email}</p>
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
            <p style={errorMsg}>{formErrors.password}</p>
          </div>
          <button>Register</button>
        </form>
      )}
    </div>
  );
};

export default SinglePageForm;
