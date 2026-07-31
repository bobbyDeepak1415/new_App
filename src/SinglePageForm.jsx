import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div
      className="form-container"
      style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}
    >
      <form>
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
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
