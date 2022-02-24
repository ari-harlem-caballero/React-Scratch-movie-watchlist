import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import TVShow from './TVShow';
import WatchlistItem from './WatchlistItem';

export default function TVShowList({ 
  tvshows, 
  isOnWatchlist,
  fetchWatchlist, 
}) {
  // ??when to render <Movie> vs <WatchListItem> (URL)
  // props: tvshows
  const location = useLocation();

  return (
    //map tvshows(key=tvshow.title, tvshow=tvshow)
    <div className='tvshow-list'>
      { tvshows && 
        tvshows.map((tvshow, i) => 
          location.pathname.includes('search')
            ? <TVShow 
              key={tvshow.name + i} 
              tvshow={tvshow} 
              isOnWatchlist={isOnWatchlist}
              fetchWatchlist={fetchWatchlist}/>
            : <WatchlistItem 
              key={tvshow.title + i}
              tvshow={tvshow} 
              fetchWatchlist={fetchWatchlist}/>)
      }
    </div>
  );
}
