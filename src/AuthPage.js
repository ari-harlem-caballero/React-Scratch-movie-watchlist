import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  // maintain state: email, pass // props: setCurrentUser
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle: signIn, signUp (fetch, set)
  async function handleSignIn(e) {
    e.preventDefault();
    
    const user = await signInUser(email, password);

    setCurrentUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(email, password);

    setCurrentUser(user);
  }

  return (
    // form, label (email, pass), input (type, change, name), button
    <div className='auth-page'>
      <form>
        <label>
          Email:
          <input 
            required type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input 
            required type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}/>
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
