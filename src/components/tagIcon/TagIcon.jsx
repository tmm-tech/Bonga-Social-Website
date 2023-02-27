import React, { useState } from 'react';
import { Users } from '../../dummyData';

function TagIcon() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const handleTagClick = () => {
    setShowModal(true);
  };

  const handleFriendSelect = (user) => {
    setSelectedFriends([...selectedFriends, user]);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleTagClick}>
        <i className="fa fa-tag"></i>
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Select friends to tag</h2>

            <ul>
              {Users.map((user) => (
                <li key={user.id}>
                  <label>
                    <input type="checkbox" onChange={() => handleFriendSelect(user)} />
                    {user.username}
                  </label>
                </li>
              ))}
            </ul>

            <button onClick={handleModalClose}>Tag</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TagIcon;