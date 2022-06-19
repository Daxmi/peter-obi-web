import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import ROUTES from "../../../routes";
import { Container } from "./styles";

function WatchVideos() {
  const items = [
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Lagos",
      link: "http://hjdjsds.com",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Enugu",
      link: "http://hjdjsds.com",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Abuja",
      link: "http://hjdjsds.com",
    },
  ];
  return (
    <Container>
      <div className="heading">
        <h5>PO VIDEOS</h5>
        <Link to={ROUTES.videoGallery.path}>
          More videos <CgArrowLongRight />
        </Link>
      </div>
      <div className="itemsWrapper">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.bg} alt="" />
              <Link className="link" to={item.link}>
                Peter Obi on Education in Sabisa Okon
              </Link>
              <Link className="btn" to={ROUTES.donate.path}>
                Watch more
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default WatchVideos;
