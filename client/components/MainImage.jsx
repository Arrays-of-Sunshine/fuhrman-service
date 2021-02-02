import React from 'react';
import styled from 'styled-components';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x : 0,
      y : 0,
      disp: false,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleMouseMove (e) {
    e.preventDefault();
    this.setState({
      x: e.clientX/3,
      y: e.clientY/3,
    })
    console.log("X", this.state.x)
    console.log("Y", this.state.y)
  }

  handleHover (e) {
    console.log('hello');
  }

  render (){
  let mainImages = [];
  let product_data = this.props.product_data;
  let main_image_index = this.props.main_image_index;

  product_data.map((product, index) => {
    let productImg = product.image_loc;
    mainImages.push(
      <MainImageSlide
        id={`main_image_${index}`}
        positionX={this.state.x}
        positionY={this.state.y}
        disp={this.state.disp}
        onClick={(e) => {
          this.props.overlayHandleClick(e, index)}}
        >
        <Image
          name={index}
          key={product.product_name + product.ID}
          src={productImg}
          onMouseMove={(e) => {this.handleMouseMove(e)}}
        >
        </Image>
      </MainImageSlide>
    )
  })

  return (
    <div>
      <ZoomModule
        id='zoomImage'
        zoomImage={product_data[main_image_index].image_loc}
      >

      </ZoomModule>
      <MainImageContainer
        key={product_data.product_name + 'main'}
        >
        {mainImages}
      </MainImageContainer>
    </div>
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

  height: 568px;
  width: 568px;
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
  &:hover {
    display: block;
    z-index: 8;
    overflow: hidden;
    transform: scale(2.5) translate(${props => props.positionX}px, ${props => props.positionY}px) ;
  }
  `

const ZoomModule = styled.div`
  position: abosolute;
  width: 150%;
  height: 150%;
  border: 1px solid white;
  background-image: url(${props => props.zoomImage});
  background-size: 1000px;
  display: none;
`

const Image = styled.img`
  position: relative;
  background: white;
  display: inline-flex;
  height: 100%;
  width: 100%;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  object-fit: cover;
`;
