import React from 'react'
import { Videos } from '../dummyData'


function Videogrid() {
  return (
    <div className='Videogrid'>
      {Videos.map((uvideos)=>{
        return <div className="frame">
          <iframe width="260" height="115" src={uvideos.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      })}

    </div>
  )
}

export default Videogrid