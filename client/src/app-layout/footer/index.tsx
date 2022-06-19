import styled from "styled-components";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import COLORS from "../../styles/colors";
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <div className="quickActions">
        <Link to={ROUTES.home.path}>Home</Link>
        <Link to={ROUTES.donate.path}>Donate</Link>
        <Link to={ROUTES.generateAvatar.path}>Generate Avatar</Link>
        <Link to={ROUTES.pictureGallery.path}>Gallery</Link>
      </div>
      <div className="social">
        <a href="https://twitter.com/home">
          <AiFillTwitterCircle />
        </a>
        <a href="https://twitter.com/home">
          <BsFacebook />
        </a>
        <a href="https://twitter.com/home">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/home">
          <AiFillYoutube />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 0 2rem;
  height: 5rem;
  display: flex;
  background-color: ${COLORS.black};
  align-items: center;
  justify-content: space-between;

  .quickActions {
    a {
      text-decoration: none;
      margin: 0 1rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  .social {
    a {
      margin: 0 0.8rem;
      color: #fff;
      svg {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  }
`;
export default Footer;
