import React from "react";

const Child = () => {
  console.log("child rendering...");

  return <div>Child component</div>;
};

export default React.memo(Child);
