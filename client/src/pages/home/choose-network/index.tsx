import React from "react";
import { FaPhone, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
import { Container } from "./styles";

function ChooseNetwork() {
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
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Kaduna",
      link: "http://hjdjsds.com",
    },
  ];
  return (
    <Container>
      <h2>PO Support Networks</h2>
      <div className="itemsWrapper">
        {items.map((item, index) => {
          return (
            <a href={item.link} key={index}>
              <img src={item.bg} alt="" />
              <p className="state"> {item.name}</p>
              <div className="details">
                <p>
                  <FaPhone />
                  &nbsp; 08169981412
                </p>
                <p>
                  <FaUserAstronaut />
                  &nbsp; Emeka Abolaji
                </p>
              </div>
              <div className="overlay" />
            </a>
          );
        })}
      </div>

      <Link className="viewMore" to={ROUTES.donate.path}>
        VIEW MORE
      </Link>
    </Container>
  );
}

export default ChooseNetwork;
