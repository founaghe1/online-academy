import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD:src/components/ComponentCoach/Domain/Domain.jsx
import Programmer from "../../../Assets/programmer.png";
import Marketer from "../../../Assets/content-strategy.png";
import Designer from "../../../Assets/web-design.png";
=======
import "./domain.css";
>>>>>>> a55026de1064ec70df558421c99bbbdc48ad4654:src/components/ComponentCoach/Domain.jsx
import { Link } from "react-router-dom";
import "./domain.css";
// import Programmer from "../../Assets/programmer.png";
// import Marketer from "../../Assets/content-strategy.png";
// import Designer from "../../Assets/web-design.png";


const Marketing = () => {
  return (
    <div className="container">
<<<<<<< HEAD:src/components/ComponentCoach/Domain/Domain.jsx
      <h1>Domaines de formation</h1>
=======
      <h1>Les sous-domaines du Marketing Digital</h1>
>>>>>>> a55026de1064ec70df558421c99bbbdc48ad4654:src/components/ComponentCoach/Domain.jsx
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
                src="{Programmer}"
              />
            </div>
            <Card.Body>
              <Card.Title>Programmation</Card.Title>
              <Card.Text>10 sous-domaines</Card.Text>
              <Link
                to="/programmation"
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
                src="{Marketer}"
              />
            </div>
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text>07 sous-domaines</Card.Text>
              <Link
                to="/marketing"
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
                src="{}"
              />
            </div>
            <Card.Body>
              <Card.Title>Design</Card.Title>
              <Card.Text>08 sous-domaines</Card.Text>
              <Link to="/design" className="join d-flex right-0">
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