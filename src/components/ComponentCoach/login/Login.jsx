import React from "react";
import './Login.css'
import Card from "react-bootstrap/Card";
import logo from '../../../medias/rrr.jpeg'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Card className="px-3 mx-3 py-3 login-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} className="logo img-fluid" alt="" />
          </div>
          <h2 className="text-center title mb-3">CONNECTEZ-VOUS</h2>
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
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">
                <AiFillLock className="fw-bold icon fs-4" />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                aria-label="Mot de passe"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div className="mb-5">
              <a href="../ForgotPW/ForgotPW.jsx" className="forgotPW">
                Mot de passe oublié ?
              </a>
            </div>
            <button className="login-btn btn text-light fw-bold w-100" >
              <Link to="/layout/dashboard">Connection</Link>
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
