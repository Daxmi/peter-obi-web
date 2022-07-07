import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../routes";
import COLORS from "../../styles/colors";

function Header() {
  const location = useLocation();

  const activeName = (path: string) => {
    if (path === location.pathname) {
      return { className: "active" };
    }
  };
  return (
    <Container>
      <img src="/assets/images/logo.png" alt="LOGO" />
      <nav>
        <Link to={ROUTES.home.path} {...activeName(ROUTES.home.path)}>
          Home
        </Link>
        <Link to={ROUTES.about.path} {...activeName(ROUTES.about.path)}>
          About
        </Link>
        <Link to={ROUTES.donate.path} {...activeName(ROUTES.donate.path)}>
          Donate
        </Link>
        <Link to={ROUTES.generateAvatar.path} {...activeName(ROUTES.generateAvatar.path)}>
          Generate Avatar
        </Link>
        <Link to={ROUTES.pictureGallery.path} {...activeName(ROUTES.pictureGallery.path)}>
          Gallery
        </Link>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  img {
    height: 4rem;
  }
  nav {
    a {
      text-decoration: none;
      margin: 0 1rem;
      color: ${COLORS.black};
      text-transform: uppercase;
      font-weight: 500;
    }
    a.active {
      color: ${COLORS.red};
    }
  }
`;
export default Header;
