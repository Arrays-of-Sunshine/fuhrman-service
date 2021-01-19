import React from 'react';
import App from '../App.jsx';
import style from '../style.css';

const MainImage = (props) => {
  // debugger;
  let productImg = props.current_main_image;
  let product_info = props.current_product_info;


  return (
    <div
      className={style.mainImageContainer}
      key={product_info.product_name + 'main'}
      >
      <img
        src={productImg}></img>
    </div>
  );

}

export default MainImage;

