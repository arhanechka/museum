import React from "react";
import Card from "./Card";
import classes from "../Cards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const cards = props => {
    const data = [
        {
          img: "/img/82818045_2643229492391165_2774671554661842944_o.jpg",
          label: "Our teachers",
          text: "L.Korovyakina, J.Tremtyachaya"
        },
        {
          img: "/img/83276018_2643190552395059_1779757601907539968_o.jpg",
          label: "Our teachers",
          text: "A lot of teachers here"
        },
        {
          img: "/img/83344786_2670011696379611_2088930741105721344_n.jpg",
          label: "Our teachers",
          text: "Someone very old"
        },
        {
          img: "/img/84705114_2670011706379610_1420118846089461760_n.jpg",
          label: "Our children",
          text: "Someone very old"
        },
        {
          img: "/img/83508331_2670010336379747_6477338697057435648_n.jpg",
          label: "Our children",
          text: "Someone very old"
        },
        {
          img: "/img/83785188_640784083386191_4624881304716967936_o.jpg",
          label: "Our children",
          text: "Release 1957"
        }
      ];

  return (
    <Container>
    <Row>
     
         {data.map(el => (<Card
           img={el.img} 
              label={el.label}
              text={el.text}
            />
         ) )}
  </Row>
</Container>
  );
};

export default cards;
