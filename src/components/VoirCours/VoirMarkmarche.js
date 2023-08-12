/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Analysemarche() {
  return (
    <>
      <h2>VOIR COURS ANALYSE DU MARCHE</h2>
      <div className='container mt-5 mx-auto'>
        <Row>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }} className='card'>
              <Card.Body>
                <Card.Title>Tache1:INTRODUCTION DU MARKETING</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=IboxRS49q8M'>
                  https://www.youtube.com/watch?v=IboxRS49q8M
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
                <Card.Title>
                  Tache2:ANALYSES LES DONNEES DU MARKETING
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=yYRZ9TX7lRw'>
                  https://www.youtube.com/watch?v=yYRZ9TX7lRw
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
                <Card.Title>Tache 3: LES STRATEGIE DU MARKETING</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=4Q5K39aPIbI'>
                  https://www.youtube.com/watch?v=4Q5K39aPIbI
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

export default Analysemarche;
