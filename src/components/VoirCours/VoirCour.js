
// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import { Container } from "react-bootstrap";


function Voircour() {
  
  return (
    <>
      <h2>VOIR COURS HTML</h2>
      <Container className='container mt-5'>
        <Row>
          <Col md={4} sm={4} lg={6}>
            <Card style={{ width: "45rem" }} className='card'>
              <Card.Body>
                <Card.Title>tache 1:Les Bases de HTML </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=Tnym_6qCcNE'>
                  https://www.youtube.com/watch?v=Tnym_6qCcNE
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4} sm={4} lg={6}>
            <Card style={{ width: "45rem " }}>
              <Card.Body>
                <Card.Title>tache2:Création d'une page html</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=nlrWga5ZiuY&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=9'>
                  https://www.youtube.com/watch?v=nlrWga5ZiuY&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=9
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4} sm={4} lg={6}>
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Card.Title>
                  tache2: Les elementes, les balises et les attributs en html
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=nwpARFlhjXQ&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=7'>
                  https://www.youtube.com/watch?v=nwpARFlhjXQ&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=7
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Voircour;
