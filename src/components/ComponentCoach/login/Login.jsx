import React from "react";
import "./Login.css";
import Card from "react-bootstrap/Card";
import logo from "../../../medias/rrr.jpeg";
//firebase import
import { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const authUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      // Get user data from Firestore based on email
      const userRef = firebase
        .firestore()
        .collection("users")
        .doc(authUser.user.uid);
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        const userData = userDoc.data();

        // Redirect based on user type (apprenant or coach)
        if (userData.type === "apprenant") {
          console.log(email, password);
          // Redirect to apprenant page
          // For example: window.location.href = '/apprenant';
        } else if (userData.type === "coach") {
          // Redirect to coach page
          // For example: window.location.href = '/coach';
        }
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Card className="px-3 mx-3 py-3 login-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} className="logo img-fluid" alt="" />
          </div>
          <h2 className="text-center title mb-3">CONNECTEZ-VOUS</h2>
          <form action="">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="mb-5">
              <a href="../ForgotPW/ForgotPW.jsx" className="forgotPW">
                Mot de passe oublié ?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className="login-btn btn  fw-bold w-100"
            >
              {" "}
              Connexion
              {/* <a
                href="/layout/dashboard"
                className="text-decoration-none text-light"
              >
                Connexion
              </a> */}
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
