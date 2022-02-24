import React from 'react';
import { watchTVShow } from '../services/fetch-utils';

export default function WatchlistItem({ 
  tvshow, 
  fetchWatchlist
}) {
  // THIS PAGE TALKS TO SUPABASE
  // props: tvshow, *refresh*
  //handleCLick (fetch watchTV(show.id))
  async function handleClick() {
    await watchTVShow(tvshow.id);

    await fetchWatchlist();
  }

  return (
    <div onClick={handleClick}>
      {/* call handleCLick, watched/title/descript/img*/}
      <h1>{tvshow.watched ? '✔️' : '📺'}</h1>
      <h2>{tvshow.title}</h2>
      <img src={tvshow.image ? `https://image.tmdb.org/t/p/original${tvshow.image}` : `./film.png`} alt="poster image of tv-show"/>
      <p>{tvshow.description}</p>
    </div>
  );
}
