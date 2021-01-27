import React from 'react';
import styled from 'styled-components';


const Header = (props) => {

  return (
    <Body>
      <ProductCategory>{props.product_data[0].category}</ProductCategory>
      <ProductName>
        {props.product_data[0].product_name}
      </ProductName>
      <ShopAll
        href='https://www.target.com/c/cat-toys-supplies-pets/-/N-5xt3u'
      >
        Shop all {props.product_data[0].company_name}
      </ShopAll>
    </Body>

  );

}

export default Header;

const Body = styled.div`
  color: black;
  font-family: Targetica, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 12px 0px;
  padding: 0px 16px;
  height: 78.65px;
`
const ProductCategory = styled.div`
  height: 16.65px;
  font-size: 12px !important;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
  color: rgb(102, 102, 102) !important;
  position: relative;
  text-decoration: underline;
`
const ProductName = styled.div`
  font-style: normal;
  letter-spacing: 0px;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  vertical-align: center;
  white-space: normal;
  color: rgb(51, 51, 51);
  font-weight: bold;
  line-height: 1.25;
  font-size: 23px;
  box-sizing: border-box;

`

const ShopAll = styled.div`
color: rgb(51, 51, 51);
font-size: 16px !important;
line-height: 22.856px;
box-sizing: border-box;
position: relative;
text-decoration: underline;
`
