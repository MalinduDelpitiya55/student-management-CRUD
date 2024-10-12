import axios from "axios";
import React, {useState} from "react";

function StudentForm() {
  const [studentData, setStudent] = useState({
    name: "",
    age: "",
    contact: "",
    guardianName: "",
    address: "",
    guardianContact: "",
  });

  const [studentName, setStudentName] = useState("");

  const handleClear = () => {
    setStudent({
      name: "",
      age: "",
      contact: "",
      guardianName: "",
      address: "",
      guardianContact: "",
    });
    setStudentName("");
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5174/students/search/${studentName}`
      );
      console.log(response);

      if (response.data) {
          const fetchedStudentData = response.data;
          
        setStudent({
          name: fetchedStudentData[0].name || "",
          age: fetchedStudentData[0].age || "",
          contact: fetchedStudentData[0].contact || "",
          guardianName: fetchedStudentData[0].guardian_name || "",
          address: fetchedStudentData[0].address || "",
          guardianContact: fetchedStudentData[0].guardian_contact || "",
        });
      } else {
        setStudent({
          name: "",
          age: "",
          contact: "",
          guardianName: "",
          address: "",
          guardianContact: "",
        });
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
      try {
        await axios.delete(`http://localhost:5174/students/${studentName}`);
        handleClear();
      } catch (error) {
        console.log("Deleting error");
        
      }
  };

  const handleStudentChange = (e) => {
    setStudent({...studentData, [e.target.name]: e.target.value});
  };

  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleDelete} className="col-lg-6">
        <div className="student-form">
          <h2>Student Information</h2>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Name:</h4>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={studentName}
                    onChange={handleNameChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Age:</h4>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={studentData.age}
                    onChange={handleStudentChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Contact:</h4>
                </td>
                <td>
                  <input
                    type="tel"
                    className="form-control"
                    name="contact"
                    value={studentData.contact}
                    onChange={handleStudentChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guardian-form mt-5">
          <h2>Guardian Information</h2>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Name:</h4>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="guardianName"
                    value={studentData.guardianName}
                    onChange={handleStudentChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Address:</h4>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={studentData.address}
                    onChange={handleStudentChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Contact:</h4>
                </td>
                <td>
                  <input
                    type="tel"
                    className="form-control"
                    name="guardianContact"
                    value={studentData.guardianContact}
                    onChange={handleStudentChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-warning mx-4"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleSearch}
            className="btn btn-dark mx-4"
          >
            Search
          </button>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
