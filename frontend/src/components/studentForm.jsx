import React from "react";

function studentForm() {
  return (
    <div>
      <form action="" className="col-lg-6">
        <div className="student-form ">
          <h2>Student Information</h2>
          <hr></hr>
          <table>
            <tr>
              <td>
                <h4>Name : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Age : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Contact : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
        </div>
        <div className="guardian-form mt-5">
          <h2>Guardian Information</h2>
          <hr></hr>
          <table>
            <tr>
              <td>
                <h4>Name : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Age : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Contact : </h4>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
        </div>
        <button>Clear</button> <button>Register</button>
      </form>
    </div>
  );
}

export default studentForm;
