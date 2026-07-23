import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (formValues) => {

const errors={}

if(!formValues.username){
  errors.username="username required"
}

  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
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
          </div>
          <button>Regisder</button>
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
