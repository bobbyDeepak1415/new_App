import { useCallback, useState } from "react";
import Child from "./Child";

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log("parent rendering...");
  const dispatch = useCallback(() => {
    setCount();
  }, [setCount]);

  return (
    <div>
      <p>Parent count is at: {count}</p>
      <button onClick={dispatch}>click</button>
      <Child />
    </div>
  );
};

export default Demo;
