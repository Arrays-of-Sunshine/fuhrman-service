import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './components/thumbnails.jsx';
import Large_product_display from './components/Large_product_display.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      view: "view",
      product_data: [],
      overlay_display: 'none'
    }
    this.overlayHandleClick = this.overlayHandleClick.bind(this);
  }

  //`/products/${id}/product_images`
  componentDidMount() {
    let randomProduct = Math.floor(Math.random()*50)
    axios.get(`/${randomProduct}`)
    .then((res) => {
      console.log(res);
      let product_data = res.data;
      this.setState(
        {
          view: 'product',
          product_data: product_data,
        }
      );
    })
    .then((data) => {
      console.log(this.state.product_data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  overlayHandleClick(e) {
    e.preventDefault();
    console.log(e);
    this.setState({
      overlay_display: 'block'
    })
    console.log(this.state.overlay_display)

  }

  render() {
    return (
      <div>
        <h1>react is working now</h1>
          {this.state.product_data.length > 0 &&
            <div>
              <h5>{this.state.product_data[0].category}</h5>
              <h2>
                <em>{this.state.product_data[0].product_name}</em>
              </h2>
              <p></p>
              <h5><u>Shop all {this.state.product_data[0].company_name}</u></h5>
              <p></p>
              <Large_product_display
                display={this.state.overlay_display}
                product_data={this.state.product_data}
              />
              <Thumbnails
                product_data={this.state.product_data}
                overlayHandleClick={this.overlayHandleClick}
              />
            </div>
          }
        <div >
          {this.state.product_data.length === 0 &&
            <h1>no product info from DB</h1>
          }
        </div>
      </div>
    );
  }
}

export default App;

const Body = styled.div`
  color: black;
  font-family: Helvetica, sans-serif;
`