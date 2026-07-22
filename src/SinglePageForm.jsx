import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [fromErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
  };

  const validate = (e) => {

    const errors={}

    const emailegex




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
          <div className="ui field">
            <label>Email:</label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
            />
          </div>
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePageForm;
