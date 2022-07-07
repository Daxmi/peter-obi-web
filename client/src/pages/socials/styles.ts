import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  // h2 {
  //   font-size: 5rem;    
  //   // margin-top: 6rem;
  //   line-height: 1;
  //   margin-bottom: 2rem;
  // }
  div.itemsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  
  a.twitter {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    color: ${COLORS.black};

    :hover {
      background: #F7F9F9;
    }
  }
  div.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    p {
      font-size: 1.6rem;
    }

  }
  div.logo {
    width: 30px;
    height: 30px;
    marginLeft: auto;

    svg {
      color: #1D9BF0;
      height: 100%;
      width: 100%;
    }
  }
  

`;
