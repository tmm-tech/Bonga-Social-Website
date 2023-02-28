import React from 'react'
import Followers from '../components/followers'
import Notify from '../components/Notify'
import Shortcuts from '../components/Shortcuts'
import '../friends.css';

const Notification = () => {
  return (
    <div>
        <div className="maincontainer">
        <div className="cont1">
          <Shortcuts/>
        </div>
        <div className="cont2">
          <Notify/>
        </div>
        <div className="cont3">
          <Followers/>
        </div>
      </div>
    </div>
  )
}

export default Notification
