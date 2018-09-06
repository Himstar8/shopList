import React, { Component } from "react";
import img from "../../../dist/shop.png";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.handleDisklike = this.handleDisklike.bind(this);
  }

  handleDisklike(name) {
    this.props.dislike(name);
  }
  handleLike(shop) {
    this.props.like(shop);
  }
  render() {
    let { shop } = this.props; // Object distructuring
    return (
      <div>
        {shop.map((elem, index) => {
          let name = elem.name;
          return (
            <div key={index} className="col s12 m4 shop">
              <div className="shop-item white hoverable">
                <div className="center-align grey lighten-2">
                  <small>{name}</small>
                </div>
                <div className="image-placeholder">
                  <img src={img} width="90%" />
                </div>
                <div className="btn-action center-align">
                  <ul>
                    <li>
                      <a
                        className="btn teal"
                        onClick={() => this.handleLike(elem)}
                      >
                        Like
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn red"
                        onClick={() => this.handleDisklike(name)}
                      >
                        Dislike
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Shop;
