import React, { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const [page, setPage] = useState(1);

  const [submitted, setSubmitted] = useState(false);

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.role && formData.terms;

  return (
    <div>
      {page === 1 && (
        <div>
          <h2>Step 1</h2>
          <input
            placeholder="name..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            name=""
          ></input>
          <input
            type="email"
            placeholder="email.."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            name=""
          ></input>
          <button onClick={() => setPage(2)} disabled={!isStep1Valid}>
            Next{" "}
          </button>
        </div>
      )}
      {page === 2 && (
        <div>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option>Select Your Role</option>
            <option value="developer">Developer</option>
            <option value="designer">designer</option>
            <option value="manager">Manager</option>
          </select>
          <span>Agree terms and conditions:</span>
          <input
            type="checkbox"
            value={formData.terms}
            onChange={(e) =>
              setFormData({ ...formData, terms: e.target.checked })
            }
          ></input>
          <button onClick={()=>setPage(1)}>Back</button>
          <button onClick={()=>setSubmitted(true)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Demo;
