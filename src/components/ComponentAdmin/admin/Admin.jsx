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
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// firebase
import { db } from "../../firebase/Firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modale Edite
  const [editModalOpen, setEditModalOpen] = useState(false);
  // État pour suivre les données de l'utilisateur en cours d'édition
  const [editingUser, setEditingUser] = useState({
    
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
    status: ""
  });


  // filter
  const [filterName, setFilterName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Tout");

  // paginnation
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  // fireBase
  const [usersList, setUsersList] = useState([]);
  const [newUsersNom, setNewUsersNom] = useState("");
  const [newUsersPrenom, setNewUsersPrenom] = useState("");
  const [newUsersEmail, setNewUsersEmail] = useState("");
  const [newUsersMdp, setNewUsersMdp] = useState("");
  const [newUsersStatus, setNewUsersStatus] = useState("");
  // fetch users list
  const usersCollectionRef = collection(db, "users");

  const getUsersList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsersList(filteredData);
    } catch (err) {
      console.error("Error getting documents: ", err);
    }
  };

  useEffect(() => {
    // call the function here to fetch all the user list in realtime
    getUsersList();
  }, []);

  const onSubmitUsers = async () => {
    try {
      await addDoc(usersCollectionRef, {
        nom: newUsersNom,
        prenom: newUsersPrenom,
        email: newUsersEmail,
        mdp: newUsersMdp,
        status: newUsersStatus,
      });
      // Réinitialisation des champs après la soumission du formulaire
      // resetForm();
      setNewUsersNom("");
      setNewUsersPrenom("");
      setNewUsersEmail("");
      setNewUsersMdp("");
      setNewUsersStatus("");

      getUsersList();
      alert("User added successfully");
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  // delete
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsersList();
    alert("Utilisateur supprimé avec succés");
  };

  // filter
  const filteredUsers = usersList
    .filter((user) => {
      const nameMatch = user.nom
        .toLowerCase()
        .includes(filterName.toLowerCase());

      if (selectedStatus === "Tout") {
        return nameMatch;
      } else {
        return (
          nameMatch &&
          user.status.toLowerCase() === selectedStatus.toLowerCase()
        );
      }
    })
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  // fonction pour ouvrir la fenêtre modale d'édition
  const openEditModal = (user) => {
    setEditingUser({
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      mdp: user.mdp,
      status: user.status,
    });
    setEditModalOpen(true);
  };

  // fonction pour fermer la fenêtre modale d'édition
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingUser({
      nom: "",
      prenom: "",
      email: "",
      mdp: "",
      status: "",
    });
  };

  // Fonction pour mettre à jour l'utilisateur
  
  const updateUser = async () => {
    const userDocRef = doc(db, 'users', editingUser.id);
    try {
      await updateDoc(userDocRef, {
        nom: editingUser.nom,
        prenom: editingUser.prenom,
        email: editingUser.email,
        mdp: editingUser.mdp,
        status: editingUser.status
      });

      getUsersList(); // Rafraîchir la liste des utilisateurs après la mise à jour
      closeEditModal();
      alert('User updated successfully');
    } catch (err) {
      console.error(err);
    }
  };

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
                                onChange={(e) =>
                                  setNewUsersPrenom(e.target.value)
                                }
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
                                onChange={(e) =>
                                  setNewUsersEmail(e.target.value)
                                }
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
                              onChange={(e) =>
                                setNewUsersStatus(e.target.value)
                              }
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
                  <option value="Coach">Coachs</option>
                  <option value="Apprenant">Apprenant</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row">
            <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Profil</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>Mot de passe</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{/* Affichage du profil */}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.mdp}</td>
                    <td>{user.status}</td>
                    <td className="d-flex gap-3">
                      <button
                        className="btn btn-primary text-dark"
                        onClick={() => openEditModal(user)}
                      >
                        <BsPencilSquare className="text-light fw-bold fs-5" />
                      </button>
                      <button
                        className="btn btn-danger text-dark"
                        onClick={() => deleteUser(user.id)}
                      >
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
                <BiSolidLeftArrow />
                <BiSolidLeftArrow />
              </button>
              <span className="fw-bold d-flex justify-content-center align-items-center px-3  nbrPages rounded text-light mx-1">
                {" "}
                {currentPage}
              </span>
              <button
                className="btn btn-secondary btnSuiv shadow d-flex justify-content-center align-items-center"
                disabled={filteredUsers.length < usersPerPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <BiSolidRightArrow />
                <BiSolidRightArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Editing Modal */}
      <Modal show={editModalOpen} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={editingUser.nom}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, nom: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                value={editingUser.prenom}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, prenom: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formMdp">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                value={editingUser.mdp}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, mdp: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Statut</Form.Label>
              <Form.Control
                as="select"
                value={editingUser.status}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, status: e.target.value })
                }
              >
                <option value="Coach">Coach</option>
                <option value="Apprenant">Apprenant</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={updateUser}>
            Mettre à jour
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Admin;
