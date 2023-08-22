/** @format */
import { Link } from "react-router-dom";
// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";

function Voircourjs() {
  return (
    <>
      <h2 className='text-center'>TACHES</h2>
      <div className='container mt-5'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache1: INTRODUCTION AU JAVASCRIPT </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=lDO14MA0C_o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=2'>
                  https://www.youtube.com/watch?v=lDO14MA0C_o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=2<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=lDO14MA0C_o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=2' />
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
                <Card.Title>Tache2:LES VARIABLES EN JAVASCRIP</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=9jGQLBaw32Q&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=6'>
                  https://www.youtube.com/watch?v=9jGQLBaw32Q&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=6<br></br>
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
                <Card.Title>
                  Tache2: MANIPULATION DES DOM EN JAVASCRIPT
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=sXwPfnsKGiE&t=154s'>
                  https://www.youtube.com/watch?v=sXwPfnsKGiE&t=154s<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=sXwPfnsKGiE&t=154s' />
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
                <h1>QUIZZ</h1>
                <p>
                  Apres avoir suivi les cours les quizzes sont obligatoires
                  cliqué sur le button pour demarer
                </p>
              </Card.Body>
              <Link to='/javascrip' className='join '>
                <button className='butt btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Voircourjs;
