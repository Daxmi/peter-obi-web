import styled from "styled-components";
import COLORS from "../../../styles/colors";

export const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
  h2 {
    font-size: 5rem;
    margin-top: 6rem;
    line-height: 1;
    margin-bottom: 2rem;
  }
  div.itemsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    a {
      position: relative;
      display: block;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.5s;
      }
      p.state {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        z-index: 1;
        color: #eee;
        text-transform: uppercase;
        transition: all 0.3s;
      }
      div.details {
        position: absolute;
        bottom: -4rem;
        right: 1rem;
        z-index: 1;
        color: #eee;
        text-align: right;
        transition: all 0.3s;
        p {
          display: flex;
          align-items: center;
          svg {
            width: 1rem;
            height: 1rem;
          }
        }
      }
      div.overlay {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
    a:hover {
      img {
        transform: scale(1.2);
      }
      p.state {
        font-weight: bold;
        color: #fff;
        bottom: 6rem;
      }
      div.details {
        bottom: 2rem;
      }
      div.overlay {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
  a.viewMore {
    background-color: ${COLORS.red};
    color: ${COLORS.white};
    padding: 0.8rem 1rem;
    margin: 1rem 0.4rem;
    display: inline-block;
  }
`;
