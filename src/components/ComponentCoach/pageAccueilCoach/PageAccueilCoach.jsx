import React from "react";
import "./PageAccueilCoach.css";
import devWeb from "../../../Assets/programmation.png";
import design from "../../../Assets/conception-graphique.png";
import marketing from "../../../Assets/digitalMarketing.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Chat from "../../ComponentCoach/Chat/Chat";

const PageAccueilCoach = () => {
  return (
    <div className="accueil">
      <div className="row">
        {/* <div className='col-md-9 col-lg-9'> */}
        <div className="col-md-3 col-sm-12 colCard">
          <div className="card cart1">
            <div className="card-img web">
              <p>
                <img src={devWeb} alt="" className="modul" />
              </p>
            </div>
            <div>
              <h2 className="mt-2">Developpement web</h2>
              <p>0 nombre de leçon</p>
              <div className="btnDiv mt-md-4 mb-3">
                <button className="btn1">
                  <RiArrowRightSLine className="fs-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 colCard">
          <div className="card cart2">
            <div className="card-img design">
              <p>
                <img src={design} alt="" className="modul" />
              </p>
            </div>
            <div className="card-body">
              <h2>Design Graphique</h2>
              <p>0 nombre de leçon</p>
              <div className="btnDiv">
                <button className="btn2">
                  <RiArrowRightSLine className="fs-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 colCard">
          <div className="card cart3">
            <div className="card-img market">
              <p>
                <img src={marketing} alt="" className="modul" />
              </p>
            </div>
            <div className="card-body">
              <h2>Marketing Desital</h2>
              <p>0 nombre de leçon</p>
              <div className="btnDiv mt-md-2">
                <button className="btn3">
                  <RiArrowRightSLine className="fs-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Chat />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default PageAccueilCoach;
