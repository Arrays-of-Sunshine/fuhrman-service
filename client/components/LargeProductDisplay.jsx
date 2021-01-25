import React from 'react';
import styled from 'styled-components';
import closeIcon from '../icons/close.svg';

const LargeProductDisplay = (props) => {
  //mapping product images for main image & thumbnails
  const largeCarousel = [];
  const carouselThumbnail = []
  let products = props.product_data;

  products.map((product, i) => {
    //large image
    largeCarousel.push(
      <Slider_div
        id={`LargeImage-${i}`}
      >
        <LargeImage
          src={product.image_loc}
        >
        </LargeImage>
      </Slider_div>
    )
    //thumbnail
    carouselThumbnail.push(
      <Thumbnail
        href={`#LargeImage-${i}`}>
        <Image
        src={product.image_loc}
        ></Image>
      </Thumbnail>
    )
  })

  return (
    <Overlay display={props.display}>
      <OverlayContainer>
        <LargeImageContainer>
          <Image_Command_left></Image_Command_left>

          <Image_Center_Slider>{largeCarousel}</Image_Center_Slider>

          <Image_Command_right
            onClick={(event) => {props.overlayHandleClick(event)}}
          >
            <CloseIcon src={closeIcon}></CloseIcon>
          </Image_Command_right>

        </LargeImageContainer>

        <ThumbnailContainer>
          {carouselThumbnail}
        </ThumbnailContainer>

      </OverlayContainer>
    </Overlay>
  )
}

export default LargeProductDisplay;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => props.display};
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  background-color:rgba(0, 0, 0, 0.8);
`

const OverlayContainer = styled.div`
  width: 100%
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(112, 243, 221, 0.3);
`
const LargeImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  border: 0px;
  flex-wrap: nowrap;
  height: 80%;
  width: 80%;

  box-sizing: border-box;

  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  object-fit: cover;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;

`
const Image_Center_Slider = styled.div`
  height: 60%;
  width: 60%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
`
const Image_Command_left = styled.div`
  height: 60%;
  width: 20%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-shrink: 0;
`

const Image_Command_right = styled.div`
  height: 60%;
  width: 20%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-shrink: 0;
`

const Slider_div = styled.div`
  scroll-snap-align: start;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LargeImage = styled.img`
  height: 100%;
  width: 100%;
  padding: 5px;
  border: 1px dotted;

  box-sizing: border-box;
  object-fit: cover;
  position: relative;
  display: inline-flex;
`

const LargeImageOverlay = styled.div`
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
`
const ThumbnailContainer = styled.div`
  flex-direction: row;
  height: 100px;
  justify-content: center;
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

const CloseIcon = styled.img`
  height: 60px;
  width: 60px;
  display: flex;
`
const LeftBtn = styled.img`
  height: 60px;
  width: 60px;
`
const RightBtn = styled.img`
  height: 60px;
  width: 60px;
`
const OverlayCloseBtn = styled.button`
  height: 500px;
  width: 500px;
  color: red;
  position: absolute;
  justify-content: center;
`
