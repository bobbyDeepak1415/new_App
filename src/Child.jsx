import React, { memo } from "react";

const Child = ({ count }) => {
  console.log("child is rendering...");

  return (
    <div>
      <h1>Hello from child : </h1>
    </div>
  );
};

export default memo(Child);
