import { useState, useEffect } from 'react';
import TVShowList from '../TVShowList';
import { getWatchlist } from '../../services/fetch-utils';

export default function WatchlistPage() {
  // state: tvshows
  const [tvshows, setTvshows] = useState([]);

  async function fetchWatchlist() {
    const userWatchlist = await getWatchlist();

    setTvshows(userWatchlist);
  }

  useEffect(() => {

    fetchWatchlist();
  }, []);
  
  // *refreshWatchList*: 
  return (
    <div>
      {/* tvshowList: tvshows */}
      <h1>My Show Watchlist:</h1>
      <TVShowList 
        tvshows={tvshows} 
        fetchWatchlist={fetchWatchlist}/>
    </div>
  );
}
