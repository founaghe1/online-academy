import React from "react";
import "../ChatPage.css";
import {FaRegPaperPlane} from 'react-icons/fa'

const Chat = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="head-chat d-flex justify-content-between align-items-center border-bottom pt-2 bg-light w-100 ">
        <div className="d-flex justify-content-start align-items-baseline gap-2">
          <div>
            <img
              src="https://avatars.dicebear.com/v2/male/1f89ba390c56d2022297a339daab4a9c.svg"
              alt="profil"
              id="img-sender"
            />
          </div>
          <div>
            <p>Makhan Diakho</p>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <div className="d-flex justify-content-start mb-3">
          <card className="receved-msg w-50 p-2 rounded text-light text-start shadow-lg">
            <p>Boy légui nak lou deal bi?</p>
          </card>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <card className="bg-light w-50 p-2 rounded text-dark text-end shadow-lg">
            <p>Tracel bay</p>
          </card>
        </div>
        <div className="d-flex justify-content-start mb-3">
          <card className="receved-msg w-50 p-2 rounded text-light text-start shadow-lg">
            <p>Gneuweul dimanche gnou dém Gorée</p>
          </card>
        </div>
      </div>
      <div id="response-input">
        <div className="position-absolute bottom-0 d-flex justify-content-between align-items-center gap-3">
          <div className="form-floating ">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Répondre</label>
          </div>
          <div>
            <button type="button" className="btn btn-primary p-3">
              <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
