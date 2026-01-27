import React, { useState } from "react";

const Role = ({ name, email }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const options = [" Developer", "Designer", "Manager"];

  const [agree, setAgree] = useState(null);
  const [details, setDetails] = useState([name, email]);

  const displayDetails = () => {
    if (!agree) {
      alert("please agree to the terms");
      return;
    }

    setDetails((prev) => [...prev, { role: selectedRole, agree: true }]);
  };

  return (
    <div>
      <select
        style={{ margin: "3rem" }}
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
      <div style={{ display: "flex", gap: "10px", margin: "1rem" }}>
        <input
          onChange={(e) => setAgree(e.target.checked)}
          checked={agree}
          type="checkBox"
        ></input>
        <span>Agree to terms and conditions</span>
      </div>

      <div>
        <button onClick={() => displayDetails()}>Submit</button>
      </div>

      <div>
        <ul>

        {details.map((detail) => {
            return <li>{detail}</li>
        })}
        </ul>
      </div>
    </div>
  );
};

export default Role;
