import React from 'react';

export default function Authorize() {
  return (
    <div>
      <form>
        <label>
          <input type="text" placeholder="email">
            email
          </input>
        </label>
        <label>
          <input type="password" placeholder="password">
            password
          </input>
        </label>
        <button>login</button>
      </form>
    </div>
  );
}
