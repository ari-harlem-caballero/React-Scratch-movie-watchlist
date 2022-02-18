import React from 'react';
import TVShow from './TVShow';

export default function TVShowList({ tvshows }) {
  // ??when to render <Movie> vs <WatchListItem> (URL)
  // props: tvshows
  return (
    //map tvshows(key=tvshow.title, tvshow=tvshow)
    <div>
      {
        tvshows.map((tvshow, i) => 
          <TVShow key={tvshow.title + i} 
            tvshow={tvshow} />)
      }
    </div>
  );
}
