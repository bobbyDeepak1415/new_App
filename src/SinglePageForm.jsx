import React, { useState } from "react";

const SinglePageForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = () => {};

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
          />
        </div>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
          />
        </div>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
