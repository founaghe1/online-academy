/** @format */
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/Firebase";

function Modale() {
  const [newCours, setNewCours] = useState("");
  const [newDurée, setNewDurée] = useState("");
  const [cours, setCours] = useState([]);

  const usersCollectionRef = collection(db, "cours");

  const enregistre = async () => {
    await addDoc(usersCollectionRef, {Cours:newCours, Durée:newDurée });
  };
  console.log(enregistre);
  //  const deleteUser = async (id) => {
  //    const userDoc = doc(usersCollectionRef, id);
  //    await deleteDoc(userDoc);
  //  };
  //  const updateUser = async (id) => {
  //    const userDoc = doc(usersCollectionRef, id);
  //    await updateDoc(userDoc, newUser);
  //  };
   useEffect(() => {
     const getUsers = async () => {
       const data = await getDocs(usersCollectionRef);
      setCours(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };

     getUsers();
   }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex justify-content-end  coursbg pe-5 mt-5'>
        <Button variant='' onClick={handleShow} className='but'>
          Ajouter
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='for'>
          <Modal.Title>Ajout Cours</Modal.Title>
        </Modal.Header>

        <Form className='for p-3'>
          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Form.Label column sm='2'>
              Photo
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                type='file'
                placeholder='debut cour'
                name='image'
                id='image'
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Form.Label column sm='2'>
              Cours
            </Form.Label>
            <Col sm='10'>
              <Form.Select
                aria-label='Default select example'
                onChange={(e) => setNewCours(e.target.value)}
              >
                <option>Cours</option>
                <option value='Web Design'>Web Design</option>
                <option value='Development Basisc'>Development Basisc</option>
                <option value='Data with python'>Data with python</option>
                <option value='Html Basisc'>Html Basisc</option>
                <option value='Javscript Basisc'>Javscript Basisc</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Form.Label column sm='2'>
              Durée
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                type='number'
                placeholder='debut cour'
                onChange={(e) => setNewDurée(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        {/* <Modal.Footer>
           <Button variant='' onClick={handleClose}  className="but">
             Ajouter
           </Button>
         </Modal.Footer> */}
        <button
          type='button'
          className='btn but w-25 ms-auto '
          onClick={enregistre}
        >
          Enregistre
        </button>
      </Modal>
    </>
  );
}

export default Modale;
