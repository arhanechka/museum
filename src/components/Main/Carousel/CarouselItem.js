import React from "react";
import Carousel from "react-bootstrap/Carousel";

const carouselItem = props => {
  return (
    <div>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + props.img}
      alt={props.label}
    /></div>
  );
};

export default carouselItem;
