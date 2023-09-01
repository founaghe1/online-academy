import React from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import avatar from "../../../medias/avatar.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shownoc, setShownoc] = useState(false);

  const handleClosenoc = () => setShownoc(false);
  const handleShownoc = () => setShownoc(true);

  // function deconnection
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("users")) || null


  const logOut = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem("users")
      navigate("/", { replace: true })
    } catch (error) {
      alert("Erreur de deconnection, veuillez verifier votre connection");
      console.error(error)
    }
  }

  return (
    <nav>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="d-flex justify-content-end align-items-center gap-5">
            <div class="input-group ">
              <span class="input-group-text" id="basic-addon1">
                <AiOutlineSearch className="fs-4 fw-bold search-icon" />
              </span>
              <input
                type="search"
                class="form-control"
                placeholder="Recherche"
                aria-label="Recherche"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="d-flex justify-content-end align-items-center gap-3">
              <div>
                <button type="button"
                  class="btn rounded-pill mb-3  iconotif"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {/* Modal pour notifs */}
                  <IoMdNotifications
                    className="notif-icon fs-2 fw-bold"
                    onClick={handleShownoc}
                  />
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <ul class="dropdown-menu noc">
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here <br /> </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                       <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                    </ul>
                  
                  </div>
                </button>
              </div>
              <div id="profil">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle rounded-pill mb-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://avatars.dicebear.com/v2/male/55c6a0641adadaa4af04809a28329ec4.svg"
                      alt=""
                      className="rounded-circle"
                    />
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <p class="dropdown-item">{user.prenom} {user.nom}</p>
                    </li>
                    <li>
                      <p class="dropdown-item">{user.email}</p>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        {/* <span className="update-profil">Modifer profil</span> */}
                        <Button
                          className="btn btn-secondary text-white add "
                          onClick={handleShow}
                        >
                          Modifer profil
                        </Button>

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
                                    src="https://avatars.dicebear.com/v2/male/55c6a0641adadaa4af04809a28329ec4.svg"
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
                              className="btnFermer"
                              onClick={handleClose}
                            >
                              Fermer
                            </Button>
                            <Button className="saveBtn" onClick={handleClose}>
                              Enregistrer
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </a>
                    </li>
                    <li>
                      {/* <hr class="dropdown-divider" /> */}
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        {/* <button
                          type="button"
                          class="btn btn-danger border border-0"
                          onClick={logOut}
                        >
                          Deconnexion
                        </button> */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
