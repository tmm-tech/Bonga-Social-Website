import React from 'react';
import "./tagIcon.css";
import { Users } from '../../dummyData';

function TagIcon() {

  return (
    <div className="tag-box">
      <h3 className="tag-header">Tag Friends</h3>
      {Users.map((user) => (
        <div className="tagWrapper" key={user.id}>
          <input type="checkbox" />
          <div className="tagWrapperLeft">
            <img src={user.profilePicture} alt="" className="profilePicture" />
            <span>{user.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TagIcon;