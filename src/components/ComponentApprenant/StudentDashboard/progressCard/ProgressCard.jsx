import React from 'react'
import "./ProgressCard.css"
import logo from "../sidebar/logo.png";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';


const ProgressCard = () => {
  const now = 60;
  return (
    <div className="container">
      <h1>Historique</h1>
      <div className="card shadow mb-3">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
            <div className="d-flex justify-content-start align-items-baseline gap-4">
              <div className="profil-cour rounded-pill">
                <img src={logo} alt="" />
              </div>
              <div>
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3 m-auto">
            <ProgressBar now={now} label={`${now}%`} />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3 d-flex justify-content-center align-items-center">
            <Button variant="primary" className="btnReprendre">
              Continuer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard
