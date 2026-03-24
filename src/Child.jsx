import React from "react";

const Child = () => {
  console.log("child is rendering...");

  return (
    <div>
      <h1>Hello from child</h1>
    </div>
  );
};

export default React.memo(Child)
