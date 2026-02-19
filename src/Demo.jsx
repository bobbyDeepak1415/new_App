import { useState } from "react";

const Demo = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.role || formData.terms;

  if (submitted) {
    return (
      <div>
        <li>{formData.name}</li>
        <li>{formData.email}</li>
        <li>{formData.role}</li>
        <span>Accepted Terms:</span> <li>{formData.terms}</li>
      </div>
    );
  }
  return (
    <div>
      {page === 1 && (
        <div>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></input>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></input>
          <button
            disabled={!formData.name || !formData.email}
            onClick={() => setPage(2)}
          >
            Next
          </button>
        </div>
      )}
      {page === 2 && (
        <div>
          <select
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            value={formData.role}
          >
            <option>Select ypur role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          <input
            onChange={(e) =>
              setFormData({ ...formData, terms: e.target.checked })
            }
            type="checkbox"
          ></input>
          <button onClick={() => setPage(1)}>Prev</button>
          <button disabled={!isStep2Valid} onClick={() => setSubmitted(true)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Demo;
