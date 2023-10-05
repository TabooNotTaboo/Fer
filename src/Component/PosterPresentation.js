import React, { Component } from 'react'

export default function PosterPresentation({Posters}) {
    console.log(Posters);
    return (
     <div className='container'>
        {Posters.map((Posters)=>(
        <div className='column'>
        <div className='card'>
        <img src={Posters.Image}/>
          <h3>{Posters.Title}</h3>
          <p className='title'>{Posters.Year}</p>
          <p className='title'>{Posters.Nation}</p>
          
          <p><button>Detail</button></p>
        </div>
      </div>
     ))} </div>
  )
}
