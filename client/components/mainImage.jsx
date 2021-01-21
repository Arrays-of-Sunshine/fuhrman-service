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

  // debugger;

  render () {
    let product_info = this.props.product_info;
    let mainImages = [];
    let index = 0;
    product_info.map((product) => {
      let productImg = product.image_loc;
      // debugger;
      mainImages.push(
        <Image
          key={product.product_name + product.ID}
          name={index}
          src={productImg}
        ></Image>
      )
      index++;
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
  overflow: scroll;
  scroll-snap-type: x mandatory;
  scroll-behaviror: smooth;
  scroll-snap-align: start;
  `;

const Image = styled.img`
  position: relative;
  display: inline;
  height: 100%;
  width: 100%;
  top: ${props => props.name*-475 || 0}px
`;



