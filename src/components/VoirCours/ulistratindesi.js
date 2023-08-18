/** @format */

import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Ulistration() {
  return (
    <>
      <h2 className='text-center'>TACHES</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
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
                  <div className='video-responsive'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=O-Z_eN2WmOk&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U' />
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
              <button
                type='button'
                className='btn w-10 ms-auto text-white  butt'
              >
                Demarer
              </button>
            </Card>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
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
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=Ka8fcqb6fjU&list=PLFT1RuQiwwb4CnmpsS2_WcJquYgHcOx5U&index=4' />
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
                <h1>QUIZZ</h1>
                <p>
                  Apres avoir suivi les cours les quizzes sont obligatoires
                  cliqué sur le button pour demarer
                </p>
              </Card.Body>
              <Link to='/ullustrator' className='join '>
                <button className='btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Ulistration;
