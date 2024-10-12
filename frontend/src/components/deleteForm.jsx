import axios from "axios";
import React, {useState} from "react";

function StudentForm() {
  const [studentData, setStudent] = useState({
    name: "",
    age: "",
    contact: "",
    gurdianName: "",
    address: "",
    gurdianContact: "",
  });

  const [studentName, setStudentName] = useState(""); 

  const handleClear = () => {
    setStudent({
      name: "",
      age: "",
      contact: "",
      gurdianName: "",
      address: "",
      gurdianContact: "",
    });
    setStudentName("");
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5174/students?name=${studentName}` 
      );
      setStudent(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:5174/students?name=bihan`
      );
      console.log(response);
      handleClear();
    } catch (error) {
      console.error(error);
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
                    value={studentData.name}
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
                    type="text"
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
                    type="text"
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
                    name="gurdianName"
                    value={studentData.gurdianName}
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
                    type="text"
                    className="form-control"
                    name="gurdianContact"
                    value={studentData.gurdianContact}
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
