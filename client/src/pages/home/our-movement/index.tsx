import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
import { Container } from "./styles";

function OurMovement() {
  return (
    <Container>
      <div className="images">
        <img src="/assets/images/labour_party_obi.jpeg" alt="" />
      </div>
      <div className="desc">
        <h2>Join the movement</h2>
        <p>Let's make a difference together. </p>
        <div>
          <Link to={ROUTES.donate.path}>Donate</Link>
          <Link to={ROUTES.generateAvatar.path}>Generate Avatar</Link>
          <Link to={ROUTES.pictureGallery.path}>Gallery</Link>
        </div>
      </div>
    </Container>
  );
}

export default OurMovement;
