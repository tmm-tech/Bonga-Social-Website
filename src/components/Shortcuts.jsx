import React from 'react'
import { Link } from 'react-router-dom'

function Shortcuts() {
  return (
    <div className='shortcuts'>
      <Link to='/'>Friends</Link>
      <Link to='/notification'>NOTIFICATIONS</Link>
      <Link to='/videos'>VIDEOS</Link>


    </div>
  )
}

export default Shortcuts