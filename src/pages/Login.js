import React from "react";
import { Link } from "react-router-dom";
import Carbon from "../image/carbon.svg"
import { useNavigate } from "react-router-dom";


function Login({googlesigninhandler,signedin,signinhandler}) {
  const navigate=useNavigate();
  if(signedin){
    navigate('/')
  }

  return (
    <div className="login-wrapper">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-7 col-12 bg-light my-5 py-3 px-4 login-box rounded-3">
              <>
            <form onSubmit={(e)=>signinhandler(e)}>
            <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Display Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
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
                  Password
                </label>
                <input
                name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3">
                <Link className="" to="/resetpassword">Forget Password?</Link>
              </div>
              <button  className="button buynow py-2 w-100 d-block mt-4 text-center">
                Sign In
              </button>
            </form>
            <div className="text-center mt-1">
                <span>Don't have an account?<Link to="/signup"> Sign-Up</Link></span>
            </div>
            <div className="line"></div>
            <div onClick={()=>googlesigninhandler()}  className="google-signin py-2 px-3 button d-flex mt-3">
                <i class="fa-brands fa-google fa-lg"></i>
                <span className="d-block w-100 text-center">Login with Google</span>
            </div>
              </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
