import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // const memoizedClick = useCallback(() => {
  //   handleClick(setCount);
  // }, [setCount]);

  let num = 10;

  const expensiveValue = useMemo(() => {
    console.log("calculating...");
    return num * 1000;
  }, [num]);

  return (
    <div>
      <h1>Hello from parent</h1>
      <h2>ComputedValue:{count}</h2>
      <h2>MemoizedValue:{expensiveValue}</h2>

      <button onClick={() => handleClick(setCount)}>click</button>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {input}
      <Child input={input} />
    </div>
  );
};

export default Demo;
