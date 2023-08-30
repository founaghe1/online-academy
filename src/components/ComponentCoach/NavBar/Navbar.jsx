import React from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import avatar from "../../../medias/avatar.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/Firebase";
import { updateProfile, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import utilisateur from "../../../Assets/utilisateur.png";

const Navbar = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shownoc, setShownoc] = useState(false);

  const handleClosenoc = () => setShownoc(false);
  const handleShownoc = () => setShownoc(true);

  const user = JSON.parse(localStorage.getItem("users")) || null;

  // const [showEdit, setShowEdite] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // function deconnection
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
        displayName:
          editedUser.prenom + " " + editedUser.nom + " " + editedUser.email,
      });

      updateUser(editedUser); // Update user state

      setEditing(false);
      setShow(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <nav>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="d-flex justify-content-end align-items-center gap-5">
            <div class="input-group ">
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
                <IoMdNotifications
                  className="notif-icon fs-2 fw-bold"
                  onClick={handleShownoc}
                />
                <div
                  className="modal show"
                  style={{ display: "block", position: "initial" }}
                >
                  <Modal show={shownoc} onHide={handleClosenoc}>
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
                        Modal body text goes here. Modal body text goes here
                        Modal body text goes here Modal body text goes here{" "}
                      </p>
                      <p className="d-flex justify-content-end fw-bold">
                        {" "}
                        16 Aout 2023, 11:19
                      </p>

                      <h4>
                        <span>Online-Academy</span>
                      </h4>
                      <p>
                        Modal body text goes here. Modal body text goes here
                        Modal body text goes here Modal body text goes here{" "}
                      </p>
                      <p className="d-flex justify-content-end fw-bold">
                        {" "}
                        14 Aout 2023, 17:53
                      </p>

                      <h4>
                        <span>Online-Academy</span>
                      </h4>
                      <p>
                        Modal body text goes here. Modal body text goes here
                        Modal body text goes here Modal body text goes here{" "}
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
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btntoggle dropdown-toggle rounded-3 mb-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={utilisateur} alt="" className="rounded-circle" />
                  </button>
                  <ul className="dropdown-menu profil shadow">
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
                      <>
                        <p className="px-3">
                          {user?.prenom} {user?.nom}
                        </p>
                        <p className="px-3">{user?.email}</p>
                      </>
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
