import React from 'react';
// import App from '../App.jsx';
import styled from 'styled-components';
import MainImage from './mainImage.jsx';

class Thumbnails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current_main_image: 0,
      activeThumbnail: [false, false, false, false, false],

    }
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  //to avoid error when the page is loading.
  componentDidMount() {
    if (this.state.current_main_image === '') {
      this.setState(
        {
          current_main_image: this.props.product_info[0].image_loc
        }
      );
    }
  }

  //changed the main image when a thumbnail is clicked
  handleThumbnailClick (event, index) {
    event.preventDefault();
    console.log('clicked', index);
    this.setState(
      {current_main_image: index}
    )
    console.log(this.state.current_main_image)
  };

  render() {
    let thumbs = [];
    this.props.product_info.map((product) => {
      thumbs.push(
        <ThumbNailContainer
          onClick={(event) => this.handleThumbnailClick(event, product.image_num)}
          >
          <Image
            key={product.ID}
            src={product.image_loc}></Image>
        </ThumbNailContainer>
      )
    })

    return (
      <Container>
        <MainImage
          current_main_image={this.state.current_main_image}
          product_info={this.props.product_info}
          index={this.state.current_main_image}
          />
        {thumbs}
      </Container>
    );
  }
}

export default Thumbnails;

const Container = styled.div`
  display: grid;
  grid-template-columns: 95px 475px;
  grid-template-rows: 95px 95px 95px 95px 95px;
  border: 5px;
  border-color: black;
  column-gap: 5px;
  row-gap: 5px;
`;
const MainImageContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
  border: 5px;
  border-color: black;
  background-color: olivedrab;
  overflow: hidden;
`;

const ThumbNailContainer = styled.div`
  display: grid;
  background-color: greenyellow;
  overflow: scroll;
  box-sizing: border-box;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;