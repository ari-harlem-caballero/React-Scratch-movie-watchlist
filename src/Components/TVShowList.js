import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import TVShow from './TVShow';
import WatchlistItem from './WatchlistItem';

export default function TVShowList({ tvshows }) {
  // ??when to render <Movie> vs <WatchListItem> (URL)
  // props: tvshows
  const location = useLocation();
  
  return (
    //map tvshows(key=tvshow.title, tvshow=tvshow)
    <div className='tvshow-list'>
      {
        tvshows.map((tvshow, i) => location.pathname.includes('search')
          ? <TVShow 
            key={tvshow.title + i} 
            tvshow={tvshow} />
          : <WatchlistItem 
            key={tvshow.title + i}
            tvshow={tvshow} />)
      }
    </div>
  );
}
