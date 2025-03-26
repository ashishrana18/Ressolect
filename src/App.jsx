// App.jsx
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Dashboard />
      <ToastContainer />
    </>
  );
}

export default App;
