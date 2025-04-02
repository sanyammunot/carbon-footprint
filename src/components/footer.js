import React from "react";
import Carbon from "../image/carbon.png"

function Footer() {
  return (
    <div>
      <div className="container-fluid px-0">
        <div className="footer-color"></div>
        <div className="footer-wrapper px-4">
          <div className="footer-top text-light border-bottom border-light pt-5 pb-2">
            <h4>Reviving our world and restoring its vitality.</h4>
          </div>
          <div className="footer-bottom text-light mt-4">
            <div className="row mb-4">
              <div className="col-md-8 col-12  d-sm-flex">
                <h5 className="me-4">Contact Us</h5>
                <h5 className="me-4">Terms & Conditions</h5>
                <h5 className="me-4">FAQ</h5>
              </div>
              <div className="col-12 mt-3 mt-md-0 col-md-4 text-md-end">
                <i className="fa-brands fa-linkedin fa-xl me-4"></i>
                <i className="fa-brands fa-twitter fa-xl me-4"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
              </div>
            </div>

          <div className="">
            <div className="d-flex mb-2 justify-content-center">
            <div className="border-end border-light my-2">
              <img className="" src={Carbon} width="40px" height="65px" alt="" />
            </div>
            <div className="ms-3 mt-2">
              <h4 className="mb-0 text-light">Footprint</h4>
              <h4 className=" text-light">Calculator</h4>
            </div>
            </div>
            <div className="text-center pb-2">
                <h6>Photos and graphics © or used with permission.</h6>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
