import { useState } from 'react';
import { searchTVShows } from '../../services/fetch-utils';
import TVShowList from '../TVShowList';

export default function SearchPage() {
// state: query, results, watchlist
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  // const [watchlist, setWatchlist] = useState([]);

  // handleSearch (fetch searchShow(query), set:watch)
  async function handleSearch(e) {
    e.preventDefault();

    const tvshow = await searchTVShows(searchQuery);

    setResults(tvshow);
  }

// *effect: refresh*

// *refresh (fetch Watchlist, set:watch)*
// *onWatchlist(api_id): match weirdness*

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
        <TVShowList tvshows={results} />
      </section>
    </div>
  );
}
