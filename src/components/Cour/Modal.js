/** @format */

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function Modale() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex justify-content-end mt-2 p-5'>
        <Button variant='' onClick={handleShow} className="but" >
          Ajouter
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='for'>
          <Modal.Title>Ajout Cours</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
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
              <Form.Control type='file' placeholder='debut cour' name="image" id="image" />
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
              <Form.Control type='number' placeholder='debut cour' />
            </Col>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant='' onClick={handleClose} className="but">
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
