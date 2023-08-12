/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Voircourjs() {
  return (
    <>
      <h2>VOIR COURS JAVASCRIP</h2>
      <div className='container mt-5'>
        <Row>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }} className='card'>
              <Card.Body>
                <Card.Title>Tache1: INTRODUCTION AU JAVASCRIPT </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=lDO14MA0C_o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=2'>
                  https://www.youtube.com/watch?v=lDO14MA0C_o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=2
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem " }}>
              <Card.Body>
                <Card.Title>Tache2:LES VARIABLES EN JAVASCRIP</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=9jGQLBaw32Q&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=6'>
                  https://www.youtube.com/watch?v=9jGQLBaw32Q&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=6
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>
                  Tache2: MANIPULATION DES DOM EN JAVASCRIPT
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=sXwPfnsKGiE&t=154s'>
                  https://www.youtube.com/watch?v=sXwPfnsKGiE&t=154s
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Voircourjs;
