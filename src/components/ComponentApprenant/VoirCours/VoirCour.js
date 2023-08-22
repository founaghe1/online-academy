
// import { useState } from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


function Voircour() {
  return (
    <>
      <h2 className='text-center'>TACHES De HTML & CSS</h2>
      <Container className='container mt-5'>
        <Row className='justify-content-center align-items-center '>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>tache 1:LES BASES EN HTML ET CSS </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center fs-4'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3' className="cardLink">
                  https://www.youtube.com/playlist?list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3<br></br>
                  <div className='video-responsive '>
                    <ReactPlayer url='https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=1' />
                  </div>
                </Card.Link>
              </Card.Body>
              <button
                type='button'
                className='btn w-10 ms-auto text-white butt'
              >
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center align-items-center '>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem " }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>tache2:Création d'une page html</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center fs-4'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=rRt-yvGQST0&t=6s'>
                  https://www.youtube.com/watch?v=rRt-yvGQST0&t=6s<br></br>
                  <div className='video-responsive vid '>
                    <ReactPlayer url='https://www.youtube.com/watch?v=rRt-yvGQST0&t=6s' />
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
            <Card style={{ width: "45rem" }} className='car mx-auto '>
              <Card.Body>
                <Card.Title>
                  tache2: Les elementes, les balises et les attributs en html
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center fs-4'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=nwpARFlhjXQ&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=7'>
                  https://www.youtube.com/watch?v=nwpARFlhjXQ&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=7<br></br>
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
               <p className="fs-4">Apres avoir suivi les cours les quizzes sont obligatoires cliqué sur le button pour demarer</p>
              </Card.Body>
              <Link to='/question' className='join '>
                <button className='butt btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Voircour;
