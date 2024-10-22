import axios from "axios";
import React, {useState} from "react";

import newRequest from "./../utils/newRequest";

function StudentForm() {
  const [studentData, setStudent] = useState({
    name: "",
    age: "",
    contact: "",
    gurdianName: "",
    address: "",
    gurdianContact: "",
  });

  const handleClear = () => {
    setStudent({
      name: "",
      age: "",
      contact: "",
      gurdianName: "",
      address: "",
      gurdianContact: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(studentData);
      const response = await axios.post(
        `http://localhost:5174/students`,studentData,{
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
    handleClear();
  };
  const handleStudentChange = (e) => {
    setStudent({...studentData, [e.target.name]: e.target.value});
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="col-lg-6">
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
                    onChange={handleStudentChange}
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
                  <h4>Address</h4>
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
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
