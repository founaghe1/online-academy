import React from 'react'
import './sidebar.css'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { RiMenuUnfoldFill } from "react-icons/ri";
import logo from "../../../medias/rrr.jpeg";
import { BiSolidDashboard, BiSolidBookReader, BiUpload } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { BsFillChatRightFill } from "react-icons/bs";
import {useState}  from "react";

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="sticky-top">
        <div className="d-lg-none d-flex justify-content-between align-items-center">
          <div>
            <Button
              variant="menuBtn"
              className="d-lg-none menuBtn px-4 fw-bold"
              onClick={handleShow}
            >
              {/* <RiMenuUnfoldFill className="fs-4 fw-bold" /> */}
              Menu
            </Button>
          </div>
          <div>
            <h1>Dasboard</h1>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="vh-100 border-end">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="" className="img-fluid mb-3 side-logo" />
              </div>
              <h5>Menu</h5>
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-unstyled">
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <a href="" className="text-decoration-none side-link">
                      <BiSolidDashboard className="side-icon fs-4 me-2" />
                      Dashboard
                    </a>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <a href="" className="text-decoration-none side-link">
                      <BiSolidBookReader className="side-icon fs-4 me-2" />
                      Domaines
                    </a>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <a href="" className="text-decoration-none side-link">
                      <BiUpload className="side-icon fs-4 me-2" />
                      Livraisons
                    </a>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <a href="" className="text-decoration-none side-link">
                      <PiStudentBold className="side-icon fs-4 me-2" />
                      Ètudiants
                    </a>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <a href="" className="text-decoration-none side-link">
                      <BsFillChatRightFill className="side-icon fs-4 me-2" />
                      Messagerie
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-100 mt-5">
                <Button variant="" className="btnDecon">
                  Déconnexion
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar
