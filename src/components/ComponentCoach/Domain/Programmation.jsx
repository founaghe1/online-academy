import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import "./domain.css";
import { Link } from "react-router-dom";
import HTMLCSS from "../../../Assets/coding.png";
import Bootstrap from "../../../Assets/bootstrap.png";
import Javascript from "../../../Assets/js.png";
import PHP from "../../../Assets/php.png";
import Django from "../../../Assets/django.png";
import Csharp from "../../../Assets/c-sharp.png"; 


const Programmation = () => {

  return (
    <div className='container-fluid'>
      <h1>Les sous-domaines de la Programmation</h1>

      <div className='row'>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-6 d-flex justify-content-center mt-4'>
          <Link
            to='/coach/dashboard/domain/programmation/html-css'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item1 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img variant='top' className='img-fluid' src={HTMLCSS} />
              </div>
              <Card.Body>
                <Card.Title>HTML/CSS</Card.Title>
                <p className='cours text-black text-center'>
                  Le HTML est donc un langage de balisage, Le CSS (Cascading
                  Style Sheets, aussi appelées feuilles de style)
                </p>

                {/* <button
                  className='orange d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button> */}
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/apprenant/dashboard/domain/programmation/bootstrap'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item2 violetclair shadow'
            >
              <div className='img_card p-4 d-flex violet'>
                <Card.Img variant='top' className='img-fluid' src={Bootstrap} />
              </div>
              <Card.Body>
                <Card.Title>BOOSTRAP</Card.Title>
                <p className='cours text-black text-center'>
                  Bootstrap est un framework CSS. Un framework correspond à un
                  ensemble de librairies regroupées
                </p>

                {/* <button
                  className='violet d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button> */}
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/coach/dashboard/domain/programmation/javascript'
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
                  src={Javascript}
                />
              </div>
              <Card.Body>
                <Card.Title>JAVASCRIPT</Card.Title>
                <p className='cours text-black text-center'>
                  JavaScript est un langage de programmation utilisé par les
                  développeurs pour concevoir des sites web interactif.
                </p>

                {/* <button
                  className='blue d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button> */}
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/coach/dashboard/domain/programmation/PHP'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img variant='top' className='img-fluid' src={PHP} />
              </div>
              <Card.Body>
                <Card.Title>PHP</Card.Title>
                <p className='cours text-black text-center'>
                  PHP est un langage de script côté serveur. Il est utilisé pour
                  développer des sites web statiques ou dynamiques ou des
                </p>

                {/* <button
                  className='orange d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button> */}
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/coach/dashboard/domain/programmation/django'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img variant='top' className='img-fluid' src={Django} />
              </div>
              <Card.Body>
                <Card.Title>Django</Card.Title>
                <p className='cours text-black text-center'>
                  Django est un framework Python de haut niveau, permettant un
                  développement rapide de sites internet, sécurisés,
                </p>

                <button
                  className='orange d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Link
            to='/coach/dashboard/domain/programmation/c++'
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item3 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
                <Card.Img variant='top' className='img-fluid' src={Csharp} />
              </div>
              <Card.Body>
                <Card.Title>C++</Card.Title>
                <p className='cours text-black'>
                  Le C++ est un langage de programmation : il permet d'écrire
                  des programmes informatiques, pour créer des applications
                  mobiles
                </p>

                {/* <button
                  className='orange d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button> */}
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programmation;
