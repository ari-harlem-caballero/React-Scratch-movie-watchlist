import React from 'react';

export default function TVShow({ tvshow }) {
  // props: tvshow
  // *handleClick*

  return (
    //tvshow.name, overview, poster_path *haveWatched*
    <div className='tvshow'>
      <h2>{tvshow.name}</h2>
      <img src={tvshow.poster_path ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}` : `./film.png`} alt="poster image of tv-show"/>
      <p className='tvshow-description'>{tvshow.overview}</p>
    </div>
  );
}
