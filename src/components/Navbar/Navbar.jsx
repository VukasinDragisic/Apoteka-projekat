import React, { useState } from "react";
import { StyledNav, Logo } from "./StyledNavbar";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Contact from "../Contact/Contact";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import InputSearch from "../InputSearch/InputSearch";
import Select from "../Select/Select";
import Products from "../Products";
import ShopingCart from "../ShopingCart/ShopingCart";
import ShopingCartPopUp from "../ShopingCart/ShopingCartPopUp";

function Navbar({
  setInputSearch,
  brands,
  setOptions,
  filterdProducts,
  setKorpa,
  korpa,
  sortirani,
}) {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  console.log(korpa);
  return (
    <>
      <BrowserRouter>
        <StyledNav>
          <Logo src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
          <Link to="/">Pocetna</Link>
          <Link to="/login">Uloguj se</Link>
          <Link to="/register">Registruj se</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/shopingcart">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/korpa.png"}
                alt="slika"
                style={{ width: "40px", position: "relative" }}
              />
              <ShopingCartPopUp show={show} />
            </div>
          </Link>
        </StyledNav>
        <Switch>
          <Route exact path="/">
            <Home products={sortirani} setKorpa={setKorpa} setShow={setShow} />
          </Route>
          <Route exact path="/proizvodi">
            <InputSearch setInputSearch={setInputSearch} />
            <Select brands={brands} setOptions={setOptions} />
            <Products
              products={filterdProducts}
              setKorpa={setKorpa}
              setShow={setShow}
            />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/shopingcart">
            <ShopingCart korpa={korpa} setKorpa={setKorpa} loggedIn={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
