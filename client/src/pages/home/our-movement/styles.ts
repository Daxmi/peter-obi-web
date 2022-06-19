import styled from "styled-components";
import COLORS from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;
  background-image: linear-gradient(#f9f9f9, #eee);
  div.images {
    margin-left: 2rem;
    img {
      height: 20rem;
      width: 15rem;
      object-fit: cover;
    }
  }
  div.desc {
    padding: 3rem;
    h2 {
      font-size: 5rem;
      margin-top: 2rem;
      line-height: 1;
      margin-bottom: 0.4rem;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
    a {
      background-color: ${COLORS.red};
      color: ${COLORS.white};
      padding: 0.8rem 1rem;
      margin: 1rem 0.4rem;
      display: inline-block;
    }
  }
`;
