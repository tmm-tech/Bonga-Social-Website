import React from 'react'
import { Posts } from '../dummyData';
import '../friends.css';

function Notify() {
  return (
    <div className='fullyNotify'>
      <h3>All Notification</h3>
      {Posts.map((onePost) => {
        
        return  <div className="oneNotification">
          <img src={process.env.PUBLIC_URL + onePost.photo} alt="not" srcset="" />
          <div className="notificationDets">
            <p>Updated to {onePost.desc}</p>
            <span>{onePost.date}</span>
          </div>
        </div>
      })}

    </div>
  )
}

export default Notify