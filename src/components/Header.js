import React from 'react';

export default function Header({ setType }) {
  return (
    <div>
      <p onClick={() => setType('signIn')}>login</p>
      <p onClick={() => setType('signUp')}>sign up</p>
    </div>
  );
}
