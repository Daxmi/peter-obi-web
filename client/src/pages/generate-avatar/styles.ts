import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 40rem;
  margin-top: 10rem;

  div.templatesContainer {
    flex: 1;
    h3 {
      font-size: 5rem;
      margin-top: 2rem;
      line-height: 1;
      margin-bottom: 1rem;
      text-decoration: underline;
    }
    p {
      margin: 1rem 0;
    }
    div.imagesWrapper {
      display: flex;
      gap: 2rem;
      img {
        height: 8rem;
        width: 8rem;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
  div.preview {
    flex: 1;
    height: 100%;
    width: 100%;
    min-height: 40rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: all 0.5s;
  }
`;

export const Button = styled.a`
  border-radius: 0.5rem;
  border: none;
  display: inline-block;
  margin-top: 3rem;
  padding: 1rem;
  color: ${COLORS.white};
  text-transform: uppercase;
  background-color: ${COLORS.red};
`;
