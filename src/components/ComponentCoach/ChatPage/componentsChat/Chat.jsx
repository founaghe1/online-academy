import React from "react";
import "../ChatPage.css";

const Chat = () => {
  return (
    <div className="container-fluid vh-100 gap-0">
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
            <p>Makha Diakhon</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-link text-decoration-none text-dark fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Voir Profil
          </button>

          <div
            class="modal fade"
            id="exampleModal"
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
    </div>
  );
};

export default Chat;
