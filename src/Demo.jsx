import { useState } from "react";
import Child from "./Child";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Hello from parent {count}</h1>

      <button onClick={() => setCount(count + 1)}>click</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Child count={count}/>
    </div>
  );
};

export default Demo;
