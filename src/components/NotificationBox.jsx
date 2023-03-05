import React from 'react';
import './NotificationBox.css';


function NotificationBox({ notifications }) {

  return (
    <div className="notification-box">
      <h3 className="notification-header">Notifications</h3>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-message">
          <div className="notification-messageLeft">
            {notification.icon}
          </div>
          <div className="notification-messageRight">
            <p className="message-text">{notification.message} </p>
            <p className="time-posted">{notification.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationBox;
