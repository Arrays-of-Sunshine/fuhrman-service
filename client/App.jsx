import React from 'react';
import axios from 'axios';
import Thumbnails from './components/thumbnails.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      view: "view",
      current_product_info: [],
      current_main_image: [],
    }
  }

  //`/products/${id}/product_images`
  componentDidMount() {
    axios.get('/2')
    .then((res) => {
      console.log(res);
      let product_info = res.data;
      this.setState(
        {
          view: 'product',
          current_product_info: product_info,
          current_main_image: product_info[0].image_loc
        }
      )
      // debugger;
    })
    .then(() => {
      console.log(current_product_info);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="container">
        <h1>react is working now</h1>
        <div>
          {this.state.current_product_info.length.length === 0 &&
            <h1>no product info from DB</h1>
          }
          {this.state.current_product_info.length > 0 &&
            <Thumbnails
            current_product_info={this.state.current_product_info}
            view={this.state.view}/>
          }
        </div>
      </div>
    );
  }
}

export default App;