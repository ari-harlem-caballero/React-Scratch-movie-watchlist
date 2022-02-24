import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils';
import './App.css';
import AuthPage from './AuthPage';
import SearchPage from './Components/Pages/SearchPage';
import WatchlistPage from './Components/Pages/WatchlistPage';

export default function App() {
  // state: currentUser(localStorage.getItem('supabase.auth.token'))
  const [currentUser, setCurrentUser] = useState('');
  
  useEffect(() => {
    async function fetchUser() {
      const data = getUser();

      setCurrentUser(data);
    }

    fetchUser();
  }, []);

  async function handleLogout() {
    await logout();

    setCurrentUser('');
  }

  return (
    // router over all
    <Router>
      <div className="App">
        <header>
          {/* if user&&, render logout, Nav(searchpage, watchlist) */}
          {
            currentUser &&
            <>
              {/* <div className='links'> */}
              <NavLink to='/search'>Search</NavLink>
              <NavLink to='/watchlist'>Watchlist</NavLink>
              {/* </div> */}
              <button className='logout' onClick={handleLogout}>Logout</button>
            </>
          }
        </header>
        {/* switch/route: exact paths if no!user (/=search|Auth, /search=/|search, /watchlist=/|watchlist */}
        <main>
          <Switch>
            <Route exact path='/'>
              {
                currentUser
                  ? <Redirect to='/search' />
                  : <AuthPage setCurrentUser={setCurrentUser} />
              }
            </Route>
            <Route exact path='/search'>
              {
                currentUser
                  ? <SearchPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                currentUser
                  ? <WatchlistPage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router> 
  );
}
