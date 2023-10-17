import React, { useState } from 'react';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  };

  return (
    <nav className=" p-4" style={{background: 'linear-gradient(90deg, rgba(0,12,46,1) 0%, rgba(9,73,121,1) 78%, rgba(0,125,255,1) 100%)'}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Shoe Store</div>
        <ul className="flex space-x-4">

        {loggedIn && (
            <li className="text-white">
              <a href="/cart">Cart</a>
            </li>
          )}
          
          {loggedIn ? (
            <li className="text-white">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="text-white">
              <button onClick={handleLogin}>
              {/* <FontAwesomeIcon icon="fa-regular fa-user" beat /> */}
              Login
              </button>
            </li>
          )}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


