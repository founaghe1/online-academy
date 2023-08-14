/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";

function Analysemarche() {
  return (
    <>
      <h2>VOIR COURS ANALYSE DU MARCHE</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "50rem" }} className='car mx-auto'>
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
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=IboxRS49q8M' />
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
            <Card style={{ width: "50rem " }} className='car mx-auto'>
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
            <Card style={{ width: "50rem" }} className="car mx-auto">
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
                  <div className='video-responsive'>
                    <ReactPlayer url='  https://www.youtube.com/watch?v=4Q5K39aPIbI' />
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
      </div>
    </>
  );
}

export default Analysemarche;
