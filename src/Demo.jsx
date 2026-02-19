import React, { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    terms: "",
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
          <button
            onClick={() => setPage(2)}
            disabled={!isStep1Valid}
          >
            Next{" "}
          </button>
        </div>
      )}
      {page===2 &&(
        <div>

        </div>
      )}
    </div>
  );
};

export default Demo;
