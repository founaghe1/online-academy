
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function CourBoostrap() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS BOOSTRAP</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='card'>
              <Card.Body>
                <Card.Title>Tache1:INTRODUCTION</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=rdarnjxaY3M&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F'>
                  https://www.youtube.com/watch?v=rdarnjxaY3M&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F
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
            <Card style={{ width: "45rem " }}>
              <Card.Body>
                <Card.Title>Tache2:LES CONTAINER</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=bTmsLRNP6io&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=4'>
                  https://www.youtube.com/watch?v=bTmsLRNP6io&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=4
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
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Card.Title>
                  Tache 3: LES SYSTEME DE GRID EN BOOSTRAP
                </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=Rx6qMZTrvTM&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=5'>
                  https://www.youtube.com/watch?v=Rx6qMZTrvTM&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=5
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

export default CourBoostrap;
