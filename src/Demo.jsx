import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, task) {
  switch (task.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;
  }
}

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Demo;
