import { useState } from "react";
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

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Offcanvas.Body className="sidebare">
            <div className="vh-100 w-100 border-end">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid mb-3 "
                  id="side-student-logo"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mb-5">
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
                      to="/cch/dashboard/cours"
                      className="text-decoration-none side-link"
                    >
                      <BiSolidBookReader className="side-icon fs-4 me-2" />
                      Cours
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
                    <Link to="" className="text-decoration-none side-link">
                      <FaChalkboardTeacher className="side-icon fs-4 me-2" />
                      Coachs
                    </Link>
                  </li>
                  <li className="mb-4 fs-5 menuLi pe-4 py-1 ps-2">
                    <Link to="" className="text-decoration-none side-link">
                      <BsFillChatRightFill className="side-icon fs-4 me-2" />
                      Messagerie
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-100 mt-1 py-3 d-flex justify-content-center align-items-center">
                <Button variant="" className="btnDecon">
                  <BiLogOut className="logout-icon fs-4 me-2" /> Déconnexion
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar;
