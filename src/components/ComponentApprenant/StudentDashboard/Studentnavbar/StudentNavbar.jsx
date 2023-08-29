import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./StudentNavbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/Firebase";
import { updateProfile, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const StudentNavbar = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || null);
  const user = JSON.parse(localStorage.getItem("users")) || null;
  const [show, setShow] = useState();
  // const [showEdit, setShowEdite] = useState(false);
  const [editing, setEditing] = useState(false); 
  const [editedUser, setEditedUser] = useState(user); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

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


  // modif profile

  const handleEdit = () => {
    setEditing(true);
    setShow(true);
  };

   // Define a function to update the user state
   const updateUser = (newUser) => {
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
        displayName: editedUser.prenom + " " + editedUser.nom +" "+ editedUser.email,
      });
      

      updateUser(editedUser); // Update user state

      setEditing(false);
      setShow(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="d-flex justify-content-end align-items-center gap-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <AiOutlineSearch className="fs-4 fw-bold search-icon" />
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Recherche"
              aria-label="Recherche"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex justify-content-end align-items-center gap-3">
            <div>
              {/* Modal pour notifs */}

              <IoMdNotifications
                className="notif-icon fs-4 fw-bold"
                onClick={handleShow}
              />
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
              >
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h3>Notifications</h3>
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="noc">
                    <h4>
                      <span>Online-Academy</span>
                    </h4>
                    <p>
                      Modal body text goes here. Modal body text goes here Modal
                      body text goes here Modal body text goes here{" "}
                    </p>
                    <p className="d-flex justify-content-end fw-bold">
                      {" "}
                      16 Aout 2023, 11:19
                    </p>

                    <h4>
                      <span>Online-Academy</span>
                    </h4>
                    <p>
                      Modal body text goes here. Modal body text goes here Modal
                      body text goes here Modal body text goes here{" "}
                    </p>
                    <p className="d-flex justify-content-end fw-bold">
                      {" "}
                      14 Aout 2023, 17:53
                    </p>

                    <h4>
                      <span>Online-Academy</span>
                    </h4>
                    <p>
                      Modal body text goes here. Modal body text goes here Modal
                      body text goes here Modal body text goes here{" "}
                    </p>
                    <p className="d-flex justify-content-end fw-bold">
                      {" "}
                      14 Aout 2023, 18:02
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            
            <div id="profil">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://avatars.dicebear.com/v2/male/55c6a0641adadaa4af04809a28329ec4.svg"
                    alt=""
                    className="rounded-circle"
                  />
                </button>
                <ul className="dropdown-menu">
                  {editing ? (
                    <li>
                      <input
                        type="text"
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
                      <p className="dropdown-item">
                        {user?.email}
                      </p>
                    </li>
                  )}
                  
                  <li>
                    <a className="dropdown-item" onClick={handleEdit}>
                      <span className="update-profil">Modifier profil</span>
                    </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
