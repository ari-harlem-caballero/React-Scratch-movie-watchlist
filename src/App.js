import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  // state: currentUser(localStorage.getItem('supabase.auth.token'))
  
  return (
    // router over all
    <div className="App">
      <header className="header">
        {/* if user&&, render logout, Nav(searchpage, watchlist) */}
      </header>
      {/* switch/route: exact paths if no!user (/=search|Auth, /search=/|search, /watchlist=/|watchlist */}
    </div>
  );
}

export default App;
