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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
  };

  const handleSearch = async () => {
    if (!studentName) {
      setError("Please enter a student's name to search.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://localhost:5174/students/search/${studentName}`
      );
        console.log(response);
        
      const fetchedStudentData = response.data || {
        name: "",
        age: "",
        contact: "",
        gurdianName: "",
        address: "",
        gurdianContact: "",
      };
      setStudent(fetchedStudentData);
    } catch (error) {
      setError("Failed to fetch student data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!studentName) {
      setError("Please enter a student's name to delete.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this student?")) {
      setLoading(true);
      setError("");

      try {
        await axios.delete(`http://localhost:5174/students/${studentName}`);
        handleClear();
      } catch (error) {
        setError("Failed to delete student. Please try again.");
      } finally {
        setLoading(false);
      }
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
      {error && <div className="alert alert-danger">{error}</div>}
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
                    type="text"
                    className="form-control"
                    name="age"
                    value={studentData.age || ""} // Default to empty string
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
                    value={studentData.contact || ""} // Default to empty string
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
                    value={studentData.gurdianName || ""} // Default to empty string
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
                    value={studentData.address || ""} // Default to empty string
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
                    value={studentData.gurdianContact || ""} // Default to empty string
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
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
          <button type="submit" className="btn btn-danger" disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
