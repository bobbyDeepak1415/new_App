import { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Demo;
