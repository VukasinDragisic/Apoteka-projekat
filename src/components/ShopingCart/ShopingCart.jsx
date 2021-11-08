import { Redirect } from "react-router";
import { DivCart } from "./StyledShopingCart";

function ShopingCart({ korpa, setKorpa, loggedIn }) {
  return loggedIn ? (
    <div style={{ margin: "50px" }}>
      {korpa.map((stavkakorpe) => (
        <DivCart key={stavkakorpe.id}>
          <p>{stavkakorpe.name}</p>
          <img src={stavkakorpe.img} alt="slika" style={{ width: "120px" }} />
          <p>Kolicina : {stavkakorpe.quantity}</p>
          <button
            onClick={() => {
              setKorpa((prev) => {
                let kopija = JSON.parse(JSON.stringify(prev));
                console.log(kopija);
                let nadjenEl = kopija.find((el) => el.id === stavkakorpe.id);
                nadjenEl.quantity++;

                return kopija;
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setKorpa((prev) => {
                let kopija = JSON.parse(JSON.stringify(prev));
                console.log(kopija);
                let nadjenEl = kopija.find((el) => el.id === stavkakorpe.id);
                if (nadjenEl.quantity !== 0) {
                  nadjenEl.quantity--;
                }
                return kopija;
              });
            }}
          >
            -
          </button>

          <p>Cena proizvoda : {stavkakorpe.quantity * stavkakorpe.price}</p>
        </DivCart>
      ))}
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default ShopingCart;
