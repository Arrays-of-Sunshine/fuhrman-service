import React from 'react';
import styled from 'styled-components';

const Large_product_display = (props) => {
  console.log(props);
  debugger;
  return (
    <Overlay display={props.display}>
      this is the product image overlay
    </Overlay>
  )





}


export default Large_product_display;


const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => props.display};
  position: fixed
  z-index: 10;
  right: 0;
  left: 0;
  background-color:rgba(0, 0, 0, 0.8);
`


// const OverlayCloseBtn


// const OverlayThumbnailContainer


// const OverlayMainImageContainer


// const