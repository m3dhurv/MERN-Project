import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>

      {user ? (
        <>
          <Link to="/create-post" style={{ marginRight: '10px' }}>Create Post</Link>
          <span style={{ marginRight: '10px' }}>Welcome, {user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </header>
  );
};

export default Header;
