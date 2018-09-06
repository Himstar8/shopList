import React, { Component } from "react";
import ShopList from "./component/shop-list/shop-list";
import Navbar from "./component/layout/navbar";
import Footer from "./component/layout/footer";
import Pagination from "react-js-pagination";
import "./App.css";
import axios from "axios";

const url =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?" +
  "key=AIzaSyB2dGnQCr3Aej6iGVESCbZLxMFqCS1pbm4" +
  "&location=33.595442,-7.617528" +
  "&radius=16000" +
  "&sensor=false" +
  "&types=restaurant" +
  "&keyword=fast";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shopList: [],
      activePage: 2,
      likedShop: []
    };

    this.getShop = this.getShop.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  list = [
    {
      name: "starbuck",
      distance: 300
    },
    {
      name: "Zara",
      distance: 350
    },
    {
      name: "Starbuck",
      distance: 300
    },
    {
      name: "Café de France",
      distance: 1000
    },
    {
      name: "Chez Nabil",
      distance: 60
    }
  ];

  componentWillMount() {}

  componentDidMount() {
    // this.getShop(this.list);
    axios
      .get(url)
      .then(res => {
        console.log("result", res.data.error_message);
        this.getShop(res.data.results);
      })
      .catch(err => {
        console.log("Error fetching data", err);
      });
  }

  handleDislike(name) {
    this.list = this.list.filter(c => c.name !== name);
    this.getShop(this.list);
  }
  handleLike(shop) {
    // Add the shop to the liked shops list
    this.setState({
      likedShop: [...this.state.likedShop, shop]
    });

    let arrG = JSON.stringify(localStorage.getItem("liked"));

    console.log("arrg", arrG);

    // localStorage.setItem("liked", arr);

    this.list = this.list.filter(c => c.name !== shop.name);
    this.getShop(this.list);

    console.log("handle like", this.state.likedShop);
  }

  getShop(arr) {
    arr.sort((a, b) => {
      return a.distance - b.distance;
    });
    this.setState({
      shopList: [...arr]
    });
    console.log("after sorting", arr);
  }

  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <div>
          <ShopList
            like={this.handleLike}
            dislike={this.handleDislike}
            shoplist={this.state.shopList}
          />
        </div>
        <div className="container center-align">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={6}
            totalItemsCount={20}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
