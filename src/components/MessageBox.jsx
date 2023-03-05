import React from 'react';
import './MessageBox.css';

function MessageBox({ chats }) {

  return (
    <div className="message-box">
      <h3 className="message-header">Messages</h3>
      {chats.map((chat) => (
        <div className="messageWrapper" key={chat.id}>
          <div className="messageWrapperLeft">
            <img src={chat.profilePicture} alt="" className="profilePicture"/>
          </div>
          <div className="message-containerRight">
            <p className="userName">{chat.username}</p>
            <p className="chatMessage">{chat.message}</p>
            <p className="postTime">{chat.date}</p>
          </div>
        </div>
      ))}


    </div>
  );
}

export default MessageBox;
