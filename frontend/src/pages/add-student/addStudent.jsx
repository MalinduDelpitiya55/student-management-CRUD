import React from "react";
import Button from "react-bootstrap/Button";
import Form from "./../../components/studentForm.jsx";
import Profile from "./../../assets/profile.png";
export default function AddStudent() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <img
            src={Profile}
            alt="Profile Picture"
           
          />
        </div>
        <div className="col-6 mt-5">
          <Form />
        </div>
      </div>
    </>
  );
}
