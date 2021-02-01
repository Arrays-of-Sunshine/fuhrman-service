import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './components/Thumbnails.jsx';
import Header from './components/Header.jsx';
import LargeProductDisplay from './components/LargeProductDisplay.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      product_data: [],
      main_image_index: 0,
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
      console.log(product_data);
      this.setState(
        {
          product_data: product_data,
          main_image_index: 0,
        }
      );
    })
    .catch((err) => {
      console.log(err);
    })
  }

  overlayHandleClick(event, index) {
    event.preventDefault();
    console.log('onclick', event.target.value, index)

    if (this.state.overlay_display === 'none') {
      this.setState({
        overlay_display: 'block',
        main_image_index: event.target.name,
      })
    //this "else" handles closing the overlay
      console.log(this.state)
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
            main_image_index={this.state.main_image_index}
          />
        }
        {this.state.product_data.length > 0 &&
          <div>
            <Header product_data={this.state.product_data}/>
            <p></p>
            <Thumbnails
              product_data={this.state.product_data}
              overlayHandleClick={this.overlayHandleClick}
              main_image_index={this.state.main_image_index}
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
  font-family: Targetica, "Helvetica Neue", Helvetica, Arial, sans-serif
`