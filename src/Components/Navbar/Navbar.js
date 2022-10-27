import React, { Component } from 'react';
import Slogo from '../../images/Group 1.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
          <nav>
            <ul className="navbar">
              <li className="navbar-items"><img src={Slogo} alt="sae" className="logo" /></li>
              <li className="navbar-items"><a href="/">Home</a></li>
              <li className="navbar-items"><a href="/gallery">Gallery</a></li>
              <li className="navbar-items"><a href="/resources">Resources</a></li>
              <li className="navbar-items"><a href="/projects">Projects</a></li>
              <li className="navbar-items"><a href="/about">About Us</a></li>
              <li className="navbar-items"><a href="/blogs"><button className="blog">Blog</button></a></li>
            </ul>
          </nav>
        </header>
            </div>
        );
    }
}

export default Navbar;