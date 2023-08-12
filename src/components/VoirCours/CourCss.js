/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Courcss() {
  return (
    <>
      <h2>VOIR COURS CSS</h2>
      <div className='container mt-5 mx-auto'>
        <Row>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "50rem" }} className='card'>
              <Card.Body>
                <Card.Title>
                  Tache1:LES SELECTEURS et LES PROPIERTES CSS
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=_uzbSxE8AaM&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=19'>
                  https://www.youtube.com/watch?v=_uzbSxE8AaM&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=19
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
                  Tache2:LES COMMENTAIRE ET LES INDENTATION EN CSS
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=NgIp0Is-HCk&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=21'>
                  https://www.youtube.com/watch?v=NgIp0Is-HCk&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=21
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
                <Card.Title>Tache 3: Le CONCEPT D'HERITAGE EN CSS</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=iKTJeEuIUj0&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=24'>
                  https://www.youtube.com/watch?v=iKTJeEuIUj0&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3&index=24
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

export default Courcss;
