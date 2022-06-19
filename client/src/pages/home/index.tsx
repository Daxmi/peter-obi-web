import React from "react";
import Carousel from "./carousel";
import ChooseNetwork from "./choose-network";
import OurMovement from "./our-movement";
import { Container } from "./styles";
import TwitterFeeds from "./twitter-feeds";
import WatchVideos from "./watch-videos";

function Home() {
  return (
    <Container>
      <Carousel />
      <OurMovement />
      <ChooseNetwork />
      <WatchVideos />
      <TwitterFeeds />
    </Container>
  );
}

export default Home;
