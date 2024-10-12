import axios from "axios";
import React, {useState, useEffect} from "react";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
          const response = await axios.get("http://localhost:5174/students");
          console.log(response.data);
          
        setStudents(response.data); 
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Guardian Name</th>
            <th>Guardian Address</th>
            <th>Guardian Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.contact}</td>
              <td>{student.guardian_name}</td>
              <td>{student.address}</td>
              <td>{student.guardian_contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
