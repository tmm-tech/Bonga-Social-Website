import React from 'react'
import '../friends.css';
import { Link } from 'react-router-dom'

function OtherHeader() {
  return (
    <div className='otherHeader'>
      <div className="fullheader">
        <div className="fullheaderimage"><img src={process.env.PUBLIC_URL + 'assets/person/1.jpeg'} alt="some here" srcset="" /></div>
        <div className="followersdeets">
          <div className="editcover">
            <button>Edit cover photo</button>
          </div>
          <div className="friendsAdd">
            <p>12000 followers</p>
            <button>Add friends</button>
          </div>
        </div>
        <div className="otherheadernav">
          <div className="navname">
            <h2>Janice Griffith</h2>
            <p>Group Admin</p>
          </div>
          <div className="navlinks">
            <Link to='/'>Friends</Link>
            <Link to='/notification'>Notification</Link>
            <Link to='/videos'>Videos</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OtherHeader