import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
  margin: 3rem 0;
  
  .photo-item {
    display: flex;
    width: 300px;
  }
  
  .photo-item img {
    width: 100%;
    height: 100%;
    border: 4px double rgba(0, 0, 0, 0.12);
  }
`;
