import React from 'react';
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
    this.props.product_info.map((product, i) => {
      thumbs.push(
        <Thumbnail href={`#main_image_${i}`}>
          <Image
            key={product.ID}
            src={product.image_loc}></Image>
        </Thumbnail>
      )
    })

    return (
      <Container>
        <ThumbnailContainer>
          {thumbs}
        </ThumbnailContainer>
        <MainImage
          current_main_image={this.state.current_main_image}
          product_info={this.props.product_info}
          index={this.state.current_main_image}
        />
      </Container>
    );
  }
}

export default Thumbnails;

const Container = styled.div`
  width: 600px;
  height: 485px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const ThumbnailContainer = styled.aside`
  flex: 1;
  flex-direction: column;
  height: 475px;
`

const Thumbnail = styled.a`
  display: inline-flex;
  position: relative;
  background-color: greenyellow;
  box-sizing: border-box;
`;

const Image = styled.img`
  height: 95px;
  width: 95px;
`;
