import styled from "styled-components";
import COLORS from "../../../styles/colors";

export const Container = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  div.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    h5 {
      font-size: 2rem;
      border-bottom: 2px solid #fff;
    }
    a {
      color: ${COLORS.black};
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.2s;
      svg {
        color: #999;
      }
      :hover {
        color: #999;
      }
    }
  }
  div.itemsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    div {
      img {
        max-height: 20rem;
        width: 100%;
        object-fit: cover;
        transition: all 0.2s;
      }
      a.link {
        right: 1rem;
        color: #eee;
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
        display: block;
      }
      a.btn {
        border: 1px solid #ccc;
        color: ${COLORS.white};
        padding: 0.8rem 1rem;
        margin: 1rem 0.4rem;
        display: inline-block;
        transition: all 0.1s;
        :hover {
          background-color: ${COLORS.white};
          color: ${COLORS.black};
        }
      }
      :hover {
        a.link {
          text-decoration: underline;
        }
      }
    }
  }
`;
