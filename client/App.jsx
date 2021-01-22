import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './components/thumbnails.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      view: "view",
      product_info: []
    }
  }

  //`/products/${id}/product_images`
  componentDidMount() {
    let randomProduct = Math.floor(Math.random()*50)
    axios.get(`/${randomProduct}`)
    .then((res) => {
      console.log(res);
      let product_info = res.data;
      this.setState(
        {
          view: 'product',
          product_info: product_info,
        }
      );
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return (
      <Body>
        <h1>react is working now</h1>
          {this.state.product_info.length > 0 &&
            <div><h2><em>{this.state.product_info[0].product_name}</em></h2><p></p>
            <h5><u>Shop all {this.state.product_info[0].brand_name}</u></h5></div>
          }
        <div >
          {this.state.product_info.length === 0 &&
            <h1>no product info from DB</h1>
          }
          {this.state.product_info.length > 0 &&
            <Thumbnails
            product_info={this.state.product_info}
            />
          }
        </div>
      </Body>
    );
  }
}

export default App;

const Body = styled.div`
  color: black;
  font-family: Helvetica, sans-serif;
`