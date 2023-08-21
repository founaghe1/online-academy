import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Programmer from "../../../Assets/programmer.png";
import Marketer from "../../../Assets/content-strategy.png";
import Designer from "../../../Assets/web-design.png";
import { Link } from "react-router-dom";
import "./domain.css";

const Domain = () => {
  
  return (
    <div className='container'>
      <h1>Les domaines de formation</h1>

      <div className='row'>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/sous-domaine-programmation'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item1 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img
                  variant='top'
                  className='img-fluid d-flex'
                  src={Programmer}
                />
              </div>
              <Card.Body>
                <Card.Title>Programmation</Card.Title>
                <Card.Text>10 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link to='/sous-domaine-marketing' className='join d-flex right-0'>
            <Card
              style={{ width: "15rem" }}
              className='_grid item2 violetclair shadow'
            >
              <div className='img_card p-4 d-flex violet'>
                <Card.Img variant='top' className='img-fluid' src={Marketer} />
              </div>
              <Card.Body>
                <Card.Title>Marketing Digital</Card.Title>
                <Card.Text>07 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link to='/sous-domaine-design' className='join d-flex right-0'>
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 blueclair shadow'
            >
              <div className='img_card p-4 d-flex blue'>
                <Card.Img variant='top' className='img-fluid' src={Designer} />
              </div>
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Text>08 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Domain;
