/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function Ulistration() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS UlISTRATION</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='car'>
              <Card.Body>
                <Card.Title>Tache1: LA PLUME</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=O-Z_eN2WmOk&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U'>
                  https://www.youtube.com/watch?v=O-Z_eN2WmOk&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U
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
                <Card.Title>Tache2: COMBINER LES FORMES</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=NdcoEmWb4Go&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U&index=3'>
                  https://www.youtube.com/watch?v=NdcoEmWb4Go&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U&index=3
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
                <Card.Title>Tache 3: Vectoriasation d'images </Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=Ka8fcqb6fjU&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U&index=4'>
                  https://www.youtube.com/watch?v=Ka8fcqb6fjU&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U&index=4
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

export default Ulistration;
