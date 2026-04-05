import { useState } from "react";
import Child from "./Child";

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log("parent rendering...")

  const handleClick = () => {
    setCount(prev=>prev+1);
  };

  return (
    <div>
      <p>Parent count is at: {count}</p>
      <button onClick={handleClick}>click</button>
      <Child />
    </div>
  );
};

export default Demo;
