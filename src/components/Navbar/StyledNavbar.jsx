import styled from "styled-components";

export const StyledNav = styled.nav`
  background: darkgrey;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  top: 0;
  background-color: rgba(247, 247, 247, 0.98);
  box-shadow: 0 2px 2px rgb(192, 192, 192);
  z-index: 1;

  a {
    color: #555;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 50px;
    transition: all 0.4s;
    &:hover {
      color: #e67e22;
    }
  }
`;

export const Logo = styled.img`
  height: 30px;
  position: absolute;
  left: 50px;
`;
