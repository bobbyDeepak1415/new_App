import { useState } from "react";

const Demo = () => {

  const [count,setCount]=useState(0)

  return <div>
  <h1>Hello from parent</h1>

  <button onClick={()=>setCount(count+1)}>click</button>
  </div>
};

export default Demo;
