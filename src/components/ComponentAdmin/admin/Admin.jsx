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
import { AiFillEye } from "react-icons/ai";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import utlisateur from '../../../Assets/utilisateur.png'

// firebase
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
} from "firebase/auth";

// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    phone: "",
    domaine: "",
    status: "",
    assignCoach: "",
  });

  // filter
  const [filterName, setFilterName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Tout");
  const [selectedDomaine, setSelectedDomaine] = useState("Domaine");

  // paginnation
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  // voir infos user
  const [viewingUser, setViewingUser] = useState(null);

  // liste des coaches
  const [coachesList, setCoachesList] = useState([]);
  //état pour stocker l'ID du coach sélectionné
  // const [selectedCoachId, setSelectedCoachId] = useState("");

  const getCoachesList = async () => {
    try {
      const coachesData = await getDocs(collection(db, "users"));
      const coaches = coachesData.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.status === "Coach");
      setCoachesList(coaches);
      getUsersList();
    } catch (err) {
      console.error("Error getting coaches list: ", err);
    }
  };

  useEffect(() => {
    getUsersList();
    getCoachesList();
  }, []);

  // fireBase
  const [usersList, setUsersList] = useState([]);
  const [newUsersNom, setNewUsersNom] = useState("");
  const [newUsersPrenom, setNewUsersPrenom] = useState("");
  const [newUsersEmail, setNewUsersEmail] = useState("");
  const [newUsersMdp, setNewUsersMdp] = useState("");
  const [newUsersStatus, setNewUsersStatus] = useState("");
  const [newUsersAssignCoach, setNewUsersAssignCoach] = useState("");
  const [newUsersPhone, setNewUsersPhone] = useState("");
  const [newUsersDomaine, setNewUsersDomaine] = useState("");
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

  // useEffect(() => {
  //   // call the function here to fetch all the user list in realtime
  //   getUsersList();
  // }, []);

  const onSubmitUsers = async () => {
    try {
      // Enregistrement dans l'authentification
      const userCreateAuth = await createUserWithEmailAndPassword(
        auth,
        newUsersEmail,
        newUsersMdp
      );
      await setDoc(doc(usersCollectionRef, userCreateAuth.user.uid), {
        nom: newUsersNom,
        prenom: newUsersPrenom,
        email: newUsersEmail,
        mdp: newUsersMdp,
        phone: newUsersPhone,
        domaine: newUsersDomaine,
        status: newUsersStatus,
        assignCoach: newUsersAssignCoach,
        id: userCreateAuth.user.uid,
      });

      getUsersList();
      toast.success("User added successfull !", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
    toast.success("User deleted successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // fetch users list

  useEffect(() => {
    // call the function here to fetch all the user list in realtime
    getUsersList();
  }, []);

  // filter
  const filteredUsers = usersList
    .filter((user) => {
      const nameMatch = user.nom
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const statusMatch =
        selectedStatus === "Tout" ||
        user.status.toLowerCase() === selectedStatus.toLowerCase();

      const domaineMatch =
        selectedDomaine === "Domaine" ||
        user.domaine.toLowerCase() === selectedDomaine.toLowerCase();

      return nameMatch && statusMatch && domaineMatch;
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
      phone: user.phone,
      domaine: user.domaine,
      status: user.status,
      assignCoach: user.assignCoach,
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
      phone: "",
      domaine: "",
      status: "",
      assignCoach: "",
    });
  };

  // Fonction pour mettre à jour l'utilisateur

  const updateUser = async () => {
    const userDocRef = doc(db, "users", editingUser.id);
    try {
      await updateDoc(userDocRef, {
        nom: editingUser.nom,
        prenom: editingUser.prenom,
        email: editingUser.email,
        mdp: editingUser.mdp,
        phone: editingUser.phone,
        domaine: editingUser.domaine,
        status: editingUser.status,
        assignCoach: editingUser.assignCoach,
      });

      getUsersList(); // Rafraîchir la liste des utilisateurs après la mise à jour
      closeEditModal();
      toast.success("User updated successfull !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Fonction pour ouvrir la fenêtre modale de vue
  const openViewModal = (user) => {
    setViewingUser(user);
  };

  // Fonction pour fermer la fenêtre modale de vue
  const closeViewModal = () => {
    setViewingUser(null);
  };

  // recuperer le nombre de Users
  const countUsers = usersList.filter(
    (user) => user.status === "Coach" || user.status === "Apprenant"
  ).length;

  // recuperer le nombre d'Coach
  const countCoaches = usersList.filter(
    (user) => user.status === "Coach"
  ).length;
  // recuperer le nombre d'apprenant
  const countApprenant = usersList.filter(
    (user) => user.status === "Apprenant"
  ).length;

  // function deconnection
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

  // update user profile
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  const userAD = JSON.parse(localStorage.getItem("users")) || null;

  // const [showEdit, setShowEdite] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(userAD);

  // modif profile

  const handleEdit = () => {
    setEditing(true);
    setShow(true);
  };

  // Define a function to update the user state
  const updateUserAD = (newUser) => {
    setUsers(newUser);
    localStorage.setItem("users", JSON.stringify(newUser));

    const userDocRef = doc(db, "users", auth.currentUser.uid); // Change "users" to the actual collection name
    updateDoc(userDocRef, {
      prenom: newUser.prenom,
      nom: newUser.nom,
      email: newUser.email,
    });
  };

  const handleSave = async () => {
    try {
      // Update email in Firebase Auth
      if (editedUser.email !== user.email) {
        await updateEmail(auth.currentUser, editedUser.email);
      }

      await updateProfile(auth.currentUser, {
        displayName:
          editedUser.prenom + " " + editedUser.nom + " " + editedUser.email,
      });

      updateUserAD(editedUser); // Update user state

      setEditing(false);
      setShow(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <ToastContainer />
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
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Phone number"
                            >
                              <Form.Control
                                type="text"
                                placeholder="+221..."
                                onChange={(e) =>
                                  setNewUsersPhone(e.target.value)
                                }
                              />
                            </FloatingLabel>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <Form.Select
                              aria-label="Default select example"
                              className="selectModal"
                              onChange={(e) =>
                                setNewUsersDomaine(e.target.value)
                              }
                            >
                              <option value="Domaine">Domain</option>
                              <option value="Programmation">
                                Programmation
                              </option>
                              <option value="Marketing">Marketing</option>
                              <option value="Design">Design</option>
                            </Form.Select>
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
                              <option value="Coach">Coach</option>
                              <option value="Apprenant">Apprenant</option>
                              <option value="Admin">Admin</option>
                            </Form.Select>
                          </div>
                          <Form.Group controlId="formAssignCoach">
                            <Form.Control
                              as="select"
                              value={newUsersAssignCoach}
                              onChange={(e) =>
                                setNewUsersAssignCoach(e.target.value)
                              }
                            >
                              <option> Assignez un coach </option>
                              {coachesList.map((coach) => (
                                <option
                                  key={coach.id}
                                  value={`${coach.nom} ${coach.prenom}`}
                                  onLoad={useEffect}
                                >
                                  {coach.nom} {coach.prenom}
                                </option>
                              ))}
                            </Form.Control>
                          </Form.Group>
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
                    <button
                      className="btn btn-danger text-light logout"
                      onClick={logOut}
                    >
                      Déconnection
                    </button>
                  </Nav.Link>
                  <div id="profil">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btntoggle dropdown-toggle rounded-3 mb-3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={utlisateur}
                          alt=""
                          className="rounded-circle"
                        />
                      </button>
                      <ul className="dropdown-menu profil shadow ps-1">
                        {editing ? (
                          <li>
                            <input
                              type="text"
                              className="profilEdi ps-2"
                              value={editedUser?.prenom}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  prenom: e.target.value,
                                })
                              }
                            />
                            <input
                              type="text"
                              className="profilEdi ps-2 my-2"
                              value={editedUser?.nom}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  nom: e.target.value,
                                })
                              }
                            />
                            <input
                              type="text"
                              className="profilEdi ps-2"
                              value={editedUser?.email}
                              onChange={(e) =>
                                setEditedUser({
                                  ...editedUser,
                                  email: e.target.value,
                                })
                              }
                            />
                          </li>
                        ) : (
                          <li>
                            <p className="dropdown-item">
                              {user?.prenom} {user?.nom}
                            </p>
                            <p className="dropdown-item">{user?.email}</p>
                          </li>
                        )}

                        <li className="ps-3 pt-2 ">
                          {editing ? (
                            ""
                          ) : (
                            <button
                              className="btn btnModif text-light"
                              onClick={() => setEditing(!editing)}
                            >
                              Modifier profil
                            </button>
                          )}
                        </li>
                        <li className="ps-3 mt-2">
                          {editing ? (
                            <button
                              className="btn btn-success text-light"
                              onClick={handleSave}
                            >
                              Enregistrer
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger text-light logout"
                              onClick={logOut}
                            >
                              Déconnexion
                            </button>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="row my-3">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Card className="carte userCard shadow-lg mb-3">
                <Card.Body>
                  <p className="fs-4 text-success d-flex justify-content-start align-items-center">
                    <span className="nombre fs-1 fw-bold me-3">
                      {" "}
                      {countUsers}{" "}
                    </span>{" "}
                    Utilisateurs
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Card className="carte coachCard shadow-lg mb-3">
                <Card.Body>
                  <p className="fs-4 text-success d-flex justify-content-start align-items-center">
                    <span className="nombre fs-1 fw-bold me-3">
                      {countCoaches}
                    </span>
                    Coachs
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <Card className="carte apprenantCard shadow-lg mb-3">
                <Card.Body>
                  <p className="fs-4 text-success d-flex justify-content-start align-items-center">
                    <span className="nombre fs-1 fw-bold me-3">
                      {" "}
                      {countApprenant}{" "}
                    </span>{" "}
                    Apprenants
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mb-5">
            <div className="d-flex justify-content-between align-items-center">
              {/* input Cherche */}
              <div>
                <div className="InputContainer">
                  <input
                    placeholder="Rechercher par prenom"
                    id="input"
                    className="input"
                    value={filterName}
                    type="text"
                    onChange={(e) => setFilterName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Form.Select
                  className="shadow-lg"
                  aria-label="Default select example"
                  value={selectedDomaine}
                  onChange={(e) => setSelectedDomaine(e.target.value)}
                >
                  <option value="Domaine">Domaines</option>
                  <option value="Programmation">Programmation</option>
                  <option value="Marketing">Marketing Disital</option>
                  <option value="Design">Design</option>
                </Form.Select>
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
                  <option value="Admin">Admin</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row">
            <Table striped bordered hover responsive className="rounded">
              <thead>
                <tr className="text-center">
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>Mot de passe</th>
                  <th>Phone Number</th>
                  <th>Domaines</th>
                  <th>Statut</th>
                  <th>Assign Coach</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.mdp}</td>
                    <td>{user.phone}</td>
                    <td>{user.domaine}</td>
                    <td>{user.status}</td>
                    <td>{user.assignCoach}</td>
                    <td className="d-flex justify-content-center gap-3">
                      <button
                        className="btn btn-warning text-dark"
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
                      <button
                        className="btn btn-info text-dark"
                        onClick={() => openViewModal(user)}
                      >
                        <AiFillEye className="text-light fw-bold fs-5" />
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
            <Form.Group controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                value={editingUser.phone}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDom">
              <Form.Label>Domaine</Form.Label>
              <Form.Control
                as="select"
                value={editingUser.domaine}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, domaine: e.target.value })
                }
              >
                <option value="Programmtion">Programmtion</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
              </Form.Control>
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
                <option value="Admin">Admin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAssCoa">
              <Form.Label>Assign Coach</Form.Label>
              <Form.Control
                as="select"
                value={editingUser.assignCoach}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser,
                    assignCoach: e.target.value,
                  })
                }
              >
                <option> Assignez un coach </option>
                {coachesList.map((coach) => (
                  <option
                    key={coach.id}
                    value={` ${coach.nom} ${coach.prenom} `}
                  >
                    {coach.nom} {coach.prenom}
                  </option>
                ))}
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

      {/* Voir Modal */}
      <Modal show={viewingUser !== null} onHide={closeViewModal}>
        <Modal.Header>
          <Modal.Title className="w-100 h-100 modalviewTitle rounded text-light pt-2">
            {" "}
            <h3 className="text-center w-100">Détails de l'utilisateur</h3>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewingUser && (
            <div className="ps-5 modalview text-light rounded py-3">
              <p>
                <strong>Nom :</strong> {viewingUser.nom}
              </p>
              <p>
                <strong>Prénom :</strong> {viewingUser.prenom}
              </p>
              <p>
                <strong>Email :</strong> {viewingUser.email}
              </p>
              <p>
                <strong>Mot de passe :</strong> {viewingUser.mdp}
              </p>
              <p>
                <strong>Phone Number:</strong> {viewingUser.phone}
              </p>
              <p>
                <strong>Domaines:</strong> {viewingUser.domaine}
              </p>
              <p>
                <strong>Statut :</strong> {viewingUser.status}
              </p>
              <p>
                <strong>Assign Coach :</strong> {viewingUser.assignCoach}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeViewModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Admin;
