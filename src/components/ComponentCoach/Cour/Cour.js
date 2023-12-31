/** @format */
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Table from "react-bootstrap/Table";

import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "./modal.css";
// import ReactPlayer from "react-player";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/Firebase";
// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player";

function Coure() {
  const [usersList, setUsersList] = useState([]);
  const [newSousDomaine, setNewSousDomaine] = useState("");
  const [newDebut, setNewDebut] = useState("");
  const [newDurée, setNewDurée] = useState("");
  const [newDomaine, setNewDomaine] = useState("");
  const [newurl, setNewurl] = useState("");
  const [cours, setCours] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({
    SousDomaine: "",
    Durée: "",
    url: "",
    Domaine:"",
  });
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

  const openEditModal = (user) => {
    setEditingUser({
      id: user.id,
      SousDomaine: user.SousDomaine,
      Durée: user.Durée,
      url: user.url,
      Domaine:user.Domaine
    });
    setEditModalOpen(true);
  };
  // fonction pour fermer la fenêtre modale d'édition
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingUser({
      SousDomaine: "",
      Durée: "",
      url: "",
      Domaine:"",
    });
  };

  // Fonction pour mettre à jour l'utilisateur

  const enregistre = async () => {
    if ( newDurée === "" || newurl === "" || newDomaine === "" || newSousDomaine === "") {
      alert("Veuillez remplir tous les champs du formulaire.");
      return false;
    }
    await addDoc(usersCollectionRef, {
      SousDomaine: newSousDomaine,
      Durée: newDurée,
      Debut: newDebut,
      url: newurl,
      Domaine:newDomaine,
    });
    setNewSousDomaine("");
    setNewDurée("");
    setNewurl("");
    setNewDomaine("");
    window.location.reload();
  };
  
  console.log(enregistre);
  const deleteUser = async (id) => {
    const userDoc = doc(usersCollectionRef, id);
    await deleteDoc(userDoc);
  };

  

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

  useEffect(() => {
    const q = query(collection(db, "cours"));
    onSnapshot(q, (querySnapshot) => {
      const cours = [];
      querySnapshot.forEach((doc) => {
        cours.push(doc.data().SousDomaine, doc.data().url, doc.data().Durée,doc.data().Domaine);
      });
      const getUsers = async () => {
        
       
        const data = await getDocs(usersCollectionRef);
        setCours(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
      
    });
  }, []);
 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClose = () => setShow(false);
  return (
    <>
      <div className=''>
        <div className='cotainer-fluid  justify-content-end  coursbg pe-5 mt-5'>
          <Button variant='' onClick={handleShow} className='but'>
            Ajouter Cours
          </Button>
        </div>

        <div className='coursbg'>
          <Modal show={show} onHide={handleClose} id='videchamp'>
            <Modal.Header closeButton className='for '>
              <Modal.Title>Ajout Taches</Modal.Title>
            </Modal.Header>

            <Form className='for p-3'>
              <Form.Group
                as={Row}
                className='mb-3'
                controlId='formPlaintextPassword'
              >
                <Form.Label column sm='2' className='label'>
                  VIDEO
                </Form.Label>
                <Col sm={10} md={10}>
                  <Form.Control
                    type='url'
                    placeholder=''
                    name='image'
                    id='image'
                    onChange={(e) => setNewurl(e.target.value)}
                    className='inpu'
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
                    <option value='Programmation'>Programmation</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='Design'>Design</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className='mb-3'
                controlId='formPlaintextPassword'
              >
                <Form.Label column sm='2' className='label'>
                  Sous Domaine
                </Form.Label>
                <Col sm='10'>
                  <Form.Select
                    aria-label='Default select example'
                    value={newSousDomaine}
                    onChange={(e) => setNewSousDomaine(e.target.value)}
                    className='inpu'
                  >
                    <option></option>

                    <option value='Bootstrap'>Bootstrap</option>
                    <option value='HtmlCss'>Html Css</option>
                    <option value='Javascript'>Javascript </option>
                    <option value='PHP'>PHP </option>
                    <option value='Django'>Django </option>
                    <option value='C++'>C++ </option>
                    <option value='photoshop'> Design Photoshop </option>
                    <option value='illustrator'>Design Illustrator </option>
                    <option value='pro'>Design Premierpro</option>
                    <option value='initiation'>Design Initiatiat</option>
                    <option value=' digitale'>Marketing digitale</option>
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
                <Form.Label column sm='2' className='label'>
                  DUREE
                </Form.Label>
                <Col sm='10'>
                  <Form.Control
                    type='number'
                    placeholder=''
                    onChange={(e) => setNewDurée(e.target.value)}
                    className='inpu'
                  />
                </Col>
              </Form.Group>
            </Form>

            <div className='row ms-auto'>
              <button
                type='button'
                className='btn but  m-4'
                id='annule'
                onClick={onClose}
              >
                Annuler
              </button>

              <button
                type='button'
                className='btn but m-4 '
                id='enreg'
                onClick={enregistre}
              >
                Enregistrer
              </button>
            </div>
          </Modal>
          {/* <h1 className='bg-info w-25 text-center ms-3 rounded text-light pb-4'>
            Taches
          </h1> */}
          <div className='container'>
            {/* <div className=''> */}
            {/* <div className='row'> */}
            {/* {cours.map((user, index) => {
                  return (
                    <div className='col-lg-4 col-md-4'>
                      <div class='car mt-4 '>
                        <p key={user.id}> */}
            {/* <th>{index + 1}</th> 
                          <span>
                            <ReactPlayer
                              url={user.url}
                              controls
                              width='100%'
                              height='350px'
                            />
                          </span> 
                          <p>{user.Domaine}</p>
                          <p>{user.SousDomaine}</p>
                          <p>{user.Debut}</p>
                          <p>{user.Durée}heure</p> */}

            {/* <p className='icon d-flex justify-content-center align-items-center '>
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
                                    newDurée: "",
                                  }) 
                                }
                             >
                               <RiDeleteBinLine />
                             </button>
                           </div>
                         </p> */}
            {/* </p> */}
            {/* </div> 
                   </div> */}
            {/* ); */}
            {/* })}  */}
            {/* </div>  */}
            {/* </div>  */}
            {/* <Table responsive className='table mt-5'>
            <thead>
              <tr className='text-center'>
                <th>url</th>
                <th>Cours</th>
                <th>Debut</th>
                <th>Durée(heures)</th>
                <th>Action</th>
              </tr>
            </thead> */}

            {/* Editing Modal */}
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
                          <option value='Web Design'>Programmation</option>
                          <option value='Development Basisc'>Marketing</option>
                          <option value='Data with python'>Design</option>
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

                          <option value='Bootstrap'>Bootstrap</option>
                          <option value='HtmlCss'>Html Css</option>
                          <option value='Javscript'>Javscript </option>
                          <option value='PHP'>PHP </option>
                          <option value='Django'>Django </option>
                          <option value='C++'>C++ </option>
                          <option value='photoshop'> Design Photoshop </option>
                          <option value='illustrator'>
                            Design Illustrator
                          </option>
                          <option value='pro'>Design Premierpro</option>
                          <option value='initiation'>Design Initiatiat</option>
                          <option value='digitale'>Marketing digitale</option>
                          <option value='reseaux'>
                            Marketing reseaux sociaux
                          </option>
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
                  <Button
                    variant=''
                    className='btn-warning text-light'
                    onClick={updateUser}
                  >
                    Modifier
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coure;
