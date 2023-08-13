import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./domain.css";
import { Link } from "react-router-dom";
import Indtomark from "../../assets/digital-marketing.png";
import Socialmedia from "../../assets/social-media.png";
import Growth from "../../assets/growth.png";

const Marketing = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <h1>Les sous-domaines du Marketing Digital</h1>
      <div className="join pt-3">
        <button className="add_domain rounded-3" onClick={handleShow}>
          <span>Ajouter</span>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajout sous-domaine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add_file">
              <label htmlFor="illustration">Image du sous-domaine:</label>
              <input
                type="file"
                id="illustration"
                name="illustration"
                accept="image/png, image/jpeg"
              />
            </div>
            <div class="input-wrapper">
              <label htmlFor="name_dom"></label>
              <input type="text" id="name_dom" name="name_dom" placeholder="Entrer le nom du domaine" class="name_dom" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button variant="default" style={{backgroundColor: "#8a70d6", color: "white"}} onClick={handleClose}>
              Valider
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row">
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item1 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid d-flex"
                src={Indtomark}
              />
            </div>
            <Card.Body>
              <Card.Title>Introduction au marketing digital</Card.Title>
              <Card.Text>10 sous-domaines</Card.Text>
              <Link
                to=""
                className="join d-flex right-0"
              >
                <button
                  className="orange d-flex justify-content-center align-items-center"
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item2 violetclair shadow"
          >
            <div className="img_card p-4 d-flex violet">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Socialmedia}
              />
            </div>
            <Card.Body>
              <Card.Title>Se démarquer sur les réseaux sociaux</Card.Title>
              <Card.Text>07 sous-domaines</Card.Text>
              <Link
                to=""
                className="join d-flex right-0"
              >
                <button
                  className="violet d-flex justify-content-center align-items-center"
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 blueclair shadow"
          >
            <div className="img_card p-4 d-flex blue">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Growth}
              />
            </div>
            <Card.Body>
              <Card.Title>Comment Booster ses Stats</Card.Title>
              <Card.Text>08 sous-domaines</Card.Text>
              <Link to="" className="join d-flex right-0">
                <button
                  className="blue d-flex justify-content-center align-items-center"
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Marketing