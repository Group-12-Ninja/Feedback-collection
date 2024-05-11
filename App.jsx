import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewForm from "./components/FeedbackForm/NewForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
