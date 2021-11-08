import styled from "styled-components";

export const Footercomponent = styled.footer`
  background-color: rgb(34, 34, 34);
  padding: 10px;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .contact {
    color: #555;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span {
      margin-bottom: 3px;
    }
    p {
      font-size: 80%;
      margin-bottom: 5px;
      color: white;
    }
  }
  .imgDiv {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;

    img {
      width: 40px;
      margin-right: 20px;
      transition: color 0.3s;
      padding: 4px;
      border-radius: 3px;
      transition: all 0.5s;
    }
  }
  .face:hover {
    background-color: #3b5999;
  }
  .insta:hover {
    background-color: #e4405f;
  }
  .youtube:hover {
    background-color: #ff0000;
  }
  .android:hover {
    background-color: #6ecb63;
  }
  .apple:hover {
    background-color: #555;
  }
`;
