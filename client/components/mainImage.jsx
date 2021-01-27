import React from 'react';
import styled from 'styled-components';

class MainImage extends React.Component {
  //for future adjustments, I am making this a class
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let product_data = this.props.product_data;
    let mainImages = [];

    product_data.map((product, i) => {
      let productImg = product.image_loc;
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
        key={product_data.product_name + 'main'}
      >
        {mainImages}
      </MainImageContainer>
    );
  }
}

export default MainImage

const MainImageContainer = styled.section`
  display: flex;
  flex-direction: row;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  overflow: hidden;
  flex-wrap: nowrap;
  margin-left: 10px;

  height: 495px
  width: 485px;
`

const MainImageSlide = styled.div`
  scroll-snap-align: start;
  margin: 0px;
  border: 0px;
  height: 100%;
  width: 100%;

  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  object-fit: cover;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  `

const Image = styled.img`
  position: relative;
  background: white;
  display: inline-flex;
  height: 100%;
  width: 100%;
  margin: 5px;
  padding: 5px;
  border: 1px dotted;
  box-sizing: border-box;
  object-fit: cover;
`;
