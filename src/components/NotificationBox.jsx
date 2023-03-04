import React from 'react';
import './NotificationBox.css';
import { FiberManualRecord } from '@mui/icons-material';

function NotificationBox({notifications}) {

  return (
    <div className="notification-box">
      <h3 className="notification-header">Notifications</h3>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-message">
          <FiberManualRecord/>
          <span className="message-text">{notification.message}</span>
        </div>
      ))}
    </div>
  );
}

export default NotificationBox;
