import React from 'react';

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer is-primary">
        <div className="container">
          <div className="column">
          <div className="column">
            <p> This is some content to place here for twitter</p>
          </div>
          <div className="column has-text-right">
            <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
            <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
