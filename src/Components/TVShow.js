import { addToWatchlist } from '../services/fetch-utils';

export default function TVShow({ 
  tvshow, 
  isOnWatchlist,
  fetchWatchlist, 
}) {
  // props: tvshow
  const haveWatched = isOnWatchlist(tvshow.id);

  // *handleClick*: 
  async function handleClick() {
    if (!haveWatched) {
      const watchlistItem = {
        title: tvshow.name,
        api_id: tvshow.id,
        description: tvshow.overview,
        image: tvshow.poster_path,
      };

      await addToWatchlist(watchlistItem);
      await fetchWatchlist();
    }
  }

  return (
    //tvshow.name, overview, poster_path *haveWatched*
    <div 
      className={`tvshow ${haveWatched 
        ? 'watched' : ''}`}
      onClick={handleClick}>
      <h1>{haveWatched && '✔️'}</h1>
      <h2>{tvshow.name}</h2>
      <img src={tvshow.poster_path ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}` : `./film.png`} alt="poster image of tv-show"/>
      <p className='tvshow-description'>{tvshow.overview}</p>
    </div>
  );
}
