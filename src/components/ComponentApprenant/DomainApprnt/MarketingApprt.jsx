import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import "./domain.css";
import { Link } from "react-router-dom";
import Indtomark from "../../../Assets/digitalMarketing.png";
import Socialmedia from "../../../Assets/social-media.png";
import Growth from "../../../Assets/growth.png";

const Marketing = () => {

  return (
    <div className='container'>
      <h1>Les sous-domaines du Marketing Digital</h1>

      <div className='row'>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/sous-domaine-marketing/etude'
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
                  src={Indtomark}
                />
              </div>
              <Card.Body>
                <Card.Title>Introduction au marketing digital</Card.Title>
                <Card.Text>10 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/sous-domaine-marketing/developpement'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item2 violetclair shadow'
            >
              <div className='img_card p-4 d-flex violet'>
                <Card.Img
                  variant='top'
                  className='img-fluid'
                  src={Socialmedia}
                />
              </div>
              <Card.Body>
                <Card.Title>Se démarquer sur les réseaux sociaux</Card.Title>
                <Card.Text>07 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/sous-domaine-marketing/booter'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 blueclair shadow'
            >
              <div className='img_card p-4 d-flex blue'>
                <Card.Img variant='top' className='img-fluid' src={Growth} />
              </div>
              <Card.Body>
                <Card.Title>Comment Booster ses Stats</Card.Title>
                <Card.Text>08 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Marketing