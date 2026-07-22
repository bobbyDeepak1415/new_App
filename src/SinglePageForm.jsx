import React, { useEffect, useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", password: "", email: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  // useEffect(()=>{
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  //     console.log(formValues)
  //   }
  // },[formErrors,isSubmit,formValues])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="container bg-gray">
      <form onSubmit={handleSubmit}>
        <h1>Login Form:</h1>

        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

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
          <p>{formErrors.username}</p>
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
          <p>{formErrors.email}</p>
          <div className="ui field">
            <label>Password:</label>
            <input
              onChange={handleChange}
              type="password"
              value={formValues.password}
              name="password"
              placeholder="Password"
            />
          </div>
          <p>{formErrors.password}</p>

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
