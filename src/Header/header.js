import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../Product/product'
import './Header.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export default class Header extends Component {
  render() {
    return (
        <div className="header">
        <h4>Most Frequently Ordered</h4>
        <Carousel responsive={responsive}>
          <Product title="Dish1" subtitle="Description1" image="2" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="3" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="4" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="5" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="6" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="7" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="8" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="1" type="header_product"/>  
          <Product title="Dish1" subtitle="Description1" image="9" type="header_product"/>  
      </Carousel>
      </div>
    );
  }
}
