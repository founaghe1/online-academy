import React from "react";
import "./sidebar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { RiMenuUnfoldFill } from "react-icons/ri";
import logo from "../../../medias/rrr.jpeg";
import {
  BiSolidDashboard,
  BiSolidBookReader,
  BiUpload,
  BiLogOut,
} from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { BsFillChatRightFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
import { BiLogOutCircle } from "react-icons/bi";
import { RiLogoutCircleFill  } from 'react-icons/ri'

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users")) || null;

  const logOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("users");
      navigate("/", { replace: true });
    } catch (error) {
      alert("Erreur de deconnection, veuillez verifier votre connection");
      console.error(error);
    }
  };

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

        <Offcanvas
          id="sidebarCoach"
          show={show}
          onHide={handleClose}
          responsive="lg"
          className=""
        >
          <Offcanvas.Header  >
            <div className="w-100 text-end">
              <RiLogoutCircleFill onClick={handleClose} className="me-3 fs-1 closeSidb"/>
            </div>
          
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="side-coach-menu">
            <div className="vh-100 border-end ps-lg-3 pe-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="" className="img-fluid mb-3 side-logo" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-unstyled">
                  <Link
                    to="/coach/dashboard"
                    className="text-decoration-none side-link menuLiCoach"
                  >
                    <li className="mb-4 fs-5  pe-4 py-1 ps-2">
                      <BiSolidDashboard className="side-icon fs-4 me-2" />
                      Dashboard
                    </li>
                  </Link>
                  <Link
                    to="/coach/dashboard/domain"
                    className="text-decoration-none side-link menuLiCoach"
                  >
                    <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                      <BiSolidBookReader className="side-icon fs-4 me-2" />
                      Domaines
                    </li>
                  </Link>
                    <Link
                      to="/coach/dashboard/livraison"
                      className="text-decoration-none side-link menuLiCoach"
                    >
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                      <BiUpload className="side-icon fs-4 me-2" />
                      Livraisons
                  </li>
                    </Link>
                    <Link
                      to="/coach/dashboard/list_apprenants"
                      className="text-decoration-none side-link menuLiCoach"
                    >
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                      <PiStudentBold className="side-icon fs-4 me-2" />
                      Ètudiants
                  </li>
                    </Link>
                    <Link
                      to="/coach/dashboard/messagerie"
                      className="text-decoration-none side-link menuLiCoach"
                    >
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                      <BsFillChatRightFill className="side-icon fs-4 me-2" />
                      Messagerie
                  </li>
                    </Link>
                </ul>
              </div>
              <div className="w-100 mt-3 ps-sm-4 ps-md-1">
                
                  <button className="btn logout px-1 py-0 btnDecon" onClick={logOut}>
                    <BiLogOutCircle className="fw-bold fs-2 me-1" />
                    <span className="fw-bold">Déconnexion</span>
                  </button>
                
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
