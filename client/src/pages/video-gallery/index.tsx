import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal";
import { Container } from "./styles";

interface ModalType {
  bg: string;
  name: string;
  link: string;
}

function VideoGallery() {
  const [modalContent, setModalContent] = useState<ModalType | null>(null);

  const items = [
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Lagos",
      link: "1",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Enugu",
      link: "2",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Abuja",
      link: "3",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Kano",
      link: "4",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Lagos",
      link: "5",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Enugu",
      link: "6",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Abuja",
      link: "7",
    },
    {
      bg: "/assets/images/labour_party.jpeg",
      name: "Kano",
      link: "8",
    },
  ];
  return (
    <Container>
      <div className="heading">
        <h5>PO VIDEOS</h5>
      </div>
      <div className="itemsWrapper">
        {items.map((item, index) => {
          return (
            // <Link to={item.link} key={index}>
              <div key={index} onClick={() => setModalContent(item)}>
                <img src={item.bg} alt="" />
                <p className="link">Peter Obi on Education in Sabisa Ok</p>
              </div>
            // </Link>
          );
        })}
      </div>
      { modalContent && <Modal modalContent={modalContent} setModalContent={setModalContent} /> }
    </Container>
  );
}

export default VideoGallery;
