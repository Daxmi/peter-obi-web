import { Container } from "./styles";
import Gallery from "../../components/gallery";
import StackGrid from "react-stack-grid";

function PictureGallery() {
  const imagesData = [
    "https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media0.giphy.com/media/iCiyEytDbvR62GF1fbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
    "https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  ];

  return (
    <Container>
     <StackGrid
        columnWidth={"33.33%"}
        gutterWidth={10}
        gutterHeight={10}
      >
        {
          imagesData.map((img, index) => (
            <div key={index} className="photo-item"><img src={img}/></div>
          ))
        }
      </StackGrid>
    </Container>
  );
}

export default PictureGallery;
