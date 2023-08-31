import React from 'react'
import "../ChatPage.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {BiRightArrow} from 'react-icons/bi'
import MessageItem from './MessageItem';


const Messages = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="primary"
        className="d-lg-none btn btn-light mt-2"
        onClick={handleShow}
      >
        <BiRightArrow />
        Tous les discutions
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="side-chat"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary">
            Online Academy
          </Offcanvas.Title>
        </Offcanvas.Header>
          <h5 className="text-secondary ps-3">Vos messages</h5>
        <Offcanvas.Body id='les-messages'>
          <div>
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Messages
