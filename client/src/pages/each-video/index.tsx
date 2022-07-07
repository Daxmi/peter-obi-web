import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CgArrowLongRight } from "react-icons/cg";
// import ROUTES from "../../../routes";
import { Container } from "./styles";

const items2 = [
  {
    id: "1",
    bg: "/assets/images/labour_party.jpeg",
    name: "Lagos",
    link: "/video-gallery/1",
    description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"

  },
  {
    id: "2",
    bg: "/assets/images/labour_party.jpeg",
    name: "Enugu",
    link: "/video-gallery/2",
    description: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!",
  },
  {
    id: "3",
    bg: "/assets/images/labour_party.jpeg",
    name: "Abuja",
    link: "/video-gallery/3",
    description: "3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"
  },
  {
    id: "4",
    bg: "/assets/images/labour_party.jpeg",
    name: "Kano",
    link: "/video-gallery/4",
    description: "4Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!",
  },
  {
     id: "5",
    bg: "/assets/images/labour_party.jpeg",
    name: "Lagos",
    link: "/video-gallery/5",
    description: "5Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"
  },
  {
    id: "6",
    bg: "/assets/images/labour_party.jpeg",
    name: "Enugu",
    link: "/video-gallery/6",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"
  },
  {
    id: "7",
    bg: "/assets/images/labour_party.jpeg",
    name: "Abuja",
    link: "/video-gallery/7",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"
  },
  { id: "8",
    bg: "/assets/images/labour_party.jpeg",
    name: "Kano",
    link: "/video-gallery/8",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim quidem in nisi rerum recusandae quos, sint mollitia nemo perferendis dolores nostrum asperiores error vero itaque similique eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe eveniet incidunt? Beatae, porro et!"
  },
];


interface Video {
  id: string;
  bg: string;
  name: string;
  link: string;
  description: string;
}

function VideoGallery() {
  const { id } = useParams();
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const updateState = () => {
      const newState = items2.filter(item => item.id === id);
      setVideo(newState[0]);
      console.log(id)
      console.log(video);
    }
     updateState();
  }, [id]);
  
  return (
    <Container>
      <div className="itemsWrapper">
        <div className="main">
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            allow="autoplay; encrypted-media"
            width="100%"
            height="100%"
          />
          <h3>Peter's video</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            enim quidem in nisi rerum recusandae quos, sint mollitia nemo
            perferendis dolores nostrum asperiores error vero itaque similique
            eveniet provident aperiam reprehenderit ipsam ipsum illo ut fugiat
            magni. Omnis ullam facilis pariatur. Eaque tempora veniam saepe
            eveniet incidunt? Beatae, porro et!
          </p>
          <s>{video?.id}</s>
        </div>
        <div className="others">
          {items2.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  gap: "10px",
                }}
              >
                <img src={item.bg} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default VideoGallery;
