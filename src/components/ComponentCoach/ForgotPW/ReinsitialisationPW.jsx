import React from "react";
import "./Reinsitialisation.css";

const ReinsitialisationPW = () => {
  return (
    <div>
      
      <div className="login-box">
      <h3 className="text-light mb-4 text-center">Reinsitialisation du mot de passe</h3>
        <form>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Confirm Password</label>
          </div>
          <center>
            <a href="#">
              Reintialiser
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ReinsitialisationPW;
