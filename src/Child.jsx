import { memo } from "react";
const Child = (props) => {
  console.log("child is rendering...");

  return (
    <div>
      <h1>Hello from child : {props.count}</h1>
    </div>
  );
};

export default memo(Child);
