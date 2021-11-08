import styled from "styled-components";

export const SectionR = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${process.env.PUBLIC_URL + "/images/register.jpg"});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 600px;
    width: 600px;
  }

  a {
    color: #e67e22;
    text-decoration: none;
    &:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #e67e22;
    }
  }

  input {
    display: block;
    width: 400px;
    height: 50px;
    padding: 7px;
    border-radius: 3px;
    border: 1px solid #e67e22;
    background: white;
    color: #e67e22;
    margin-bottom: 10px;
    border-radius: 30px;
    font-size: 20px;
    outline: 0;
    opacity: 0.8;
    text-align: center;

    &::placeholder {
      color: #e67e22;
      text-align: center;
    }

    &[type="submit"] {
      background-color: transparent;
      opacity: 1;
      color: white;
      background-color: #e67e22;
      transition: all 0.4s;

      &:hover {
        border: 4px solid #e67e22;
        color: #e67e22;
        background-color: black;
        transform: translateY(-3px);
      }
      &:active {
        transform: translateY(-1px);
      }
    }
  }
`;
