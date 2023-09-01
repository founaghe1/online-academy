import React, { useState } from "react";
import "./ForgotPW.css";
import Card from "react-bootstrap/Card";
import logo from "../../../medias/rrr.jpeg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineUser } from "react-icons/ai";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../../firebase/Firebase";
import { doc, updateDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from "react-router-dom";


const ForgotPW = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);


  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
  
      const usersCollection = collection(db, 'users');
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDocRef = doc(db, 'users', querySnapshot.docs[0].id);
        await updateDoc(userDocRef, {
          passwordReset: true,
        });
      }
  
      setResetSent(true);
      console.log('Password reset email sent successfully!');
    } catch (error) {
      console.error('An error occurred while sending the password reset email:', error);
    }
  };
  

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center mb-5">
      <Card className="px-3 mx-3 py-3 forgotPW-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} className="logo img-fluid" alt="" />
          </div>
          <h2 className="text-center title mb-3">Mot de passe oublié ?</h2>
          <p className="mb-3 text-center">
            Pas de soucis, nous vous enverrons des instructions de
            réinitialisation
          </p>
          <Form>
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
            <div className="mb-5">
              <Link to='/'> 
              <a className="forgotPW">
                Retour connexion
              </a>
              </Link>
            </div>
            {!resetSent ? (
              <button
                className="reset-btn btn text-light fw-bold w-100"
                onClick={handlePasswordReset}
              >
                Envoyer
              </button>
            ) : (
              <p className="text-success text-center">
                Instructions de réinitialisation envoyées à votre e-mail.
              </p>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPW;
