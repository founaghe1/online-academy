import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './NotificationsCoachs.css'
const NotificationsCoachs = () => {
  return (
    <>
       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
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
    </div>
    </>
  )
}

export default NotificationsCoachs
