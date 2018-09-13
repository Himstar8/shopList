import React, { Component } from 'react';
import Shop from './shop/shop';
import Spinner from '../Spinner';

class ShopList extends Component {
  render() {
    if (this.props.shoplist === undefined || this.props.shoplist.length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="container grey lighten-4" style={{ padding: '10px' }}>
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
}

export default ShopList;
