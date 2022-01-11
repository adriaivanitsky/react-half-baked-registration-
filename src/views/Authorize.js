import React from 'react';
import { useState } from 'react';
import AuthorizeForm from '../components/AuthorizeForm';
import { signInUser, signupUser } from '../services/users';

export default function Authorize({ currentUser, setCurrentUser }) {
  // const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  async function formHandler(e) {
    e.preventDefault();
    try {
      const response =
        type === 'signIn' ? await signInUser(email, password) : await signupUser(email, password);
      setCurrentUser(response);
    } catch {
      alert('oops! something went wrong. please try again');
    }
  }

  // if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <AuthorizeForm {...{ email, setEmail, password, setPassword, formHandler }} />
    </div>
  );
}
