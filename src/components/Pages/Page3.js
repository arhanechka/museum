import React from "react";
import Youtube from "../Video/Youtube";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const page3 = props => {
  const ids = ["K_h_RvqWdIM", "VpqD6g3t_78", "B4vmCuonNpI"];

  return (
    <div style={{ margin: 20 }}>
      <h1>Video</h1>
      <Container>
        <Row>
          {ids.map(el => (
            <Youtube id={el} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default page3;
