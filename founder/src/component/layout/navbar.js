import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  handleLogin() {
    console.log('A user attempting to login');
  }

  handleRegister() {
    console.log('A user attempting to register');
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav-extended blue">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Hidden Founder
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    onClick={this.handleLogin}
                    className="waves-effect waves-light btn grey"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.handleRegister}
                    className="waves-effect waves-light btn red"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab">
                  <Link to="/shops">Shop List</Link>
                </li>
                <li className="tab">
                  <Link className="active" to="/liked">
                    Liked Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default Navbar;
