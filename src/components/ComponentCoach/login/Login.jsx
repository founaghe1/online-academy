import React, { useState } from "react";
import "./Login.css";
import Card from "react-bootstrap/Card";
import logo from "../../../medias/rrr.jpeg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/Firebase";
import CoachsRoutes from "../../Routes/CoachsRoutes";
import ApprenantRoutes from "../../Routes/ApprenantRoutes";
import AdminRoutes from "../../Routes/AdminRoutes";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // // Utiliser la fonction de navigation
  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     const userCredential = await auth.signInWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     const userUid = userCredential.user.uid;

  //     // Récupérer les informations de l'utilisateur depuis Firestore
  //     const userDocRef = doc(db, "users", userUid);
  //     const userDocSnapshot = await getDoc(userDocRef);

  //     if (userDocSnapshot.exists()) {
  //       const userData = userDocSnapshot.data();
  //       const userStatus = userData.status;

  //       // Rediriger en fonction du rôle de l'utilisateur
  //       if (userStatus === "coach") {
  //         navigate("/coach-dashboard");
  //       } else if (userStatus === "apprenant") {
  //         navigate("/apprenant-dashboard");
  //       } else if (userStatus === "admin") {
  //         navigate("/admin-dashboard");
  //       } else {
  //         alert("Rôle non reconnu");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Erreur de connexion : ", error);
  //     alert("Erreur de connexion");
  //   }
  // };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Card className="px-3 mx-3 py-3 login-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} className="logo img-fluid" alt="" />
          </div>
          <h2 className="text-center title mb-3">CONNECTEZ-VOUS</h2>
          <form action="">
            <InputGroup className="mb-3 w-auto">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineUser className="fw-bold icon fs-4" />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon2">
                <AiFillLock className="fw-bold icon fs-4" />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                aria-describedby="basic-addon1"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <div className="mb-5">
              <Link to="/forgotPW">
                <a href="../ForgotPW/ForgotPW.jsx" className="forgotPW">
                  Mot de passe oublié ?
                </a>
              </Link>
            </div>
            <Link to="/cch/dashboard" >
              <button className="login-btn btn text-light fw-bold w-100">
                Connection
              </button>
            </Link>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
