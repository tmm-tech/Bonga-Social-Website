import React from 'react'
import { Users } from '../dummyData'

function Request() {
  return (
    <div>


      {Users.map((person) => {
        return <div className="oneFriend">
          <div className="duopart">
            <img src={process.env.PUBLIC_URL + person.profilePicture} alt="pro" srcset="" />
            <div className="profiledetails">
              <h3>{person.username}</h3>
              <p>career</p>
            </div>
          </div>
          <div className="friendsButton">
            <button>Add friend</button>
            <button>Delete request</button>
          </div>
        </div>
      })}


    </div>
  )
}

export default Request