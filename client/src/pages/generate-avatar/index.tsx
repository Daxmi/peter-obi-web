import React from "react";
import { Button, Container } from "./styles";

type Imageavater = {
  path: string;
  url: string;
};
const images: Imageavater[] = [
  { path: "/assets/images/avatar_template1.png", url: "https://getdp.co/UOT" },
  { path: "/assets/images/avatar_template2.png", url: "https://getdp.co/peterobi2023" },
];

function GenerateAvatar() {
  const [selected, setSelected] = React.useState<Imageavater>(images[0]);

  return (
    <Container>
      <div className="templatesContainer">
        <h3>Choose .... to Generate DP avatar</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad, neque accusantium
          laboriosam corrupti impedit vel tempore exercitationem est, ratione consequatur reiciendis
          numquam voluptates? Cum culpa voluptate fugit ut atque.
        </p>
        <div className="imagesWrapper">
          {images.map((image) => {
            return <img src={image.path} alt="" onClick={() => setSelected(image)} />;
          })}
        </div>
        <Button href={selected.url} target="_blank">
          Generate Avatar
        </Button>
      </div>

      <div className="preview" style={{ backgroundImage: `url(${selected.path})` }} />
    </Container>
  );
}

export default GenerateAvatar;
