/** @format */
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Table from "react-bootstrap/Table";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { TbBrandPython } from "react-icons/tb";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "./modal.css";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Cour/Configurefirebase.js";


function Coure() {
  const [newCours, setNewCours] = useState("");
   const [newDebut, setNewDebut] = useState("");
  const [newDurée, setNewDurée] = useState("");
  const [newurl, setNewurl] = useState("");
  const [cours, setCours] = useState([]);
  
  // setCours({
  //   newCours: "",
  //   newDurée: "",
  // });

  const usersCollectionRef = collection(db, "cours");

  const enregistre = async () => {
    await addDoc(usersCollectionRef, { Cours: newCours, Durée: newDurée,Debut:newDebut,url:newurl });
    setNewDurée("");
    setNewCours("");
  };
  console.log(enregistre);
   const deleteUser = async (id) => {
     const userDoc = doc(usersCollectionRef, id);
     await deleteDoc(userDoc);
   };
   const updateUser = async (id) => {
     const userDoc = doc(usersCollectionRef, id);
     await updateDoc(userDoc, userDoc);
   };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setCours(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // if (newCours === "" || newDurée === "") {
      //   alert("Veuillez remplir tous les champs du formulaire.");
      //   return false;
      // }
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

      <div className='coursbg'>
        <Modal show={show} onHide={handleClose} id='videchamp'>
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
                url
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type='file' accept=".png,.jpg,.jpeg"
                  placeholder='debut cour'
                  name='image'
                  id='image'
                  onChange={(e) => setNewurl(e.target.value)}
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
                  value={newCours}
                  onChange={(e) => setNewCours(e.target.value)}
                >
                  <option></option>
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
                Debut
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type='debut'
                  placeholder='debut cour'
                  onChange={(e) => setNewDebut(e.target.value)}
                  id='cour'
                />
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
                  placeholder='dure'
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
        <h1 className='bg-info w-25 text-center ms-3 rounded text-light pb-4'>
          Cours
        </h1>
        <div className='container bg-light'>
          <Table responsive className='table mt-5'>
            <thead>
              <tr className='text-center'>
                <th>url</th>
                <th>Cours</th>
                <th>Debut</th>
                <th>Durée</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {cours.map((user, index) => {
                return (
                  <tr key={user.id}>
                    {/* <th>{index + 1}</th> */}
                    <td>{user.url}</td>
                    <td>{user.Cours}</td>
                    <td>{user.Debut}</td>
                    <td>{user.Durée}</td>

                    {/* <td>{user.statut}</td> */}
                    <td>
                      <button
                        onClick={() => {
                          updateUser(user.id);
                        }}
                        className='btn btn-primary text-left-0'
                      >
                        editer
                      </button>

                      <button
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                        className='btn btn-danger text-left-50'
                      >
                        supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <div
                    className='icon1 icon d-flex justify-content-center align-items-center p-2  '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <SiMaterialdesignicons className='fs-5  mb-1 sir' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Web Design</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <Button
                    variant='info'
                    onClick={handleShow}
                    className='text-white'
                  >
                    <FiEdit />
                  </Button> 

                   <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout cour</Modal.Title>
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
                          <Form.Select aria-label='Default select example'>
                            <option>Cours</option>
                            <option value='1'>Web Design</option>
                            <option value='2'>Development Basisc</option>
                            <option value='3'>Data with python</option>
                            <option value='3'>Html Basisc</option>
                            <option value='3'>Javscript Basisc</option>
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
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Modal.Footer>
                      <Button variant='' onClick={handleClose} className='but'>
                        Modifier
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button type='button' className='btn btn-danger bg-danger'>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon2 icon d-flex justify-content-center align-items-center p-2  ms-4 '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <MdDeveloperMode className='fs-5  mb-1 sir1 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Development Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <Button
                    variant='info'
                    onClick={handleShow}
                    className='text-white'
                  >
                    <FiEdit />
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout cour</Modal.Title>
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
                          <Form.Select aria-label='Default select example'>
                            <option>Cours</option>
                            <option value='1'>Web Design</option>
                            <option value='2'>Development Basisc</option>
                            <option value='3'>Data with python</option>
                            <option value='3'>Html Basisc</option>
                            <option value='3'>Javscript Basisc</option>
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
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Modal.Footer>
                      <Button variant='' onClick={handleClose} className='but'>
                        Modifier
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button type='button' className='btn btn-danger'>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon3 icon d-flex justify-content-center align-items-center p-2  ms-3 '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <TbBrandPython className='fs-5  mb-1 sir2 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Data with python</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <Button
                    variant='info'
                    onClick={handleShow}
                    className='text-white'
                  >
                    <FiEdit />
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout cour</Modal.Title>
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
                          <Form.Select aria-label='Default select example'>
                            <option>Cours</option>
                            <option value='1'>Web Design</option>
                            <option value='2'>Development Basisc</option>
                            <option value='3'>Data with python</option>
                            <option value='3'>Html Basisc</option>
                            <option value='3'>Javscript Basisc</option>
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
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Modal.Footer>
                      <Button variant='' onClick={handleClose} className='but'>
                        Modifier
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button type='button' className='btn btn-danger'>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon4 icon d-flex justify-content-center align-items-center p-2   '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <BsFiletypeHtml className='fs-5  mb-1 sir3 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Html Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <Button
                    variant='info'
                    onClick={handleShow}
                    className='text-white'
                  >
                    <FiEdit />
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout cour</Modal.Title>
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
                          <Form.Select aria-label='Default select example'>
                            <option>Cours</option>
                            <option value='1'>Web Design</option>
                            <option value='2'>Development Basisc</option>
                            <option value='3'>Data with python</option>
                            <option value='3'>Html Basisc</option>
                            <option value='3'>Javscript Basisc</option>
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
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Modal.Footer>
                      <Button variant='' onClick={handleClose} className='but'>
                        Modifier
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button type='button' className='btn btn-danger'>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon5 icon d-flex justify-content-center align-items-center p-2 ms-2   '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <DiJavascript1 className='fs-5  mb-1 sir4 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Javscript Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <Button
                    variant='info'
                    onClick={handleShow}
                    className='text-white'
                  >
                    <FiEdit />
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ajout cour</Modal.Title>
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
                          <Form.Select aria-label='Default select example'>
                            <option>Cours</option>
                            <option value='1'>Web Design</option>
                            <option value='2'>Development Basisc</option>
                            <option value='3'>Data with python</option>
                            <option value='3'>Html Basisc</option>
                            <option value='3'>Javscript Basisc</option>
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
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Modal.Footer>
                      <Button variant='' onClick={handleClose} className='but'>
                        Modifier
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button type='button' className='btn btn-danger'>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Coure;
