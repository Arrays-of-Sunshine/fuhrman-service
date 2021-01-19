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
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  //to avoid error when the page is loading.
  componentDidMount() {
    if (this.state.current_main_image === '') {
      this.setState(
        {
          current_main_image: this.props.current_product_info[0].image_loc
        }
      );
    }
  }

  //changed the main image when a thumbnail is clicked
  handleThumbnailClick (event) {
    event.preventDefault();
    this.setState(
      {current_main_image: event.target.src}
    )
  }

  //takes in the whole product info. the default main image is always index @ 0;
  render() {
    let thumbs = [];
    let id = 1;

    this.props.current_product_info.map((product) => {
      let styleClassName = `thumbnailContainer_${id}`
      thumbs.push(
        <div
          className={style.thumnailContainer}
          onClick={(event) => this.handleThumbnailClick(event)}
        >
          <img
            key={product.product_name + id}
            src={product.image_loc}></img>
        </div>
      )
      id++;
    })

    return (
      <div className={style.container}>
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