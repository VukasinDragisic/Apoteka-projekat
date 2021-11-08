import styled from "styled-components";

export const DivCart = styled.div`
  display: flex;
  flex: 30%;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  border: 2px solid green;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 3px;
  align-items: center;

  button {
    width: 40px;
    height: 20px;
    box-shadow: 0 4px 4px #888888;
    color: green;
    margin: 20px 4px 4px 4px;
    border: none;
    border-radius: 1px solid;
    transition: all 0.4s;
    &:hover {
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;
