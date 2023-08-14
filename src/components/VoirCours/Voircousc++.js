/** @format */

// import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";

function Voircourc() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS C++</h2>
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
                <Card.Link href='https://www.youtube.com/watch?v=f3UVQPbw32w&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx'>
                  https://www.youtube.com/watch?v=f3UVQPbw32w&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=f3UVQPbw32w&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx' />
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
                <Card.Title>Tache2:LES VARIABLES </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=2CzOycVN-FY&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx&index=9'>
                  https://www.youtube.com/watch?v=2CzOycVN-FY&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx&index=9
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=2CzOycVN-FY&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx&index=9' />
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
                <Card.Title>Tache3: LES OPERATEURS</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=CZ03XvQySsY&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx&index=6'>
                  https://www.youtube.com/watch?v=CZ03XvQySsY&list=PLrSOXFDHBtfFKOzlm5iCBeXDTLxXdmxpx&index=6
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
      </div>
    </>
  );
}

export default Voircourc;
