import styled from "styled-components";

export const Section = styled.section`
  background-image: url(${process.env.PUBLIC_URL + "/images/slika1.jpg"});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: white;
    margin: 100px;

    span {
      margin: 5px 0;
      color: #555;
      border-bottom: 1px solid #e67e22;
    }
  }
`;
