import { useState } from 'react';
import TVShowList from '../TVShowList';

export default function WatchlistPage() {
  // state: tvshows
  const [tvshows, setTvshows] = useState([]);
  // *refreshWatchList*: 
  return (
    <div>
      {/* tvshowList: tvshows */}
      <h1>My Show Watchlist:</h1>
      <TVShowList tvshows={tvshows} />
    </div>
  );
}
