import styled from "styled-components";
import COLORS from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  div {
    flex: 1;
  }
  div.images {
    height: 40rem;
    width: 100%;
    position: relative;
    .carousel {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 2;
      opacity: 0;
      transition: opacity 1.5s ease-in;
    }
    .carousel.live {
      z-index: 3;
      opacity: 1;
    }
  }
  div.desc {
    padding: 3rem;
    a.donate {
      color: ${COLORS.black};
      font-weight: bold;
      font-size: 2rem;
      svg {
        transition: all 0.2s;
        height: 1.4rem;
        width: 1.4rem;
      }
    }
    a.donate:hover {
      color: ${COLORS.red};
      svg {
        margin-left: 0.5rem;
      }
    }
    h2 {
      font-size: 5rem;
      margin-top: 2rem;
      line-height: 1;
      margin-bottom: 1rem;
      text-decoration: underline;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
