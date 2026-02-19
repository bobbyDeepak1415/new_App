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
        </div>
      )}
      {page===2 && (
        <div></div>
      )}
    </div>
  );
};

export default Demo;
