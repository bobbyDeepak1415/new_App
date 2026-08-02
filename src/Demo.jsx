import React, { useState } from "react";

const Demo = () => {
  const [page, SetPage] = useState(1);

  const initialValues = { username: "", email: "", role: "", terms: false };

  const [formValues, setFromValues] = useState(initialValues);
  const [message, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFromValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleClick = () => {
    setMsg("");
    const isStep1Valid = formValues.username && formValues.email;
    const isStep2Valid = formValues.role && formValues.terms;

    if (page === 1) {
      if (isStep1Valid) {
        SetPage(2);
      } else {
        setMsg("Credentials required for Step 1");
      }
    } else if (page === 2) {
      if (isStep2Valid) {
        setMsg("You have logged in successfully!");
      } else {
        setMsg("Please select a role and accept terms");
      }
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}>
      {page === 1 && (
        <div className="form container">
          <div className="input field">
            <label>Username:</label>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              value={formValues.username}
            />
          </div>
          <div className="input field">
            <label>email:</label>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={formValues.email}
            />
          </div>
        </div>
      )}

      {page === 2 && (
        <div>
          <select name="role" value={formValues.role} onChange={handleChange}>
            <option value="">Select role</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Manager</option>
          </select>
          <span>Accept Terms & Conditions</span>
          <input
            name="terms"
            checked={formValues.terms}
            placeholder="hello"
            onChange={() =>
              setFromValues({ ...formValues, terms: e.target.checked })
            }
            type="checkbox"
          />
        </div>
      )}

      <button onClick={handleClick}>Next</button>

      <p>{message}</p>
    </div>
  );
};

export default Demo;
