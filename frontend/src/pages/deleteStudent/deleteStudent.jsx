import React from "react";
import DeleteForm from "./../../components/deleteForm.jsx";
import Profile from "./../../assets/profile.png";
export default function deleteStudent() {
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
        </div>
        <div className="col-6 mt-5">
          <DeleteForm />
        </div>
      </div>
    </>
  );
}
