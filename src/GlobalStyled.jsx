import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: #fff;
    color: #555;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
}
`;
export default GlobalStyled;
