import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (formValues) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="container">
      {isSubmit ? (
        <p>
          You ave logged in
          {JSON.stringify(formValues, 2, undefined)}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="user form">
            <h1>User Form</h1>
            <div className="ui field">
              <label>UserName:</label>

              <input
                type="text"
                name="username"
                value={formValues.username}
                placeholder="Username"
                onChange={handleChange}
              />

              <p>{formErrors.username}</p>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                placeholder="email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                placeholder="password"
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
            </div>
            <button>Regisder</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SinglePageForm;
