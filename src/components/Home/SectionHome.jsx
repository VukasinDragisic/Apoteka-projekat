import React from "react";

function SectionHome() {
  return (
    <section style={{ width: "auto", height: "700px" }}>
      <div>
        <img
          style={{
            display: "block",
            marginTop: "80px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "auto",
          }}
          src={process.env.PUBLIC_URL + "/images/proizvodinedelje.jpg"}
          alt="slika"
        />
      </div>
      <div
        style={{
          width: "80%",

          display: "block",
          marginTop: "80px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Poverenje, sigurnost i dostupnost su, već skoro 30 godina, glavna
        obeležja Apotekarske ustanove “Life pharm”. Ljubav i podrška koju
        svakodnevno dobijamo od vernih klijenata omogućila je da postanemo jedna
        od najpoznatijih i najposećenijih apoteka. Naše apoteke pružaju primarnu
        zdravstvenu zaštitu već 29 godina. Prva apoteka je otvorena u Beogradu
        1992. godine, a Life pharm postaje Zdravstvena Ustanova "Life pharm"
        22.12.2005. godine. Danas Life pharm u svom sistemu ima preko 80 ogranka
        širom Srbije i više od 300 zaposlenih u Kolubarskom okrugu, Beogradu,
        Vojvodini i Šumadiji. Tačne lokacije apoteka možete pogledati . U našim
        apotekama se izdaju lekovi na civilni i vojni recept, kao i lekovi sa D
        liste. Svakodnevno se u različitim ograncima održavaju akcije, promocije
        i savetovališta dostupne svima. Naš lanac karakteriše konstantna težnja
        za unapređenjem usluge, proširenjem asortimana i edukacijom naših
        farmaceuta i farmaceutskih tehničara koji će se pobrinuti da svi iz naše
        apoteke uvek izadju sa pravim proizvodom uz pravi savet.
      </div>
    </section>
  );
}

export default SectionHome;
