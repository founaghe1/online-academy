import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import "./domain.css";
import { Link } from "react-router-dom";
import HTML from "../../Assets/html-5.png";
import CSS from "../../Assets/css-3.png";
import Javascript from "../../Assets/js.png";
import PHP from "../../Assets/php.png";

const Programmation = () => {
  return (
    <div className="container">
      <h1>Les sous-domaines de la Programmation</h1>
      <div className="join pt-3">
        <button className="add rounded-3"><span>Ajouter</span></button>
      </div>

      <div className="row">
        <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item1 orangeclair shadow"
          >
            <div className="p-4">
              <Card.Img
                variant="top"
                className="img-fluid d-flex orange"
                src={HTML}
              />
            </div>
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link
                to="/sous-domaine-programmation"
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
        <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item2 violetclair shadow"
          >
            <div className="p-4">
              <Card.Img
                variant="top"
                className="img-fluid violet"
                src={CSS}
              />
            </div>
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link
                to="/sous-domaine-marketing"
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
        <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 blueclair shadow"
          >
            <div className="p-4">
              <Card.Img
                variant="top"
                className="img-fluid blue"
                src={Javascript}
              />
            </div>
            <Card.Body>
              <Card.Title>JAVASCRIPT</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span> </Card.Text>
              <Link to="/sous-domaine-design" className="join d-flex right-0">
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
        <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 blueclair shadow"
          >
            <div className="p-4">
              <Card.Img
                variant="top"
                className="img-fluid blue"
                src={PHP}
              />
            </div>
            <Card.Body>
              <Card.Title>PHP</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut <span>Voir plus</span></Card.Text>
              <Link to="/sous-domaine-design" className="join d-flex right-0">
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
  );
};

export default Programmation;
