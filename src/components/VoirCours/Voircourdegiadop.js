/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Potoshop() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS PHOTOSHOP</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='car'>
              <Card.Body>
                <Card.Title>Tache1: COMMENT faire un design flyer</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=oIEJG5XAB08'>
                  https://www.youtube.com/watch?v=oIEJG5XAB08
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
                <Card.Title>Tache2:POSTER DESIGN IN PHOTOSHOP</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=-CIFGBcbPPg'>
                  https://www.youtube.com/watch?v=-CIFGBcbPPg
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
            <Card style={{ width: "45rem" }} className='car'>
              <Card.Body>
                <Card.Title>Tache 3: PRO POSTER DESIGN</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=yFHfOlEVcxs'>
                  https://www.youtube.com/watch?v=yFHfOlEVcxs
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

export default Potoshop;
