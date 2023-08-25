import React from 'react'
import './sidebar.css'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { RiMenuUnfoldFill } from "react-icons/ri";
import logo from "../../../medias/rrr.jpeg";
import { BiSolidDashboard, BiSolidBookReader, BiUpload, BiLogOut } from "react-icons/bi";
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
          <Offcanvas.Body className='side-coach-menu'>
            <div className="vh-100 border-end">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="" className="img-fluid mb-3 side-logo" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-unstyled">
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link
                      to="/cch/dashboard"
                      className="text-decoration-none side-link"
                    >
                      <BiSolidDashboard className="side-icon fs-4 me-2" />
                      Dashboard
                    </Link>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link
                      to="/cch/dashboard/domain"
                      className="text-decoration-none side-link"
                    >
                      <BiSolidBookReader className="side-icon fs-4 me-2" />
                      Domaines
                    </Link>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link
                      to="/cch/dashboard/livraison"
                      className="text-decoration-none side-link"
                    >
                      <BiUpload className="side-icon fs-4 me-2" />
                      Livraisons
                    </Link>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link
                      to="/cch/dashboard/list_apprenants"
                      className="text-decoration-none side-link"
                    >
                      <PiStudentBold className="side-icon fs-4 me-2" />
                      Ètudiants
                    </Link>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link
                      to="/cch/dashboard/messagerie"
                      className="text-decoration-none side-link"
                    >
                      <BsFillChatRightFill className="side-icon fs-4 me-2" />
                      Messagerie
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-100 mt-5 d-flex justify-content-center align-items-center">
                <Link to="/">
                  <Button variant="danger" className="">
                    <BiLogOut className="fs-5" /> Déconnexion
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
