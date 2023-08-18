import React from 'react'
import "../ChatPage.css";

const MessageItem = () => {
  return (
    <div class="card shadow-lg mb-2">
      <div class="card-body w-100 d-flex justify-content-start align-items-baseline gap-2 ">
        <div>
          <img
            src="https://avatars.dicebear.com/v2/male/1f89ba390c56d2022297a339daab4a9c.svg"
            alt="profil"
            id='img-sender'
          />
        </div>
        <div className="name">
          <p>Makhan Diakho</p>
        </div>
      </div>
    </div>
  );
}

export default MessageItem
