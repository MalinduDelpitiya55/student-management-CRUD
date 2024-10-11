import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import AddStudent from "./pages/add-student/addStudent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
