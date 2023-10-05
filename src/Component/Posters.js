import React from 'react'
import { Posters } from '../shared/ListOfPoster'
import { useState } from 'react'
import ReactPlayer from 'react-player'


export default function Poster() {
  const [poster, setPosters] = useState([])
  return (
    <div className='container'>
      {Posters.map((poster) => (
        <div className='column' key={poster.id} >
          <div className='card'>
            <img src={poster.Image} alt='' />
            <h3>{poster.Title}</h3>
            <h3>{poster.Year}</h3>
            <h3>{poster.Nation}</h3>
            <p className='title'></p>
            <p><button onClick={() => { setPosters(poster) }}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
          </div>
        </div>
      ))}
      <div id='popup1' className='overlay'>
        <div className='popup' style={{ backgroundImage: `url(${poster.backgroundImage})`, backgroundSize: `cover` }}>
          <ReactPlayer
            url={poster.Video}
            width="100%"
            height="360px"
            
            allowfullscreen
          />
          <h2>{poster.Title}</h2>
          <a className='close' href=''>&times;</a>
          <div className='content'>
            {poster.info}
          </div>
        </div>
      </div>
    </div>
  )
}
