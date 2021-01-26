import React from 'react';
import styled from 'styled-components';
import closeIcon from '../icons/close.svg';
import leftArrow from '../icons/leftArrow.svg';
import rightArrow from '../icons/rightArrow.svg';

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

          <Image_Command_left>
            <LeftBtn
              src={leftArrow}
            >
            </LeftBtn>
          </Image_Command_left>

          <Image_Center_Slider>
            {largeCarousel}
          </Image_Center_Slider>

          <Image_Command_right

          >
            <CloseIcon
              onClick={(event) => {props.overlayHandleClick(event)}}
              src={closeIcon}>
            </CloseIcon>
            <RightBtn
              src={rightArrow}
            >
            </RightBtn>
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
  background-color:rgba(255, 255, 255, 1);
`

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
`
const LargeImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  border: 0px;
  flex-wrap: nowrap;
  height: 80%;
  width: 100%;

  box-sizing: border-box;

  align-items: start;
  position: relative;
  justify-content: center;
  box-sizing: border-box;
  object-fit: cover;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;

`
const Image_Center_Slider = styled.div`
  height: 100%;
  width: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
`
const Image_Command_left = styled.div`
  height: 100%;
  width: 10%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-shrink: 0;
`

const Image_Command_right = styled.div`
  height: 100%;
  width: 10%;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  display: flex;
  flex-shrink: 0;
`

const Slider_div = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  transform-origin: center center;
  transform: scale(1) translate(0px,0px);
  transition: transform 0.0s;
  transition-timing-function: ease
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

  box-sizing: border-box;
  object-fit: cover;
  position: relative;
  display: inline-flex;
  overflow: hidden;
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
  width: 100%;
  justify-content: center;
  margin-top: 16px;
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
  position: relative;
  top: 50%;
  bottom: 50%;
`;

const CloseIcon = styled.img`
  height: 55px;
  width: 55px;
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`
const LeftBtn = styled.img`
  height: 64px;
  width: 64px;
  display: flex;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 10px;
`
const RightBtn = styled.img`
  height: 64px;
  width: 64px;
  display: flex;
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 10px;
`
const OverlayCloseBtn = styled.button`
  height: 500px;
  width: 500px;
  color: red;
  position: absolute;
  justify-content: center;
`
