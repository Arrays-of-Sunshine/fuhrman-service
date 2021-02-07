import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './components/Thumbnails.jsx';
import Header from './components/Header.jsx';
import LargeProductDisplay from './components/LargeProductDisplay.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product_data: [],
      main_image_index: 0,
      overlay_display: 'none',
    };
    this.overlayHandleClick = this.overlayHandleClick.bind(this);
    this.overlaySetState = this.overlaySetState.bind(this);
  }

  componentDidMount() {
    const randomProduct = Math.floor(Math.random() * (50 - 1) + 1);
    // axios.get(`http://54.153.66.255:8002/products/${randomProduct}`)
    axios.get(`http://localhost:8002/products/${randomProduct}`)
      .then((res) => {
        const data = new Array(6).fill(res.data);
        console.log(data);
        const product_data = res.data;
        this.setState(
          {
            product_data,
            main_image_index: 0,
          },
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  overlaySetState(index) {
    this.setState({ main_image_index: index });
  }

  overlayHandleClick(event, index) {
    event.preventDefault();
    if (this.state.overlay_display === 'none') {
      this.setState({
        main_image_index: index,
        overlay_display: 'block',
      });
    } else {
      this.setState({
        overlay_display: 'none',
      });
    }
  }

  render() {
    return (
      <Themed>
        {this.state.product_data.length > 0
          && (
            <LargeProductDisplay
              display={this.state.overlay_display}
              product_data={this.state.product_data}
              overlayHandleClick={this.overlayHandleClick}
              main_image_index={this.state.main_image_index}
              overlaySetState={this.overlaySetState}
            />
          )}
        {this.state.product_data.length > 0
          && (
            <div>
              <Header product_data={this.state.product_data} />
              <p />
              <Thumbnails
                product_data={this.state.product_data}
                overlayHandleClick={this.overlayHandleClick}
                main_image_index={this.state.main_image_index}
              />
            </div>
          )}
        <div>
          {this.state.product_data.length === 0
            && <h1>no product info from DB</h1>}
        </div>
      </Themed>
    );
  }
}

export default App;

const Themed = styled.div`
  color: black;
  font-family: Targetica, "Helvetica Neue", Helvetica, Arial, sans-serif
`;
