import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer blue">
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
