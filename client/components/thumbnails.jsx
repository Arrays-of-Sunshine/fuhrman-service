import React from 'react';
import App from '../App.jsx';
import style from '../style.css';
import MainImage from './mainImage.jsx';

class Thumbnails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current_main_image: '',
    }

  }

  componentDidMount() {
    // debugger;
    if (this.state.current_main_image === '') {
      this.setState(
        {
          current_main_image: this.props.current_product_info[0].image_loc
        }
      );
    }
  }

  render() {
    let thumbs = [];
    let id = 1;
    console.log(style);

    this.props.current_product_info.map((product) => {
      let styleClassName = `thumbnailContainer_${id}`
      // debugger;
      thumbs.push(
        <div className={style.thumnailContainer}>
          <img
            key={product.product_name + id}
            src={product.image_loc}></img>
        </div>
      )
      id++;
    })

    return (
      <div>
        <MainImage
          current_main_image={this.state.current_main_image}
          current_product_info={this.props.current_product_info}
          />
        {thumbs}
      </div>
    )
  }

}

export default Thumbnails;