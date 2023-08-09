import React from "react";
import "./Chat.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { AiOutlineSend } from "react-icons/ai";



const Chat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-4">
          <Card>
            <Card.Body>
              <h4>Vos messages</h4>
              <p>Mercredi 09 Août 2023</p>
              <Button
                className="chat-item w-100 d-flex justify-content-start align-items-baseline gap-2 mb-3 shadow shadow-offset-down-md"
                onClick={handleShow}
              >
                <div className="profil">
                  <img
                    src="https://avatars.dicebear.com/v2/male/1f89ba390c56d2022297a339daab4a9c.svg"
                    alt="profil"
                  />
                </div>
                <div className="name">
                  <p>Makhan Diakho</p>
                </div>
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="chat-sender">
                  <Modal.Title className="d-flex justify-content-start align-items-baseline gap-2">
                    <div className="profil">
                      <img
                        src="https://avatars.dicebear.com/v2/male/1f89ba390c56d2022297a339daab4a9c.svg"
                        alt="profil"
                      />
                    </div>
                    <div className="name">
                      <p>Makhan Diakho</p>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3 chat-box rounded-bottom ">
                  <div className="d-flex justify-content-start mb-3">
                    <card className="receved-msg w-50 p-2 rounded text-light text-start shadow-lg">
                      <p>Boy légui nak lou deal bi?</p>
                    </card>
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <card className="bg-light w-50 p-2 rounded text-dark text-end shadow-lg">
                      <p>Tracel bay</p>
                    </card>
                  </div>
                  <div className="d-flex justify-content-start mb-3">
                    <card className="receved-msg w-50 p-2 rounded text-light text-start shadow-lg">
                      <p>Gneuweul dimanche gnou dém Gorée</p>
                    </card>
                  </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <div className="w-75">
                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Message"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Envoyer un message"
                      />
                    </FloatingLabel>
                  </div>
                  <div>
                    <button className="btn send-btn">
                      <AiOutlineSend className="text-dark fw-bold fs-5" />
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
