import React from 'react';
import App from '../App.jsx';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
// import {motion} from 'framer-motion';


class MainImage extends React.Component {
  //for future adjustments, I am making this a class
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    let product_info = this.props.product_info;
    let mainImages = [];
    product_info.map((product, i) => {
      let productImg = product.image_loc;
      // debugger;
      mainImages.push(
        <MainImageSlide id={`main_image_${i}`}>
          <Image
            key={product.product_name + product.ID}
            src={productImg}
          ></Image>
        </MainImageSlide>
      )
    })

    return (
          <MainImageContainer
            key={product_info.product_name + 'main'}
          >
            {mainImages}
          </MainImageContainer>
    );
  }
}

export default MainImage

const MainImageContainer = styled.section`
  flex: 4
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  overflow: hidden;
  flex-wrap: nowrap;
  `;

  const MainImageSlide = styled.div`
  scroll-snap-align: start;
  margin: 0px;
  border: 0px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 10px;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  `

  const Image = styled.img`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
`;
