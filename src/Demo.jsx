import { useState } from "react";
import Child from "./Child";

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello from parent {count}</h1>

      <button onClick={() => setCount(count + 1)}>click</button>
      <Child/>
    </div>
  );
};

export default Demo;
