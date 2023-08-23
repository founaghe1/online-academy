import React from "react";
import "./Admin.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch } from "react-icons/ai";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import {BiSolidLeftArrow , BiSolidRightArrow} from 'react-icons/bi'

// firebase
import { db } from "../../firebase/Firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// fireBase
const [usersList, setUsersList] = useState([]);
const [newUsersNom, setNewUsersNom] = useState("")
const [newUsersPrenom, setNewUsersPrenom] = useState("")
const [newUsersEmail, setNewUsersEmail] = useState("")
const [newUsersMdp, setNewUsersMdp] = useState("")
const [newUsersStatus, setNewUsersStatus] = useState("")
// fetch users list
const usersCollectionRef = collection(db, 'users')

const getUsersList = async () =>{
  try{
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      id: doc.id, ...doc.data()
    }))
    setUsersList(filteredData);
  }catch(err){
    console.error("Error getting documents: ", err);
  }
};

useEffect(() =>{
  // call the function here to fetch all the user list in realtime
  getUsersList();
}, []);

const onSubmitUsers = async () =>{
  try{
    await addDoc(usersCollectionRef, {
      nom : newUsersNom, prenom :  newUsersPrenom, email : newUsersEmail, mdp : newUsersMdp, status : newUsersStatus
    });
    // Réinitialisation des champs après la soumission du formulaire
    // resetForm();
    setNewUsersNom('');
    setNewUsersPrenom('');
    setNewUsersEmail('');
    setNewUsersMdp('');
    setNewUsersStatus('');

    getUsersList();
    alert('User added successfully');
    // window.location.reload();


  } catch(err){
    console.error(err);
  }
}



  // filter

  const [filterName, setFilterName] = useState("");
  
  

  const [selectedStatus, setSelectedStatus] = useState("Tout");

  // paginnation

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  // filter
  // const utilisateurs = ([
  //   {
  //     nom: "Mohamed",
  //     email: "Moha@gmail.com",
  //     motDePasse: "moha123",
  //     statut: "coach",
  //   },
  //   {
  //     nom: "Jacob",
  //     email: "jacob@gmail.com",
  //     motDePasse: "jacob1425",
  //     statut: "étudiant",
  //   },
  //   {
  //     nom: "Larry",
  //     email: "larry@gmail.com",
  //     motDePasse: "larry",
  //     statut: "coach",
  //   },
  //   {
  //     nom: "Mark",
  //     email: "mark@gmail.com",
  //     motDePasse: "mark1245",
  //     statut: "étudiant",
  //   },
  //   {
  //     nom: "marieame",
  //     email: "marie@gmail.com",
  //     motDePasse: "marie@14253",
  //     statut: "coach",
  //   },
  //   {
  //     nom: "Ali",
  //     email: "alib@gmail.com",
  //     motDePasse: "alia0.12",
  //     statut: "étudiant",
  //   },
  //   {
  //     nom: "kali",
  //     email: "kali@gmail.com",
  //     motDePasse: "kalia123",
  //     statut: "coach",
  //   },
  //   {
  //     nom: "Mark",
  //     email: "markiss@gmail.com",
  //     motDePasse: "mark1245",
  //     statut: "étudiant",
  //   },
  // ]);

  

  // const filteredUsers = utilisateurs
  //   .filter((user) => {
  //     const nameMatch = user.nom
  //       .toLowerCase()
  //       .includes(filterName.toLowerCase());

  //     if (selectedStatus === "Tout") {
  //       return nameMatch;
  //     } else {
  //       return (
  //         nameMatch &&
  //         user.statut.toLowerCase() === selectedStatus.toLowerCase()
  //       );
  //     }
  //   })
  //   .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <>
      <div className="vh-100">
        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary text-dark">
            <Container>
              <Navbar.Brand href="#home" className="fs-1 text-bold">
                Admin
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">
                    <Button
                      className="btn btn-secondary text-light add"
                      onClick={handleShow}
                    >
                      Ajouter
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Ajout étudiant ou coach </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="my-5">
                        <div className="row align-items-baseline">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Nom"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Thiam"
                                onChange={(e) => setNewUsersNom(e.target.value)}
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
                                placeholder="Baba"
                                onChange={(e) => setNewUsersPrenom(e.target.value)}
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
                                placeholder="baba@gmail.com"
                                onChange={(e) => setNewUsersEmail(e.target.value)}
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
                                onChange={(e) => setNewUsersMdp(e.target.value)}
                              />
                            </FloatingLabel>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <Form.Select
                              aria-label="Default select example"
                              className="selectModal"
                              onChange={(e) => setNewUsersStatus(e.target.value)}
                            >
                              <option value="status">Statut</option>
                              <option value="coach">Coach</option>
                              <option value="apprenant">Apprenant</option>
                              
                            </Form.Select>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="btn btn-secondary text-dark fw-bold"
                          onClick={handleClose}
                        >
                          Fermer
                        </Button>
                        <Button
                          className="btn btn-secondary text-dark save"
                          onClick={onSubmitUsers}
                        >
                          Enregistrer
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <button className="btn btn-danger text-light logout">
                      Déconnection
                    </button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="row my-3">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Card className="carte shadow-lg mb-3">
                <Card.Body>
                  <p className="fs-4">
                    <span className="nombre fs-1 fw-bold">6</span> Coachs
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Card className="carte shadow-lg mb-3">
                <Card.Body>
                  <p className="fs-4">
                    <span className="nombre fs-1 fw-bold">125</span> Etudiants
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mb-5">
            <div className="d-flex justify-content-between align-items-center">
              {/* input Cherche */}
              <div>
                <InputGroup.Text id="basic-addon1">
                  <AiOutlineSearch />
                  <Form.Control
                    placeholder="Rechercher par nom"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    aria-label="Rechercher"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup.Text>
              </div>
              <div>
                <Form.Select
                  className="shadow-lg"
                  aria-label="Default select example"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="Tout">Tout</option>
                  <option value="Coach">coachs</option>
                  <option value="étudiant">etudiants</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Profil</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>Mot de passe</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {usersList.map((user) => (
                  <tr >
                    <td>{/* Affichage du profil */}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.mdp}</td>
                    <td>{user.status}</td>
                    <td className="d-flex gap-3">
                      <button className="btn btn-primary text-dark">
                        <BsPencilSquare className="text-light fw-bold fs-5" />
                      </button>
                      <button className="btn btn-danger text-dark">
                        <BsTrash className="text-light fw-bold fs-5" />
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
                
            {/* Paginnation buttons */}
            <div className="pagination d-flex justify-content-end pt-2 pb-5">
              <button
                className="btn btnPrecedn shadow d-flex justify-content-center align-items-center"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
               <BiSolidLeftArrow /> Précédent
              </button>
              <span className="fw-bold d-flex justify-content-center align-items-center">Page{`(s)`} {currentPage}</span>
              <button
                className="btn btn-secondary btnSuiv shadow d-flex justify-content-center align-items-center"
                disabled={usersList.length < usersPerPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Suivant <BiSolidRightArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
