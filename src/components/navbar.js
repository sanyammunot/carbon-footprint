import React from "react";
import Carbon from "../image/carbon.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "../App.css";
function Navbar({status,name}) {
  return (
    <div className="navbar-wrapper">
      <div className="container-fluid px-1 px-sm-4">
        <div className="row justify-content-between ">
          <div className="col-6 d-flex">
            <div className="border-end border-light my-2">
              <img
                src={Carbon}
                className=""
                width="40px"
                height="65px"
                alt=""
              />
            </div>
            <Link to="/" className="ms-3 mt-2">
              <h4 className="mb-0 text-light">Footprint</h4>
              <h4 className=" text-light">Calculator</h4>
            </Link>
          </div>
          <div className="col-6 px-0 ">
           {status?
           <div className="d-flex justify-content-end my-4">
              <h5 className="text-light">Hello {name}</h5>
           </div>
           :( <div className="d-flex justify-content-end my-4">
              <Link to="/login">
                <h5 className="text-light fw-normal me-3 account">Login</h5>
              </Link>
              <Link to="/signup">
                <h5 className="text-light fw-normal me-3 account">Sign up</h5>
              </Link>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
