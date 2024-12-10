import React from 'react';
import { Link } from 'react-router-dom';


  function Navbar() {
    const users = [
      'angrymouse274',
      'whiteostrich844',
      'greenswan545',
      'purpleleopard311',
    ];

  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>
            {/* Mapping on users to generate corresponding links */}
            {users.map((username) => {
              return (
                <li key={username}>
                  <Link to={`/users/${username}`}>{username}</Link>
                </li>
              );
            })}
          </ul>
        .
    </nav>
  );
}

export default Navbar;
