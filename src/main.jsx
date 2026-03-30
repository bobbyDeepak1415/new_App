// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import './index.css'
// // import App from "./App.jsx";
// import Demo from "./Demo.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}

//     <Demo />
//   </StrictMode>,
// );

function display(func) {
  func();
  func();
}

function printName() {
  return "Bobby Deepak";
}

display(printName);
