import React from 'react'
import { BsSearch, BsSliders, BsBellFill } from "react-icons/bs";
import { PiPencilSimpleLineDuotone } from "react-icons/pi"
import avatar from "../../medias/avatar.jpg"
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './navbarappt.css'
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const navbarappt = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><span><h1>Dashboard</h1></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home ">
                                <div class="group ms-5 mt-3 me-auto">
                                    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                        </g>
                                    </svg>
                                    <input placeholder="Search" type="search" class="input" />
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <button class="btn">
                                    <span><h4>Mes coachs</h4></span>
                                </button>
                            </Nav.Link>
                            <ul class="ms-auto list-unstyled  d-flex align-items-center navList">
                        <li>
                            <a href="/">
                                <BsBellFill className='fs-5 text-black' />
                            </a>
                        </li>
                        <li >
                            <div className='d-flex align-items-center'>
                                <img src={avatar} class="rounded-4 " alt="" width="50" />
                                <p className='d-none d-sm-inline'>
                                    <br />
                                    <span>Bb Yacine</span>
                                    <br />
                                    <span>ydk@gmail.com</span>
                                </p>
                                <div class="dropdown d-lg-none d-md-none">


                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="/">Bb Yacine</a></li>
                                        <li><a class="dropdown-item" href="/">ydk@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/">

                            <Nav className="ms-auto">
                                    <Nav.Link href="#home">
                                        <Button
                                            className="btn btn-secondary text-white add"
                                            onClick={handleShow}
                                        >
                                            <PiPencilSimpleLineDuotone className='fs-4 text-white' />

                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title >
                                                    <h3>Modifier le profil</h3>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="my-3">
                                                <div className=' d-flex justify-content-center align-items-center mb-3'>
                                                <div >
                                                    <a href="">
                                                         <img src={avatar} class="rounded-circle shadow" alt="" width="80" />
                                                        </a>
                                                </div>
                                                </div>
                                                <div className="row align-items-baseline">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                        <FloatingLabel controlId="floatingInput" label="Nom">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="princesse"
                                                            />
                                                        </FloatingLabel>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                        <FloatingLabel controlId="floatingInput" label="Prenom">
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
                                                    className="btn btn-secondary text-white fw-bold"
                                                    onClick={handleClose}
                                                >
                                                    Fermer
                                                </Button>
                                                <Button
                                                    className="btn btn-secondary text-white save"
                                                    onClick={handleClose}
                                                >
                                                    Enregistrer
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Nav.Link>

                                </Nav>

                            </a>
                        </li>

                    </ul>
                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </>
    )
}

export default navbarappt
