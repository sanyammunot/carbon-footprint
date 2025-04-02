import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Questionnaire from "./pages/Questionnaire";
import Result from "./pages/Result";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./components/Firebase";
import { useState } from "react";

function App() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [username, setUsername] = useState("");
  const [signedin, setSignedin] = useState(false);
  const [signuped, setSignuped] = useState(false);

  const googlesigninhandler = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUsername(user.displayName);
        setSignedin(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signuphandler = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;
    if (password !== confirmpassword) {
      alert("Password dosn't matched");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        sendEmailVerification(auth.currentUser)
          .then((data) => {
            console.log(data);
            alert(
              "Registered Successfully. A link has been sent to you on email, kindly first verify it and login to continue."
            );
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
    setSignuped(true);
  };

  const signinhandler = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          alert("Your email is not verified yet");
          event.target.password.value = "";
          return;
        }
        setUsername(displayName);
        setSignedin(true);
      })
      .catch((error) => {
        alert(error.message);
        event.target.password.value = "";
        return;
      });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar status={signedin} name={username} />
        <Routes>
          <Route path="/" element={<Home signedin={signedin} />} />
          <Route
            path="/login"
            element={
              <Login
                signinhandler={signinhandler}
                signedin={signedin}
                googlesigninhandler={googlesigninhandler}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup signuped={signuped} signuphandler={signuphandler} />
            }
          />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
