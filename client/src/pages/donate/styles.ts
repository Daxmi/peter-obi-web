import styled from "styled-components";
import COLORS from "../../styles/colors";

export const Container = styled.div`
  min-height: 80rem;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
  }
`;

export const DetailsContainer = styled.div`
  h3 {
    font-size: 5rem;
    margin-top: 2rem;
    line-height: 1;
    margin-bottom: 1rem;
    text-decoration: underline;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  width: 50rem;
  padding: 5rem;

  .header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 1rem;
    background: transparent;

    button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem;
      border: 1px solid #aaa;

      &:first-child {
        border-right-width: 0ch;
      }
      &.active {
        background-color: ${COLORS.red};
        color: ${COLORS.white};
      }
    }
  }
`;

export const Form = styled.form`
  background-color: #efefef;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: normal;
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  font-size: 1.4rem;
  padding-left: 1rem;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  select {
    width: 20%;
    height: 4rem;
    border-radius: 0.5rem 0 0 0.5rem;
    padding-left: 1rem;
  }

  input {
    width: 80%;
    height: 4rem;
    border-radius: 0 0.5rem 0.5rem 0;
    border: 1px solid gray;
    padding-left: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 2rem;
  color: ${COLORS.white};
  text-transform: uppercase;
  background-color: ${COLORS.red};
`;
