import React from "react";
import Carousel from "react-bootstrap/Carousel";

const carouselCaption = props => {
  return (
    <div style={{ color: "blue" }}>
      <h3>{props.label}</h3>
      <p style={{ color: "blue" }}>{props.text}</p>
    </div>
  );
};

export default carouselCaption;
