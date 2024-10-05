import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change Switch to Routes
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} />{" "}
        {/* Change component prop to element */}
        <Route path="/about" element={<About />} />{" "}
        {/* Change component prop to element */}
      </Routes>
    </Router>
  );
}

export default App;
