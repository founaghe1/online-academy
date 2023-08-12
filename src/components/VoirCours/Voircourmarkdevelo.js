/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Voircourdevelop() {
  return (
    <>
      <h2>VOIR COURS DEVELOPPEMENT COMMERCIAL</h2>
      <div className='container mt-5 mx-auto'>
        <Row>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='card'>
              <Card.Body>
                <Card.Title>Tache1:INTRODUCTION</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=MQwQ9JUwvMo'>
                  https://www.youtube.com/watch?v=MQwQ9JUwvMo
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
            <Card style={{ width: "45rem " }}>
              <Card.Body>
                <Card.Title>Tache2:COMMENT FIDELISE UN CLIENT</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=6J5-zDk0FS4'>
                  https://www.youtube.com/watch?v=6J5-zDk0FS4
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
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Card.Title>Tache 3: OBJECTIF ET SOURCE</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=amo6DNeLotQ&t=125s'>
                  https://www.youtube.com/watch?v=amo6DNeLotQ&t=125s
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

export default Voircourdevelop;
