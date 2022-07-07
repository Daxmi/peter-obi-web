import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    // width: 100%;
    background-color: rgba(0, 21, 104, 0.15);
    height: 100%; 
`

export const Wrapper = styled.div`
    position: relative;
    margin: 50px auto;
    width: 90%;
    max-width: 900px;
`

export const Content = styled.div`
    background-color: white;
    height: 300px;
`

export const Close = styled.div` 
    position: absolute;
    right: -50px;
    cursor: pointer;
    color: gray;
    background: #fff;
    // padding: 10px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: bold;

    :hover {
        color: #000;
    }
`