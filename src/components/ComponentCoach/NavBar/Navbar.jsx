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

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [shownoc, setShownoc] = useState(false);

  const handleClosenoc = () => setShownoc(false);
  const handleShownoc = () => setShownoc(true);
  
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
                {/* Modal pour notifs */}
                <IoMdNotifications className="notif-icon fs-2 fw-bold"   onClick={handleShownoc} />
                <div
                  className="modal show"
                  style={{ display: 'block', position: 'initial' }}
                >
                  

                  <Modal show={shownoc} onHide={handleClosenoc}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h3>Notifications</h3>
                      </Modal.Title>
                    </Modal.Header>
                   
                    <Modal.Body className='noc'>
                    <h4><span>Online-Academy</span></h4>
          <p>Modal body text goes here. Modal body text goes here Modal body text goes here Modal body text goes here </p>
          <p className='d-flex justify-content-end fw-bold'> 16 Aout 2023, 11:19</p>

            <h4><span>Online-Academy</span></h4>
          <p>Modal body text goes here. Modal body text goes here Modal body text goes here Modal body text goes here </p>
          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p>

          <h4><span>Online-Academy</span></h4>
          <p>Modal body text goes here. Modal body text goes here Modal body text goes here Modal body text goes here </p>
          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 18:02</p>
        </Modal.Body>
                  </Modal>
                 
                </div>
              </div>
              <div id="profil">
                <div className="d-flex align-items-center">
                <img src={avatar} class="rounded-circle " alt="" width="50" />
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
                <Button
                  className="text-white add ms-3"
                  onClick={handleShow}
                >
                  <PiPencilSimpleLineDuotone className="fs-4 text-white" />
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
                        <FloatingLabel controlId="floatingInput" label="Nom">
                          <Form.Control type="text" placeholder="princesse" />
                        </FloatingLabel>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                        <FloatingLabel controlId="floatingInput" label="Prenom">
                          <Form.Control type="text" placeholder="princesse" />
                        </FloatingLabel>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                        <FloatingLabel controlId="floatingInput" label="Email">
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
                      className="btnFermer  "
                      onClick={handleClose}
                    >
                      Fermer 
                    </Button>
                    <Button
                      className="saveBtn"
                      onClick={handleClose}
                    >
                      Enregistrer
                    </Button>
                  </Modal.Footer>
                </Modal>
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
