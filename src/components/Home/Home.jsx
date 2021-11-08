import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products";
import { StyledHome, StyledDiv, H1, Button } from "./StyledHome";
import Footer from "../Footer/Footer";
import SectionHome from "./SectionHome";

function Home({ products, setKorpa, setShow }) {
  return (
    <>
      <StyledHome>
        <StyledDiv>
          <H1>Life Pharm</H1>
          <Button>
            <Link to="/proizvodi">Idi u proizvode</Link>
          </Button>
        </StyledDiv>
      </StyledHome>

      <Products products={products} setKorpa={setKorpa} setShow={setShow} />
      <SectionHome />
      <Footer />
    </>
  );
}

export default Home;
