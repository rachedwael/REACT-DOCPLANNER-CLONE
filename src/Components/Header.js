import React, { Component } from 'react';
import './../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="navbar-container">
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="logo-site" />
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#" className="active">About Us</a></li>
                <li className="navbar-item"><a href="#" className=""> Career</a></li>
                <li className="navbar-item"><a href="#" className=""> Departement</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
