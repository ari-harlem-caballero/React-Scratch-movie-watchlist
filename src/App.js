import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import { logout } from './services/fetch-utils';
import './App.css';

function App() {
  // state: currentUser(localStorage.getItem('supabase.auth.token'))
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  

  return (
    // router over all
    <Router>
      <div className="App">
        <header className="header">
          {/* if user&&, render logout, Nav(searchpage, watchlist) */}
          {
            currentUser &&
            <>
              <NavLink to='/search'>Search</NavLink>
              <NavLink to='/watchlist'>Watchlist</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          }
        </header>
        {/* switch/route: exact paths if no!user (/=search|Auth, /search=/|search, /watchlist=/|watchlist */}
      </div>
    </Router>
  );
}

export default App;
