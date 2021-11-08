import styled from "styled-components";

export const DivProduct = styled.div`
  display: flex;
  flex: 30%;
  text-align: center;
  flex-direction: column;
  margin: 20px;
  border: 2px solid #e67e22;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 3px;

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    transition: all 1s;
    &:hover {
      transform: translateX(-10px);
    }
    &:active {
      transform: translateX(-5px);
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quantity {
    display: block;
    margin-top: 10px;
    padding: 4px;
  }

  button {
    width: 40px;
    height: 20px;
    box-shadow: 0 4px 4px #888888;
    color: #e67e22;
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

  .buttonKorpa {
    width: auto;
    height: 30px;
    padding: 5px 10px;
  }
`;
