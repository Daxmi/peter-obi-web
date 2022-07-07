import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { Container } from "./styles";

const Socials = () => {
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
      <h2>Social Feeds</h2>
      <div className="itemsWrapper">
        {items.map((item, index) => {
          return (
              <a href="https://t.co/8AKl9AxLBm" className="twitter" key={index} target="_blank">
                <div className="heading">
                  <p>&mdash; WezeeLee 🈲 (@Zeegrafix2) </p>
                  <div className="logo">
                    <AiFillTwitterCircle/>
                  </div>
                </div>
                <p lang="en" dir="ltr">
                  This is so accurate 🤣🤣🤣 My WhatsApp
                  <a href="https://t.co/8AKl9AxLBm">
                    pic.twitter.com/8AKl9AxLBm
                  </a>
                </p>
              </a>
          );
        })} 
    </div>
    </Container>
  );
};

export default Socials;
