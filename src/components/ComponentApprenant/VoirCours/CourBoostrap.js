
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./voirCour.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function CourBoostrap() {
  return (
    <>
      <h2 className='text-center'>TACHES</h2>
      <div className='container mt-5 mx-auto'>
        <Row className='justify-content-center align-items-center'>
          <Col md={12} sm={12} lg={12}>
            <Card style={{ width: "45rem" }} className='car mx-auto'>
              <Card.Body>
                <Card.Title>Tache1:INTRODUCTION</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=rdarnjxaY3M&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F'>
                  https://www.youtube.com/watch?v=rdarnjxaY3M&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F<br></br>
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
                <Card.Title>Tache2:LES CONTAINER</Card.Title>
                {/* <Card.Subtitle className='mb-2 text-muted'> */}
                <p>Ce tutoriel est a suivre et à reproduire</p>
                {/* </Card.Subtitle> */}
                <Card.Text></Card.Text>
                <h3>Lien utiles</h3>
                <Card.Link href='https://www.youtube.com/watch?v=bTmsLRNP6io&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=4'>
                  https://www.youtube.com/watch?v=bTmsLRNP6io&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=4<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=bTmsLRNP6io&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=4' />
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
            <Card style={{ width: "45rem" }} className='car mx-auto '>
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
                  https://www.youtube.com/watch?v=Rx6qMZTrvTM&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=5<br></br>
                  <div className='video-responsive'>
                    <ReactPlayer url=' https://www.youtube.com/watch?v=Rx6qMZTrvTM&list=PL5BcU-_5Oa_o2nmu4eIVjrhxoT3jcQq8F&index=5' />
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
              <Link to='/quiss' className='join '>
                <button className='butt btn btn-primary'>Demarer</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CourBoostrap;
