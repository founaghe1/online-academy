/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";

function Voircourphp() {
  return (
    <>
      <h2 className='text-center'>TACHES</h2>
      <div className='container mt-5'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache1: PRESENTATION DE PHP </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3 className=''>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=cWoq5znh0vw&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD'>
                  https://www.youtube.com/watch?v=cWoq5znh0vw&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD<br></br>
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
                <Card.Title>Tache2:LES VARIABLES </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=UnqJwiIPbag&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=5'>
                  https://www.youtube.com/watch?v=UnqJwiIPbag&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=5<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=UnqJwiIPbag&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=5' />
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
        <Row className='mt-5 justify-content-center align-items-center '>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache2: LES CONDITIONS</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=zFqdht5bFJY&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=7'>
                  https://www.youtube.com/watch?v=zFqdht5bFJY&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=7<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=zFqdht5bFJY&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=7' />
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
        <Row className='mt-5 justify-content-center align-items-center '>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache2: LES CONDITIONS</Card.Title>
              </Card.Body>
              <Link to='/question' className='join '>
                <button className='btn btn-primary'>VoirQuizzes</button>
              </Link>
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
              <Link to='/php' className='join '>
                <button className='btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Voircourphp;
