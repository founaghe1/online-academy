import React from "react";
import "./ForgotPW.css";
import Card from "react-bootstrap/Card";
import logo from "../../medias/rrr.jpeg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineUser } from "react-icons/ai";

const ForgotPW = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
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
          <form action="">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineUser className="fw-bold icon fs-4" />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div className="mb-5">
              <a href="../login/Login.jsx" className="forgotPW">
                Retour connexion
              </a>
            </div>
            <button className="reset-btn btn text-light fw-bold w-100">
              Réinitialiser mot de passe
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPW;
