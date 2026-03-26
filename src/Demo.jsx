import { useCallback, useState } from "react";
// import Child from "./Child";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(0);
  // const [input, setInput] = useState("");

  const memoizedClick = useCallback(() => {
    handleClick(setCount);
  }, [setCount]);

  return (
    <div>
      <h1>Hello from parent {count}</h1>

      <button onClick={memoizedClick}>click</button>

      {/* <input value={input} onChange={(e) => setInput(e.target.value)} />
      {input}
      <Child count={count} /> */}
    </div>
  );
};

export default Demo;
