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
      border-bottom: 2px solid #fff;
    }
  }

  div.itemsWrapper {
    display: flex;
    gap: 30px;

    .main {
      flex: 3;
      height: 70vh;

      h3 {
        margin: 1rem 0;
        font-size: 2rem;
      }

      p {
        width: 70%;
      }
    }

    .others {
      flex: 1;
      scroll-behaviour: smooth;
      max-height: 100vh;
      overflow-y: auto; 
      ::-webkit-scrollbar {
        width: 1px;
      }
  
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #fff; 
        border-radius: 10px;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #fff; 
        border-radius: 10px;
      }
  
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #fff; 
      }

      a {
        color: #000;
      }
      
      a:hover {
        text-decoration: underline;
      }
      img {
        width: 60%;
        height: 50%;
      }

      p {
        font-size: 1.4rem;
        margin-top: 1rem;
        overflow: hidden;
          
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
