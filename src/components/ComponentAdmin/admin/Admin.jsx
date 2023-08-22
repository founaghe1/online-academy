import React from "react";
import './Admin.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {AiOutlineSearch} from 'react-icons/ai';
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <>
    <div className="vh-100">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary text-dark">
          <Container>
            <Navbar.Brand href="#home" className="fs-1 text-bold">
              Admin
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  <Button
                    className="btn btn-secondary text-light add"
                    onClick={handleShow}
                  >
                    Ajouter
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout étudiant ou coach </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="my-5">
                      <div className="row align-items-baseline">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                          <FloatingLabel controlId="floatingInput" label="Nom">
                            <Form.Control
                              type="text"
                              placeholder="Baba Thiam"
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
                              placeholder="baba@gmail.com"
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
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                          <Form.Select
                            aria-label="Default select example"
                            className="selectModal"
                          >
                            <option>Statut</option>
                            <option value="1">Proffesseurs</option>
                            <option value="2">Etudiants</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="btn btn-secondary text-dark fw-bold"
                        onClick={handleClose}
                      >
                        Fermer
                      </Button>
                      <Button
                        className="btn btn-secondary text-dark save"
                        onClick={handleClose}
                      >
                        Enregistrer
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Nav.Link>
                <Nav.Link href="#link">
                  <button className="btn btn-danger text-light logout">
                    Déconnection
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="row my-3">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <Card className="carte shadow-lg mb-3">
              <Card.Body>
                <p className="fs-4">
                  <span className="nombre fs-1 fw-bold">6</span> Coachs
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <Card className="carte shadow-lg mb-3">
              <Card.Body>
                <p className="fs-4">
                  <span className="nombre fs-1 fw-bold">125</span> Etudiants
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <InputGroup className="shadow-lg">
                <InputGroup.Text id="basic-addon1">
                  <AiOutlineSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div>
              <Form.Select
                className="shadow-lg"
                aria-label="Default select example"
              >
                <option>Tout</option>
                <option value="1">Coachs</option>
                <option value="2">Etudiants</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="row">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Profil</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Mot de passe</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>mark123</td>
                <td>coach</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/male/04ea487db8d083311f745af276ab3bca.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Jacob</td>
                <td>jacob@gmail.com</td>
                <td>mark123</td>
                <td>étudiant</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/male/db624224ce52e9d543d6cd3ce1f65f67.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Larry</td>
                <td>larry@gmail.com</td>
                <td>mark123</td>
                <td>coach</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>mark123</td>
                <td>coach</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/male/04ea487db8d083311f745af276ab3bca.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Jacob</td>
                <td>jacob@gmail.com</td>
                <td>mark123</td>
                <td>étudiant</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.dicebear.com/v2/male/db624224ce52e9d543d6cd3ce1f65f67.svg"
                    alt="profil"
                    className="rounded-pill border border-1 img-profil"
                  />
                </td>
                <td>Larry</td>
                <td>larry@gmail.com</td>
                <td>mark123</td>
                <td>coach</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary text-dark">
                    <BsPencilSquare className="text-light fw-bold fs-5" />
                  </button>
                  <button className="btn btn-danger text-dark">
                    <BsTrash className="text-light fw-bold fs-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Admin;
