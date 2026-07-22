import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", password: "", email: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target);

    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container bg-gray">
      <form onSubmit={handleSubmit}>
        <h1>Login Form:</h1>
        <div className="ui form">
          <div className="ui field">
            <label>UserName:</label>
            <input
              value={formValues.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="ui field">
            <label>Email:</label>
            <input
              onChange={handleChange}
              value={formValues.email}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="ui field">
            <label>Password:</label>
            <input
              onChange={handleChange}
              type="password"
              value={formValues.email}
              name="password"
              placeholder="Password"
            />
          </div>

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
