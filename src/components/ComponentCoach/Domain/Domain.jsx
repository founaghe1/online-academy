import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Programmer from "../../../Assets/programmer.png";
import Marketer from "../../../Assets/content-strategy.png";
import Designer from "../../../Assets/web-design.png";
import "./domain.css";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="container domain">
      <div className="join pt-3 d-flex justify-content-between align-items-center">
        <h1>Domaines de formation</h1>

        <button
          type="button"
          class="btn btn-primary add_domain rounded-3 color-light"
          data-bs-toggle="modal"
          data-bs-target="#modalAjouter"
        >
          <span>Ajouter</span>
        </button>

        <div
          class="modal fade"
          id="modalAjouter"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Card
            style={{ width: "15rem" }}
            className='_grid item1 orangeclair shadow'
          >
            <div className='p-4'>
              <Card.Img
                variant='top'
                className='img-fluid d-flex orange'
                src={Programmer}
              />
            </div>
            <Card.Body>
              <Card.Title>Programmation</Card.Title>
              <Card.Text>10 sous-domaines</Card.Text>
              <Link
                to='/coach/dashboard/domain/programmation'
                className='join d-flex right-0'
              >
                <button
                  className='orange d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className='_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Card
            style={{ width: "15rem" }}
            className='_grid item2 violetclair shadow'
          >
            <div className='p-4'>
              <Card.Img
                variant='top'
                className='img-fluid violet'
                src={Marketer}
              />
            </div>
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text>07 sous-domaines</Card.Text>
              <Link
                to='/coach/dashboard/domain/marketing'
                className='join d-flex right-0'
              >
                <button
                  className='violet d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className='_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'>
          <Card
            style={{ width: "15rem" }}
            className='_grid item3 blueclair shadow'
          >
            <div className='p-4'>
              <Card.Img
                variant='top'
                className='img-fluid blue'
                src={Designer}
              />
            </div>
            <Card.Body>
              <Card.Title>Design</Card.Title>
              <Card.Text>08 sous-domaines</Card.Text>
              <Link
                to="/cch/dashboard/domain/design"
                className="join d-flex right-0"
              >
                <button
                  className='blue d-flex justify-content-center align-items-center'
                  style={{
                    fontSize: "1.8rem",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
