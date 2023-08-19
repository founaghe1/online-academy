import React from 'react'
import './ChatPage.css'
import Messages from './componentsChat/Messages'
import Chat from './componentsChat/Chat'
import { BiArrowBack } from 'react-icons/bi'

const ChatPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="messages" className="col-lg-4 border-end pb-3">
          <a href="../../Dashboard/Dashboard.jsx" className='text-decoration-none text-dark fw-bold'>
            <BiArrowBack /> Dashboard
          </a>
          <Messages />
        </div>
        <div id="chats" className="col-lg-8">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ChatPage
