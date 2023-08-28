import React from 'react';
import "./CourCard.css";


const CourCard = () => {

  

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
            <div className="card shadow-lg cour-number">
              <div className="card-body">
                <p>
                  <span className="fs-1 fw-bold">21</span> Cours
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
            <div className="card shadow-lg cour-start">
              <div className="card-body">
                <p>
                  <span className="fs-1 fw-bold">10</span> Cours commencés
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
            <div className="card shadow-lg cour-done">
              <div className="card-body">
                <p>
                  <span className="fs-1 fw-bold">2</span> Cours terminés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourCard
