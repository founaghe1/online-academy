import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./StudentNavbar.css"
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io"
import logo from "../sidebar/logo.png"

const StudentNavbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="d-flex justify-content-end align-items-center gap-5">
          <div class="input-group">
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
              
                <IoMdNotifications className="notif-icon fs-4 fw-bold"   onClick={handleShow} />
                <div
                  className="modal show"
                  style={{ display: 'block', position: 'initial' }}
                >
                  

                  <Modal show={show} onHide={handleClose}>
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
              <div className="rounded-pill">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
