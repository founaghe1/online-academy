/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Voircourdiago() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS DJANGO</h2>
      <div className='container mt-5'>
        <Row className='justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='car'>
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
                  https://www.youtube.com/watch?v=iBGhDHtysAA&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem " }} className='car'>
              <Card.Body>
                <Card.Title>Tache2:LES FICHIERS STATIQUE </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=_jfryi6pEOM&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=5'>
                  https://www.youtube.com/watch?v=_jfryi6pEOM&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=5
                </Card.Link>
              </Card.Body>
              <button type='button' className='btn w-10 ms-auto text-white'>
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-center '>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='car'>
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
                  https://www.youtube.com/watch?v=xNPiqBCftc8&list=PLrSOXFDHBtfED_VFTa6labxAOPh29RYiO&index=6
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

export default Voircourdiago;
