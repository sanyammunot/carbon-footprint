import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Signup({signuphandler,signuped}) {
  const navigate = useNavigate();
  if (signuped === true) {
    navigate("/login");
  }
  return (
    <div>
    <div className="login-wrapper">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-7 col-12 bg-light my-5 py-3 px-4 login-box rounded-3">

            <form onSubmit={(e) => signuphandler(e)}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Create Password
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword2" class="form-label">
                  Confirm Password
                </label>
                <input
                  name="confirmpassword"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  required
                />
              </div>
              <button
                type="submit"
                className="button buynow py-2 w-100 d-block mt-4 text-center"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center mt-1">
              <span>
                Already have an account?<Link to="/login"> Sign-In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
