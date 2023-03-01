import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Allfriends() {
  return (
    <div className='allfriends'>
      <div className="full">
        <div className="allfriendslinks">
          <Link to='Oldfriends'>My Friends <span> 56 </span></Link>
          <Link to='Request'>Friend Request <span> 67 </span></Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Allfriends;