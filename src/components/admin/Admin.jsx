import React from "react";
// import "./Admin.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch } from "react-icons/ai";
import Table from "react-bootstrap/Table";
// import { useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const Admin = () => {
  return (
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
                  <button
                    type="button"
                    className="add btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Ajouter
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ajout nouveau coach ou étudiant
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Prénom"
                              />
                              <label for="floatingInput">Prénom</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Nom"
                              />
                              <label for="floatingInput">Nom</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                              />
                              <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">Mot de passe</label>
                            </div>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Statut de l'utilusateur</option>
                              <option value="1">Proffesseur</option>
                              <option value="2">Etudiant</option>
                            </select>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fermer
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Ajouter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link href="#link">
                  <button className="btn btn-secondary text-dark logout">
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
  );
};

export default Admin;
