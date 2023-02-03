import React from "react";
// import { useState } from "react";
import BasicInformations from "../components/register/BasicInformations";
// import BusinessDetails from "../components/register/BusinessDetails";
// import ServiceDetails from "../components/register/ServiceDetails";

const Register = () => {
  // const [register, setRegister] = useState(1);

  return (
    <div className="container my-5 text-center">
      <h3>
        <b>Register as Service Provider</b>
      </h3>
      <p
        className="mx-auto mt-4"
        style={{
          maxWidth: "650px",
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using
      </p>
      <div
        className="d-flex justify-content-between mx-auto my-5"
        style={{ maxWidth: "400px" }}
      >
        <p
          className="bg-dark text-white border border-3 border-secondary p-2 rounded-circle"
          style={{ width: "40px", height: "40px" }}
        >
          1
        </p>
        <p
          className="bg-secondary p-2 rounded-circle"
          style={{ width: "40px", height: "40px" }}
        >
          2
        </p>
        <p
          className="bg-secondary p-2 rounded-circle"
          style={{ width: "40px", height: "40px" }}
        >
          3
        </p>
      </div>
      <hr
        className="mx-auto bg-dark"
        style={{
          maxWidth: "380px",
          height: "3px",
          position: "relative",
          top: "-68px",
          zIndex: "-1",
        }}
      ></hr>
      <div className="mb-5">
        <BasicInformations />
      </div>
      <button className="btn px-5 py-2 bg-dark text-white">Next</button>
    </div>
  );
};

export default Register;
