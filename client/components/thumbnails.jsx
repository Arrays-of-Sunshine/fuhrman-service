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
          current_main_image: this.props.product_data[0].image_loc
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
    let product_data = this.props.product_data;
    // product_data.map((product, i) => {
    //   thumbs.push(
    //     <Thumbnail href={`#main_image_${i}`}>
    //       <Image
    //         key={product.ID}
    //         src={product.image_loc}></Image>
    //     </Thumbnail>
    //   )
    // })

    //thumbnail only takes in 5 images
    if (product_data.length >= 4) {
      for (let i = 0; i <= 4; i++) {
        let productImg = product_data[i].image_loc;
        let numOfImage = `+${product_data.length-5} more`
        //if 5th image exists, the image should have a dark overlay
        if (i === 4) {
          thumbs.push(
            <Thumbnail href={`#main_image_${i}`}>
              <Image
                key={product_data[i].ID}
                src={product_data[i].image_loc}>
                </Image>
                <Overlay>{numOfImage}</Overlay>
            </Thumbnail>
          )
        } else {
          thumbs.push(
            <Thumbnail href={`#main_image_${i}`}>
              <Image
                key={product_data[i].ID}
                src={product_data[i].image_loc}></Image>
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
        />
      </Container>
    );
  }
}

export default Thumbnails;

const Container = styled.div`
  width: 600px;
  height: 495px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: white;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  line-height: 95px;
`;