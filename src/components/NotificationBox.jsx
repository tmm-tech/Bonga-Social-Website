import React from 'react';
import './NotificationBox.css';


function NotificationBox({ notifications }) {

  return (
    <div className="notification-box">
      <h3 className="notification-header">Notifications</h3>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-message">
          {notification.icon}
          <p>
            <span className="message-text">{notification.message}</span>
            <span className="time-posted">{notification.date}</span>
          </p>

        </div>
      ))}
    </div>
  );
}

export default NotificationBox;
