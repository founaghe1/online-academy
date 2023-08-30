import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NotificationsCoachs.css'
const NotificationsCoachs = () => {

  const [show, setShow] = useState(false);
   

   const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Notification 1',
      content: 'Contenu de la notification 1',
      timestamp: '14 Aout 2023, 17:53',
    },
    {
      id: 2,
      title: 'Notification 2',
      content: 'Contenu de la notification 2',
      timestamp: '14 Aout 2023, 18:02',
    },
    // ... autres notifications
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNotification = () => {
    toast.success('Notification affichée avec succès !');
  };
 
  return (
    <>
       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
       <button className="btn btn-secondary text-white add"
                      onClick={handleShow}>
                            
                    </button>


                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          <h3>Modifier le profil</h3>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="my-3">
                        
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="btn btn-secondary text-white fw-bold"
                          onClick={handleClose}
                        >
                          Fermer
                        </Button>
                        <Button
                          className="btn btn-secondary text-white save"
                          onClick={handleClose}
                        >
                          Enregistrer
                        </Button>
                      </Modal.Footer>
                    </Modal>
       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>

        <Modal.Body className='noc'>
            <h4><span>Online-Academy</span></h4>
          <p>Modal body text goes here. Modal body text goes here Modal body text goes here Modal body text goes here </p>
          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 17:53</p>

          <h4><span>Online-Academy</span></h4>
          <p>Modal body text goes here. Modal body text goes here Modal body text goes here Modal body text goes here </p>
          <p className='d-flex justify-content-end fw-bold'> 14 Aout 2023, 18:02</p>
        </Modal.Body>

   
      </Modal.Dialog>
       {/* Ajoutez le ToastContainer en bas de votre composant */}
       <ToastContainer />
    </div>
    </>
  )
}

export default NotificationsCoachs
