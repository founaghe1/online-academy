/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Voircourdiago() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS DJANGO</h2>
      <div className='container mt-5'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache1: INTRODUCTION </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3 className=''>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=iBGhDHtysAA&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO'>
                  https://www.youtube.com/watch?v=iBGhDHtysAA&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=iBGhDHtysAA&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO' />
                  </div>
                </Card.Link>
              </Card.Body>
              <button
                type='button'
                className='btn w-10 ms-auto text-white  butt'
              >
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem " }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache2:LES FORMULAIRES </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=3e0SjrSgWzk&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=11'>
                  https://www.youtube.com/watch?v=3e0SjrSgWzk&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=11<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=3e0SjrSgWzk&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=11' />
                  </div>
                </Card.Link>
              </Card.Body>
              <button
                type='button'
                className='btn w-10 ms-auto text-white  butt'
              >
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache3: LES BALISES ET FILTER</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=xNPiqBCftc8&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=6'>
                  https://www.youtube.com/watch?v=xNPiqBCftc8&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=6<br></br>
                </Card.Link>
              </Card.Body>
              <button
                type='button'
                className='btn w-10 ms-auto text-white  butt'
              >
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center align-items-center '>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <h1>QUIZZ</h1>
                <p>
                  Apres avoir suivi les cours les quizzes sont obligatoires
                  cliqué sur le button pour demarer
                </p>
              </Card.Body>
              <Link to='/django' className='join '>
                <button className='butt btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Voircourdiago;
