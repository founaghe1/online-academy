/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Voircourphp() {
  return (
    <>
      <h2>VOIR COURS PHP</h2>
      <div className='container mt-5'>
        <Row className=''>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }} className='card'>
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
                  https://www.youtube.com/watch?v=cWoq5znh0vw&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD
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
                <Card.Title>Tache2:LES VARIABLES </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=UnqJwiIPbag&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=5'>
                  https://www.youtube.com/watch?v=UnqJwiIPbag&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=5
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 '>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }}>
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
                  https://www.youtube.com/watch?v=zFqdht5bFJY&list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&index=7
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

export default Voircourphp;
