import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
import { Container } from "./styles";
import { MdDoubleArrow } from "react-icons/md";

function Carousel() {
  const items = [
    { link: "/assets/images/po_picture1.jpeg" },
    { link: "/assets/images/po_picture2.jpeg" },
    { link: "/assets/images/po_picture3.webp" },
    { link: "/assets/images/po_picture4.webp" },
  ];
  // React.useEffect(() => {
  //   function select() {
  //     const divs = document.querySelectorAll(".carousel");
  //     const x = Math.floor(Math.random() * divs.length);
  //     const firstItem = document.querySelectorAll(".images .carousel").item(0);
  //     const current = document.querySelector(".images .carousel.live") ?? firstItem;
  //     const newOne = document.querySelectorAll(".images .carousel")[x];

  //     current.classList.remove("live");
  //     newOne.classList.add("live");
  //     setTimeout(select, 4000);
  //   }
  //   select();
  // }, []);

  React.useEffect(() => {
    let index = 0;
    function select() {
      const divs = document.querySelectorAll(".carousel");
      const firstItem = document.querySelectorAll(".images .carousel").item(0);
      const current = document.querySelector(".images .carousel.live") ?? firstItem;
      const idx = index % divs.length;
      const newOne = document.querySelectorAll(".images .carousel")[idx];

      current?.classList.remove("live");
      newOne?.classList.add("live");

      index = index + 1;
      setTimeout(select, 4000);
    }
    select();
  }, []);

  return (
    <Container>
      <div className="images">
        {items.map((item, index) => {
          return <img className="carousel" key={index} src={item.link} alt="" />;
        })}
      </div>
      <div className="desc">
        <Link to={ROUTES.donate.path} className="donate">
          DONATE NOW <MdDoubleArrow />
        </Link>
        <h2>Together, we can make Nigeria great again!</h2>
        <p>We are fixated on pursuing far things instead of working on what we have - Peter Obi</p>
      </div>
    </Container>
  );
}

export default Carousel;
