import React from "react";
import { Section } from "./StyledContact";

function Contact() {
  return (
    <Section>
      <div>
        <span> Adresa </span>
        <p>Velimira Bate Zivojinovica 16/IV, Beograd</p>
        <span> Telefon - informacije o lekovima </span>
        <p>+381 11 243 50 08</p>
        <span>Faks direkcija </span>
        <p> +381 11 744 00 30</p>
        <span> Elektronska posta </span>
        <p>office@lifeapoteka@gmail.com</p>
      </div>
    </Section>
  );
}

export default Contact;
