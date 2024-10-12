import React from "react";
import Button from "react-bootstrap/Button";
import Form from "./../../components/studentForm.jsx";
import Profile from "./../../assets/profile.png";
export default function AddStudent() {
  return (
    <>
      <div className="row">
        <div className="col-6 mt-5">
          <div className="col5 justify-content-center">
            <img
              src={Profile}
              alt="Profile Picture"
              width={250}
              className="d-block mx-auto "
            />
          </div>
          <div className="row">
            <div className="col">
              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto "
              >
                Add Student
              </Button>
            </div>
            <div className="col">
              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto "
              >
                Add Student
              </Button>
            </div>
            <div className="col">
              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto "
              >
                Add Student
              </Button>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <Form />
        </div>
      </div>
    </>
  );
}
