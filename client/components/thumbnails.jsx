import React from 'react';
import App from '../App.jsx';
import faker from 'faker';

class Thumbnails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }

  }



  render() {
    let thumbs = [];
    let id = 1;
    // debugger;
    if (this.props.view === 'product') {
      this.props.current_product_info.map((product) => {
        thumbs.push(
          <div>
            component image #{id}
            <img
              key={id}
              class={`thumbnailContainer-${id}`}
              src={product.image_loc}></img>
          </div>
        )
        id++;
      })
    }

    return (
      <div>
        {thumbs}
      </div>
    )
  }

}

export default Thumbnails;