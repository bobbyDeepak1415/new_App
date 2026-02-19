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
          <button onClick={() => setPage(2)}>Next</button>
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
          <input type="checkbox"></input>
          <button onClick={()=>setPage(1)}>Prev</button>
          <button onClick={()=>setSubmitted(true)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Demo;
