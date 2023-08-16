import React from "react";
import "./StudentNavbar.css"
import { AiOutlineSearch } from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io"
import logo from "../sidebar/logo.png"

const studentNavbar = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="d-flex justify-content-end align-items-center gap-5">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              <AiOutlineSearch className="fs-4 fw-bold search-icon" />
            </span>
            <input
              type="search"
              class="form-control"
              placeholder="Recherche"
              aria-label="Recherche"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex justify-content-end align-items-center gap-3">
            <div>
              {/* Modal pour notifs */}
              <a href="">
                <IoMdNotifications className="notif-icon fs-4 fw-bold" />
              </a>
            </div>
            <div id="profil">
              <div className="rounded-pill">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default studentNavbar;
