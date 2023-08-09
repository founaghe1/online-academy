import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import "./domain.css";
import { Link } from "react-router-dom";
import Photoshop from "../../../assets/photoshop.png";
import Illustrator from "../../../assets/illustrator.png";
import Premierpro from "../../../assets/premiere-pro.png";
import Initiati3d from "../../../assets/3d-modeling.png";

const Design = () => {

  return (
    <div className="container">
      <h1>Les sous-domaines du Design</h1>

      <div className="row">
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item1 orangeclair shadow"
          >
            <div className="img_card p-4 d-flex orange">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Photoshop}
              />
            </div>
            <Card.Body>
              <Card.Title>Appremdre Adobe Photoshop</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
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
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item2 violetclair shadow"
          >
            <div className="img_card p-4 d-flex violet">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Illustrator}
              />
            </div>
            <Card.Body>
              <Card.Title>Apprendre Adobe Illustrator</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
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
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 blueclair shadow"
          >
            <div className="img_card p-4 d-flex blue">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Premierpro}
              />
            </div>
            <Card.Body>
              <Card.Title>Apprendre Adobe Premier Pro</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
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
        <div className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4">
          <Card
            style={{ width: "15rem" }}
            className="_grid item3 blueclair shadow"
          >
            <div className="img_card p-4 d-flex blue">
              <Card.Img
                variant="top"
                className="img-fluid"
                src={Initiati3d}
              />
            </div>
            <Card.Body>
              <Card.Title>Initiation au 3D</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
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

export default Design