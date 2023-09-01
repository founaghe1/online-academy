import React from 'react'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const RecuperationCourdesiginitiat = () => {
  const [usersList, setUsersList] = useState([]);
  const [cours, setCours] = useState([]);
  const [newSousDomaine, setNewSousDomaine] = useState("");
  const [newDebut, setNewDebut] = useState("");
  const [newDurée, setNewDurée] = useState("");
  const [newDomaine, setNewDomaine] = useState("");
  const [newurl, setNewurl] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({
    SousDomaine: "",
    Durée: "",
    url: "",
    Domaine: "",
  });

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingUser({
      SousDomaine: "",
      Durée: "",
      url: "",
      Domaine: "",
    });
  };
  const openEditModal = (user) => {
    setEditingUser({
      id: user.id,
      SousDomaine: user.SousDomaine,
      Durée: user.Durée,
      url: user.url,
      Domaine: user.Domaine,
    });
    setEditModalOpen(true);
  };
  const usersCollectionRef = collection(db, "cours");

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
    getUsersList();
  }, []);
  const recupertache = async () => {
    const querySnapshot = await getDocs(collection(db, "cours"));
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((cours) => cours.SousDomaine === "initiation");
    setCours(data);
  };

  useEffect(() => {
    recupertache();
  }, []);

  const updateUser = async () => {
    const userDocRef = doc(db, "cours", editingUser.id);
    try {
      await updateDoc(userDocRef, {
        SousDomaine: editingUser.SousDomaine,
        Durée: editingUser.Durée,
        url: editingUser.url,
        Domaine: editingUser.Domaine,
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
  useEffect(() => {
    // call the function here to fetch all the user list in realtime
    getUsersList();
  }, []);

  const deleteUser = async (id) => {
    const userDoc = doc(usersCollectionRef, id);
    await deleteDoc(userDoc);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClose = () => setShow(false);
  return (
    <>
      <h1>Cours Design Initiation</h1>
      <div className='container'>
        <div className='row'>
          {cours.map((user, id) => {
            return (
              <div className='col-lg-4 col-md-4'>
                <div class='car mt-4 '>
                  <p key={user.id}>
                    {/* <th>{index + 1}</th> */}
                    <span>
                      <ReactPlayer
                        url={user.url}
                        controls
                        width='100%'
                        height='350px'
                      />
                    </span>
                    {/* <p>{user.Domaine}</p> */}
                    <p>{user.SousDomaine}</p>
                    <p>{user.Debut}</p>
                    <p>{user.Durée}heure</p>

                    <p className='icon d-flex justify-content-center align-items-center '>
                      <div className='ms-auto'>
                        <button
                          onClick={() => openEditModal(user)}
                          className='btn btn-primary text-left-0'
                        >
                          <FiEdit />
                        </button>

                        <button
                          className='btn btn-danger text-left-50 m-2'
                          onClick={() =>
                            deleteUser(user.id, {
                              newDomaine: "",
                              newSousDomaine: "",
                              newCours: "",
                              newDurée: "",
                            })
                          }
                        >
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </p>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='coursbg '>
          <Modal
            show={editModalOpen}
            onHide={closeEditModal}
            id='videchamp '
            className='bg-red'
          >
            <Modal.Header closeButton>
              <Modal.Title>Modifier Tache</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-red'>
              <Form>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2'>
                    VIDEO
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      type='url'
                      placeholder=''
                      name='url'
                      id='image'
                      className='in'
                      onChange={(e) => setNewurl(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2' className='label'>
                    Domaine
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Select
                      aria-label='Default select example'
                      value={newDomaine}
                      onChange={(e) => setNewDomaine(e.target.value)}
                      className='inpu'
                    >
                      <option></option>

                      <option value='Bootatrap'>bootstrap</option>
                      <option value='HtmlCss'>HtmlCss</option>
                      <option value='Javascript'>Javascript </option>
                      <option value='PHP'>PHP </option>
                      <option value='Django'>Django </option>
                      <option value='C++'>C++ </option>
                      <option value='photoshop'> Design Photoshop </option>
                      <option value='illustrator'>Design Illustrator </option>
                      <option value='pro'>Design Premierpro</option>
                      <option value='initiation'>Design Initiatiat</option>
                      <option value='digitale'>Marketing digitale</option>
                      <option value='reseaux'>Marketing reseaux sociaux</option>
                      <option value='Booster'>Marketing Booster</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2'>
                    Sous Domaine
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Select
                      aria-label='Default select example'
                      type='cours'
                      className='in'
                      value={editingUser.SousDomaine}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          SousDomaine: e.target.value,
                        })
                      }
                    >
                      <option></option>

                      <option value='Bootatrap'>Bootstrap</option>
                      <option value='HtmlCss'>HtmlCss</option>
                      <option value='Javscript'>Javscript </option>
                      <option value='PHP'>PHP </option>
                      <option value='Django'>Django </option>
                      <option value='photoshop'> Design Photoshop </option>
                      <option value='illustrator'>Design Illustrator </option>
                      <option value='pro'>Design Premierpro</option>
                      <option value='initiation'>Design Initiatiat</option>
                      <option value='digitale'>Marketing digitale</option>
                      <option value='reseaux'>Marketing reseaux sociaux</option>
                      <option value='Booster'>Marketing Booster</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2'>
                    DUREE
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      type='number'
                      className='in'
                      value={editingUser.Durée}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          Durée: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={closeEditModal}>
                Annuler
              </Button>
              <Button variant='primary' onClick={updateUser}>
                Modifier
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default RecuperationCourdesiginitiat;
