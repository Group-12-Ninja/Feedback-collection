import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
