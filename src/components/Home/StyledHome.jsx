import styled from "styled-components";

export const StyledHome = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${process.env.PUBLIC_URL + "/images/homeslika.jpeg"});
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const StyledDiv = styled.div`
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const H1 = styled.h1`
  font-weight: 300;

  letter-spacing: 1px;
  margin-bottom: 20px;
  color: white;
  font-size: 240%;
  word-spacing: 3px;
`;

export const Button = styled.div`
  a {
    display: inline-block;
    padding: 10px 30px;
    font-size: 100%;
    border-radius: 200px;
    background-color: #e67e22;
    border: 1px solid #e67e22;
    color: white;
    text-decoration: none;
    transition: all 0.4s;
    transform: translateY(-3px);

    &:hover {
      background-color: white;
      color: #e67e22;
      border: 1px solid #a15512;
    }
    &:active {
      transform: translateY(-1px);
    }
  }
`;
