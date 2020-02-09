import React from "react";
import YouTube from '@u-wave/react-youtube';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const card = props => {
  return (
    <Col xs={6} md={4}>
     <YouTube
  video={props.id}
  height='300'
  weight='800'
/>
    </Col>

  );
};

export default card;