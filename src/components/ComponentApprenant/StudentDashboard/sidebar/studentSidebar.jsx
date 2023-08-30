import React, { useState } from "react";
import "./studentSidebar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenuUnfoldFill } from "react-icons/ri";
import logo from "../../../../medias/rrr.jpeg"
import {
  BiSolidDashboard,
  BiSolidBookReader,
  BiUpload,
  BiLogOut,
} from "react-icons/bi";
import {FaChalkboardTeacher} from "react-icons/fa"
import {BsFillChatRightFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/Firebase";

function Sidebar() {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function deconnection
  const navigate = useNavigate();

  const logOut = async () =>{
    try{
      await  signOut(auth)
      navigate("/")
    }catch{
      alert("Erreur de deconnection, veuillez verifier votre connection");
    }
  }

  return (
    <>
    
      <div className="sticky-top shadow-end">
        <div className="d-lg-none d-flex justify-content-between align-items-center">
          <div>
            <Button
              variant="primary"
              className="d-lg-none"
              onClick={handleShow}
            >
              <RiMenuUnfoldFill className="fs-4 fw-bold" />
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
              <img src={logo} alt="" className="img-fluid mb-3" />
            </div>
            
            <div className="d-flex justify-content-center align-items-center">
              <ul className="list-unstyled">
                <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                  <Link to="/apprenant/dashboard" className="text-decoration-none side-link">
                      <BiSolidDashboard className="side-icon fs-4 me-2" />Dashboard
                  </Link>
                </li>
                <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                  <Link to="/apprenant/dashboard/cours" className="text-decoration-none side-link">
                      <BiSolidBookReader className="side-icon fs-4 me-2" />
                      Cours
                  </Link>
                </li>
                <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                  <Link to="/apprenant/dashboard/livraison" className="text-decoration-none side-link">
                    <BiUpload className="side-icon fs-4 me-2" />
                    Livraisons
                  </Link>
                </li>
                <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                  <Link to="/apprenant/dashboard/coach" className="text-decoration-none side-link">
                    <FaChalkboardTeacher className="side-icon fs-4 me-2" />
                    Coachs
                  </Link>
                </li>
                <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                  <Link to="/apprenant/dashboard/messagerie" className="text-decoration-none side-link">
                    <BsFillChatRightFill className="side-icon fs-4 me-2" />
                    Messagerie
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-100 mt-5 ps-3">
                <Link to="/coach/dashboard/messagerie">
                  <Button variant="primary" className=""
                    onClick={logOut}
                  >
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

export default Sidebar;
