import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import ROUTES from "../../../routes";
import { Container } from "./styles";

function TwitterFeeds() {
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
        <h5>WHAT PEOPLE SAY</h5>
        <Link to={ROUTES.socials.path}>
          More <CgArrowLongRight />
        </Link>
      </div>
      <div className="itemsWrapper">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  This is so accurate 🤣🤣🤣 My WhatsApp{" "}
                  <a href="https://t.co/8AKl9AxLBm">pic.twitter.com/8AKl9AxLBm</a>
                </p>
                &mdash; WezeeLee 🈲 (@Zeegrafix2){" "}
                <a href="https://twitter.com/Zeegrafix2/status/1536230804023660547?ref_src=twsrc%5Etfw">
                  June 13, 2022
                </a>
              </blockquote>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default TwitterFeeds;
