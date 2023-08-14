import React from "react";
import { BsSearch, BsSliders } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import avatar from "../../medias/avatar.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav class="navbar bg-white">
        <div class="container-fluid ">
          <form className="navForm d-flex">
            <div className="me-5 ">
              <h1>Dashboard</h1>
            </div>
            <div class="group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
    <input placeholder="Search" type="search" class="input"/>
</div>
            {/* <div class="input-group recherche shadow rounded-5">
              <span
                class="input-group-text bg-white rounded-start-4"
                id="basic-addon1"
              >
                <BsSearch />
              </span>
              <input
                type="text"
                class="form-control "
                placeholder="Search..."
              />
              <span
                class="input-group-text rounded-end-4 bg-white"
                id="basic-addon1"
              >
                <BsSliders />
              </span>
            </div> */}
          </form>
          <ul class="ms-auto list-unstyled  d-flex align-items-center navList">
            <li>
              <a href="/">
                <IoMdNotificationsOutline className="fs-4 text-black" />
              </a>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img src={avatar} class="rounded-4 " alt="" width="50" />
                <p className="d-none d-sm-inline">
                  <br />
                  <span>Bb Yacine</span>
                  <br />
                  <span>ydk@gmail.com</span>
                </p>
                <div class="dropdown d-lg-none d-md-none">
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="/">
                        Bb Yacine
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        ydk@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">
                    <button className="btn btn-secondary text-white add"
                      onClick={handleShow}>
                            
                      <PiPencilSimpleLineDuotone className="fs-4 " />
                    </button>


                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          <h3>Modifier le profil</h3>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="my-3">
                        <div className=" d-flex justify-content-center align-items-center mb-3">
                          <div>
                            <a href="">
                              <img
                                src={avatar}
                                class="rounded-circle shadow"
                                alt=""
                                width="80"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="row align-items-baseline">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nom"
                            >
                              <Form.Control
                                type="text"
                                placeholder="princesse"
                              />
                            </FloatingLabel>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Prenom"
                            >
                              <Form.Control
                                type="text"
                                placeholder="princesse"
                              />
                            </FloatingLabel>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Email"
                            >
                              <Form.Control
                                type="email"
                                placeholder="princesse@gmail.com"
                              />
                            </FloatingLabel>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Mot de passe"
                            >
                              <Form.Control
                                type="password"
                                placeholder="*********"
                              />
                            </FloatingLabel>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="btn btn-secondary text-white fw-bold"
                          onClick={handleClose}
                        >
                          Fermer
                        </Button>
                        <Button
                          className="btn btn-secondary text-white save"
                          onClick={handleClose}
                        >
                          Enregistrer
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Nav.Link>
                </Nav>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
