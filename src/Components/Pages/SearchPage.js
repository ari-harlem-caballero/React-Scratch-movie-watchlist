import { useEffect, useState } from 'react';
import { getWatchlist, searchTVShows } from '../../services/fetch-utils';
import TVShowList from '../TVShowList';

export default function SearchPage() {
// state: query, results, watchlist
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // handleSearch (fetch searchShow(query), set:watch)
  async function handleSearch(e) {
    e.preventDefault();

    const tvshow = await searchTVShows(searchQuery);

    setResults(tvshow);
  }

// *effect: refresh*

// *refresh (fetch Watchlist, set:watch)*
  async function fetchWatchlist() {
    const userWatchlist = await getWatchlist();

    setWatchlist(userWatchlist);
  }

  useEffect(() => {
    fetchWatchlist();
  }, []);

// *onWatchlist(api_id): match weirdness*
  function isOnWatchlist(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }

  return (
    // form, input(change/value=query), button
    // Results: <List w/ results, *refresh*>
    <div>
      <h1>Find a Show</h1>
      <form onSubmit={handleSearch} className="search">
        <input 
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}/>
        <button>Search</button>
      </form>
      <section className='tvshow-hold'>
        Results:
        <TVShowList 
          tvshows={results} 
          isOnWatchlist={isOnWatchlist}
          fetchWatchlist={fetchWatchlist}/>
      </section>
    </div>
  );
}
