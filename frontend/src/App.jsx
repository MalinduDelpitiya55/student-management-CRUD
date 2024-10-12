import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import AddStudent from "./pages/add-student/addStudent.jsx";
import DeleteStudent from "./pages/deleteStudent/deleteStudent.jsx";
import ShowStudent from "./pages/showStudents/showstudents.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/delete" element={<DeleteStudent />} />
          <Route path="/show" element={<ShowStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
