import React, { useState } from 'react';

export default function AuthPage({ setCurrentUser }) {
  // maintain state: email, pass // props: setCurrentUser
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // handle: signIn, signUp (fetch, set, clear)
  async function handleSignIn(e) {
    e.preventDefault();
    
  }

  async function handleSignUp(e) {
    e.preventDefault();

  }

  return (
    // form, label (email, pass), button
    <div className='auth-page'>

    </div>
  );
}
