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
import { Link } from 'react-router-dom';

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
              variant="primary"
              className="d-lg-none"
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
                  <li className="mb-4 fs-5">
                    <Link to="/dashboard">
                      <a href="" className="text-decoration-none side-link">
                        <BiSolidDashboard className="side-icon fs-4 me-2" />
                        Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 fs-5">
                    <Link to="/dashboard/domain">
                        <a href="" className="text-decoration-none side-link">
                        <BiSolidBookReader className="side-icon fs-4 me-2" />
                        Domaines
                        </a>
                    </Link>
                  </li>
                  <li className="mb-4 fs-5">
                    <Link to="/dashboard/livraison" className='text-decoration-none'>
                      <a href="" className="text-decoration-none side-link">
                        <BiUpload className="side-icon fs-4 me-2" />
                        Livraisons
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 fs-5">
                    <Link to="/dashboard/list_apprenants">
                      <a href="" className="text-decoration-none side-link">
                        <PiStudentBold className="side-icon fs-4 me-2" />
                        Ètudiants
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 fs-5">
                    <a href="" className="text-decoration-none side-link">
                      <BsFillChatRightFill className="side-icon fs-4 me-2" />
                      Messagerie
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-100 mt-5">
                <Link to="/">
                  <Button variant="primary" className="">
                    Déconnexion
                  </Button>
                </Link>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar
