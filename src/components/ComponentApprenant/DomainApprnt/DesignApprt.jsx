import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import "./domain.css";
import { Link } from "react-router-dom";
import Photoshop from "../../../Assets/photoshop.png";
import Illustrator from "../../../Assets/illustrator.png";
import Premierpro from "../../../Assets/premiere-pro.png";
import Initiati3d from "../../../Assets/3d-modeling.png";

const Design = () => {

  return (
    <div className='container'>
      <h1>Les sous-domaines du Design</h1>

      <div className='row'>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4'>
          <Link to='/cch/dashboard/cours/apprendre-adobe-photoshop' className='join d-flex right-0'>
            <Card
              style={{ width: "15rem" }}
              className='_grid item1 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img variant='top' className='img-fluid' src={Photoshop} />
              </div>
              <Card.Body>
                <Card.Title>Apprendre Adobe Photoshop</Card.Title>
                <p className='cours'>
                  Adobe Photoshop est un logiciel que nous aimons tous utiliser
                  pour créer des effets sur nos images.
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4'>
          <Link to='/cch/dashboard/cours/apprendre-adobe-illustrator' className='join d-flex right-0'>
            <Card
              style={{ width: "15rem" }}
              className='_grid item2 violetclair shadow'
            >
              <div className='img_card p-4 d-flex violet'>
                <Card.Img
                  variant='top'
                  className='img-fluid'
                  src={Illustrator}
                />
              </div>
              <Card.Body>
                <Card.Title>Apprendre Adobe Illustrator</Card.Title>
                <Card.Text>
                  Le logiciel Illustrator permet de créer des images
                  vectorielles. C’est un outil qu’on peut utiliser pour la
                  création
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4'>
          <Link to='/cch/dashboard/cours/apprendre-adobe-premier-pro' className='join d-flex right-0'>
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 blueclair shadow'
            >
              <div className='img_card p-4 d-flex blue'>
                <Card.Img
                  variant='top'
                  className='img-fluid'
                  src={Premierpro}
                />
              </div>
              <Card.Body>
                <Card.Title>Apprendre Adobe Premier Pro</Card.Title>
                <p className='cours text-center'>
                  Renforcez vos compétences de designer avec Photoshop ! Vous
                  apprendrez à éditer
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/cch/dashboard/cours/initiation-au-3D'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 blueclair shadow'
            >
              <div className='img_card p-4 d-flex blue'>
                <Card.Img
                  variant='top'
                  className='img-fluid'
                  src={Initiati3d}
                />
              </div>
              <Card.Body>
                <Card.Title>Initiation au 3D</Card.Title>
                <p className='cours  text-center'>
                  La 3D est en passe de devenir un incontournable pour créer des
                  maquettes de produit, des visuels de marque, des designs
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Design