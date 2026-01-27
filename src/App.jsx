// import './App.css'

import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Suspense } from "react";
import Role from "./components/Role";

function App() {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");


    

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route
            path="/"
            element={
              <Home
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
              />
            }
          ></Route>
          <Route
            path="/role"
            element={<Role name={name} email={email} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;

function NavWrapper() {
  return (
    <div>
      <Link  to="/">Home</Link>
      <Link  to="/role">
        Next
      </Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
