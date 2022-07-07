import React from "react";
import random from "lodash/random";
import { Container } from "./styles";

const index = ({img} : {img: string}) => {
  return (
    <Container style={{ height: `${random(200, 80)}px`}}>
      <img src={img} alt="" />
    </Container>
  );
};

export default index;

