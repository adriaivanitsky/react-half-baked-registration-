import React from 'react';
import { useState } from 'react';

export default function Authorize() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <label>
          <input type="text" placeholder="email"></input>
        </label>
        <label>
          <input type="password" placeholder="password"></input>
        </label>
        <button>login</button>
      </form>
    </div>
  );
}
