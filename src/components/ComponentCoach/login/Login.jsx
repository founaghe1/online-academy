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
import { signInWithEmailAndPassword } from "firebase/auth";

// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  
  // Utiliser la fonction de navigation
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        mdp
      );
      const userUid = userCredential.user.uid;

      console.log("Utilisateur connecté avec succès, UID :", userUid);

      // Récupérer les informations de l'utilisateur depuis Firestore
      const userDocRef = doc(db, "users", userUid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const status = userData.status;
        setUserStatus(status);

        // Afficher un message de bienvenue avec le nom et le prénom
      const welcomeMessage = `Bienvenue ${userData.prenom} ${userData.nom} !`;
      
       

        console.log("Données utilisateur :", userData);
        console.log('Statut du compte: ', status);

        // Rediriger en fonction du rôle de l'utilisateur
        
        if (status === "Coach") {
          navigate("/coach/dashboard");
          toast.success("Bienvenu Coach", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (status === "Apprenant") {
          navigate('/apprenant/dashboard');
          toast.success("Bienvenu Apprenant", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (status === "Admin") {
          navigate("/admin/dashboard");
          toast.success("Bienvenu Admin", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          alert("Rôle non reconnu");
        }
      }
    } catch (error) {
      console.error("Erreur de connexion : ", error.code);
      alert("Erreur de connexion" + error.code);
    }
  };

  return (
    <>
    <ToastContainer />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-2 w-auto">
              <InputGroup.Text id="basic-addon2">
                <AiFillLock className="fw-bold icon fs-4" />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                aria-describedby="basic-addon1"
                value={mdp}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <div className="mb-5">
              <Link to="/forgotPW">
                  Mot de passe oublié ?
              </Link>
            </div>
            <Link to="/cch/dashboard/" >
              <button onClick={handleLogin}  className="login-btn btn text-light fw-bold w-100">
                Connection
              </button>
              </Link>
          </form>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Login;
