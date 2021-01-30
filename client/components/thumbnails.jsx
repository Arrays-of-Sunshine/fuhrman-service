import React from 'react';
import styled, {keyframes} from 'styled-components';
import MainImage from './MainImage.jsx';

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
          current_main_image: this.props.product_data[0].image_loc
        }
      );
    }
  }

  //changed the main image when a thumbnail is clicked
  handleThumbnailClick (event, index) {
    event.preventDefault();
    this.setState(
      {current_main_image: index}
    )
  };

  render() {
    let something;
    let thumbs = [];
    let product_data = this.props.product_data;

    //thumbnail only takes in 5 images
    if (product_data.length >= 4) {
      for (let i = 0; i <= 4; i++) {
        let productImg = product_data[i].image_loc;
        let numOfImage = `+${product_data.length-5} more`

        //if 5th image exists, the image should have a dark overlay with an event listener
        if (i === 4) {
          thumbs.push(
            <Thumbnail
              onClick={(e) => this.props.overlayHandleClick(e)}
            >
              <Image
                key={product_data[i].ID}
                src={product_data[i].image_loc}
                >
              </Image>
              <Overlay>
                {numOfImage}
              </Overlay>
            </Thumbnail>
          )
        } else {
          thumbs.push(
            <Thumbnail href={`#main_image_${i}`}>
              <Image
                key={product_data[i].ID}
                src={product_data[i].image_loc}>
              </Image>
            </Thumbnail>
          )
        }
      }
    } else {
      for (let i = 0; i < product_data[i].length; i++) {
        let productImg = product_data[i].image_loc;
        thumbs.push(
          <Thumbnail href={`#main_image_${i}`}>
            <Image
              key={product_data[i].ID}
              src={product_data[i].image_loc}>
            </Image>
          </Thumbnail>
        )
      }
    }

    return (
      <Container>
        <ThumbnailContainer>
          {thumbs}
        </ThumbnailContainer>
        <MainImage
          current_main_image={this.state.current_main_image}
          product_data={this.props.product_data}
          index={this.state.current_main_image}
          overlayHandleClick={this.props.overlayHandleClick}
        />
      </Container>
    );
  }
}

export default Thumbnails;

const Container = styled.div`
  font-family: Targetica, "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 695px;
  height: 568px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: white;
  margin-left: 12px;
  z-index: 1;
`;

const ThumbnailContainer = styled.aside`
  flex-direction: column;
  height: 568px;
  width: 115px;
`;

const Thumbnail = styled.a`
  display: inline-flex;
  position: relative;
  background-color: greenyellow;
  box-sizing: border-box;
  margin: 3px 2px 2px 1px;
`;

const BorderAnimation = keyframes`
  0% {border: dotted 0px};
  10% {border: dotted 1px};
  50% {border: dotted 1px};
  100% {border: solid 1px};
`

const Image = styled.img`
  height: 109px;
  width: 109px;
`;

const Selected = styled.img`
  height: 109px;
  width: 109px;
  padding: 1px;
  animation: ${BorderAnimation} 3s linear;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  line-height: 95px;
`;