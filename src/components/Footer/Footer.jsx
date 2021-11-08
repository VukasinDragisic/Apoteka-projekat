import React from "react";
import { Footercomponent } from "./StyledFooter";
function Footer() {
  return (
    <Footercomponent>
      <div className="contact">
        <span> Adresa</span>
        <p>Velimira Bate Zivojinovica 16/IV, Beograd</p>
        <span> Telefon - informacije o lekovima</span>
        <p>+381 11 243 50 08</p>
        <span>Faks direkcija</span>
        <p> +381 11 744 00 30</p>
        <span> Elektronska posta</span>
        <p>office@lifeapoteka@gmail.com</p>
      </div>
      <div className="imgDiv">
        <img
          className="face"
          src={process.env.PUBLIC_URL + "/images/facebook.png"}
          alt="face"
        />
        <img
          className="insta"
          src={process.env.PUBLIC_URL + "/images/instagram.png"}
          alt="face"
        />
        <img
          className="youtube"
          src={process.env.PUBLIC_URL + "/images/youtube.png"}
          alt="face"
        />
        <img
          className="android"
          src={process.env.PUBLIC_URL + "/images/android.png"}
          alt="face"
        />
        <img
          className="apple"
          src={process.env.PUBLIC_URL + "/images/apple.png"}
          alt="face"
        />
      </div>
    </Footercomponent>
  );
}

export default Footer;
