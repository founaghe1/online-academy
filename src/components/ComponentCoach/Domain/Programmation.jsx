import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./domain.css";
import { Link } from "react-router-dom";
import HTMLCSS from "../../../Assets/coding.png";
import Bootstrap from "../../../Assets/bootstrap.png";
import Javascript from "../../../Assets/js.png";
import PHP from "../../../Assets/php.png";
import Django from "../../../Assets/django.png";
import Csharp from "../../../Assets/c-sharp.png"; 

const Programmation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <h1>Les sous-domaines de la Programmation</h1>
      <div className="join pt-3">
        <button className="add_domain rounded-3" onClick={handleShow}>
          <span>Ajouter</span>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajout de sous-domaine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add_file">
              <label htmlFor="illustration">Image du sous-domaine :</label>
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
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-6 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item1 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={HTMLCSS}
              />
            </div>
            <Card.Body>
              <Card.Title>HTML/CSS</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
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
                src={Bootstrap}
              />
            </div>
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
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
                src={Javascript}
              />
            </div>
            <Card.Body>
              <Card.Title>JAVASCRIPT</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span> </Card.Text>
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
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={PHP}
              />
            </div>
            <Card.Body>
              <Card.Title>PHP</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link to="" className="join d-flex right-0">
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
            className="_grid item3 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Django}
              />
            </div>
            <Card.Body>
              <Card.Title>PHP</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link to="" className="join d-flex right-0">
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
            className="_grid item3 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Csharp}
              />
            </div>
            <Card.Body>
              <Card.Title>PHP</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link to="" className="join d-flex right-0">
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
      </div>
    </div>
  );
};

export default Programmation;
