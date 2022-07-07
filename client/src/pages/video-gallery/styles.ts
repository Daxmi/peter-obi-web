import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
  margin: 3rem 0;
  // background-color: #000;
  color: #000;
  padding: 1rem;
  padding-bottom: 2rem;
  div.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    h5 {
      font-size: 2rem;
      // border-bottom: 2px solid #000;
    }
  }
  div.itemsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    img {
      max-height: 20rem;
      width: 100%;
      object-fit: cover;
    }
    a {
      right: 1rem;
      color: #000;
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
      display: block;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
