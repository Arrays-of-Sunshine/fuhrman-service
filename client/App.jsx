import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './components/Thumbnails.jsx';
import LargeProductDisplay from './components/LargeProductDisplay.jsx';

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
    axios.get(`http://localhost:8002/products/${randomProduct}`)
    .then((res) => {
      let product_data = res.data;
      this.setState(
        {
          view: 'product',
          product_data: product_data,
        }
      );
    })
    .catch((err) => {
      console.log(err);
    })
  }

  overlayHandleClick(e) {
    e.preventDefault();
    if (this.state.overlay_display === 'none') {
      this.setState({
        overlay_display: 'block'
      })
    } else {
      this.setState({
        overlay_display: 'none'
      })
    }
  }

  render() {
    return (
      <div>
         {this.state.product_data.length > 0 &&
          <LargeProductDisplay
          display={this.state.overlay_display}
          product_data={this.state.product_data}
          overlayHandleClick={this.overlayHandleClick}
          />
         }
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