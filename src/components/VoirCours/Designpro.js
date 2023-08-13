/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";

function PRO() {
  return (
    <>
      <h2 className='text-center'>VOIR COURS PRO DESIGN</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center'>
          <Col md={6} sm={6} lg={6}>
            <Card style={{ width: "45rem" }} className='car'>
              <Card.Body>
                <Card.Title>Tache1: INTRODUCTION</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=L9guX8WREEo&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr'>
                  https://www.youtube.com/watch?v=L9guX8WREEo&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr
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
                <Card.Title>Tache2:PREPARER VOS FICHIERS</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=Hc_ze6v9ofc&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr&index=2'>
                  https://www.youtube.com/watch?v=Hc_ze6v9ofc&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr&index=2
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
                <Card.Title>Tache 3: LES MANUPILATION DE DEPART</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p className='text-center'>
                  Ce tutoriel est a suivre et à reproduire
                </p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=wUV_XURrviY&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr&index=4'>
                  https://www.youtube.com/watch?v=wUV_XURrviY&list=PLEk7gaNrZEXcQFBBb_pzpqYY8YpstQHZr&index=4
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

export default PRO;
