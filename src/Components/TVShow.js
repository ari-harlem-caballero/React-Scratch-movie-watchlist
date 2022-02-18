import React from 'react';

export default function TVShow({ tvshow }) {
  // props: tvshow
  // *handleClick*

  return (
    //tvshow.name, overview, poster_path *haveWatched*
    <div>
      <h2>{tvshow.name}</h2>
      <p>{tvshow.overview}</p>
      <img src={tvshow.poster_path ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}` : `./film.png`} alt="poster image of tv-show"/>
    </div>
  );
}
