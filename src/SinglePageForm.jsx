import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
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

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  return (
    <div className="form container">
      <div>
        {isSubmit ? (
          <>
            <h2>You have Logged in</h2>
            {JSON.stringify(formValues, undefined, 2)}
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>User Form</h1>
            <div>
              <label>Username:</label>
              <input
                value={formValues.username}
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.username}</p>
            <div>
              <label>Email:</label>
              <input
                value={formValues.email}
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.email}</p>
            <div>
              <label>Password:</label>
              <input
                value={formValues.password}
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.password}</p>
            <button>Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SinglePageForm;
