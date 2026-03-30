import React from "react";

const Child = (props) => {
  const name = "Deepak";

  return (
    <div>
      <button onClick={() => props.setName(name)}>Click from child</button>
    </div>
  );
};

export default Child;
