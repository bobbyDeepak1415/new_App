import { useCallback, useState } from "react";
import Child from "./Child";
import { handleClick } from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(0);

  const [item, setItem] = useState(1);

  console.log("parent rendering...");
  const dispatch = useCallback(() => {
    handleClick(setItem);
  }, [setItem]);

  return (
    <div>
      <p>Parent count is at: {count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
      <p>{item}</p>
      <button onClick={dispatch}>click</button>
      <Child />
    </div>
  );
};

export default Demo;
