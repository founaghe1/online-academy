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
import utilisateur from '../../../../Assets/utilisateur.png'
import { FiMail } from 'react-icons/fi'
import { MdDriveFileRenameOutline } from 'react-icons/md'



const StudentNavbar = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || null);
  const user = JSON.parse(localStorage.getItem("users")) || null;
  const [show, setShow] = useState();
  // const [showEdit, setShowEdite] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showEditing, setShowEditing] = useState(false);  
  const [editedUser, setEditedUser] = useState(user); 

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  };

  

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

  // const handleEdit = () => {
  //   setEditing(true);
  //   // setShow(true);
  //   setShowEditing(true);
  // };

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
      // setShow(false);
      setShowEditing(false);
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
                <button type="button"
                  class="btn   rounded-pill mb-3  iconotif"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {/* Modal pour notifs */}
                  <IoMdNotifications
                    className="notif-icon fs-2 fw-bold"
                    onClick={handleShow}
                  />
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <ul class="dropdown-menu noc">
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here <br /> </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                      <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                      <hr />
                       <li>
                        <p class="dropdown-item">  <h4><span>Online-Academy</span></h4>
                          <p>Modal body text goes here. Modal body text goes here </p>
                          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p></p>
                      </li>
                    </ul>
                  
                  </div>
                </button>
              </div>
            <div id="profil">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btntoggle dropdown-toggle rounded-3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={utilisateur}
                    alt=""
                    className="rounded-circle"
                  />
                </button>
                <ul className="dropdown-menu profil shadow" show={showEditing} >
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
                        className="profilEdi my-2 ps-2"
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
                      <p className="dropdown-item">
                        <span> <MdDriveFileRenameOutline className="fw-bold text-info fs-3" /> </span>
                        {user?.prenom} {user?.nom}
                      </p>
                      <p className="dropdown-item">
                        <span> <FiMail className="fw-bold text-info fs-3" /> </span>
                        {user?.email}
                      </p>
                    </>
                  )}
                  
                  <li className="ps-3 pt-2 ">
                      {editing ? (
                        <button
                          className="btn btn-success text-light"
                          onClick={handleSave}
                        >
                          Enregistrer
                        </button>
                      ) : (
                        <button
                          className="btn btnModif text-light"
                          onClick={() => setEditing(!editing)}
                        >
                          Modifier profil
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
