import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
<div className="navbar" role="navigation" aria-label="main navigation">  

  <div id="navbarBasicExample" className="navbar-menu">
  
    <div className="navbar-start">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/features" className="navbar-item">Features</Link>
        <Link to="/faq" className="navbar-item">FAQ</Link>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Join Now</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Header;
