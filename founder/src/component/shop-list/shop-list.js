import React, { Component } from "react";
import Shop from "./shop/shop";

class ShopList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container grey lighten-4" style={{ padding: "10px" }}>
          <h3 className="center-align">Find the nearest shop </h3>
          <div className="row">
            <Shop
              like={this.props.like}
              dislike={this.props.dislike}
              shop={this.props.shoplist}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShopList;
