import React, { useState } from "react";
import { DivProduct } from "./StyledProduct";

function Product({ product, setKorpa, setShow }) {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [div, setDiv] = useState(true);
  return div ? (
    <DivProduct>
      <div className="title">
        <p>{product.name}</p>
        <p>{product.brand}</p>
      </div>

      <div className="content">
        <div className="left">
          <img
            src={product.img}
            alt="slika"
            onClick={() => {
              setDiv(!div);
            }}
          />
        </div>

        <div className="right">
          <p>{product.price} RSD</p>
          <div>
            <button
              onClick={() => {
                let kolicina = quantity + 1;
                setQuantity(kolicina);
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                if (quantity !== 0) {
                  setQuantity(quantity - 1);
                } else return -1;

                let kolicina = quantity - 1;
                setQuantity(kolicina);
              }}
            >
              -
            </button>
          </div>
          <div className="quantity">
            <span>{quantity}</span>
          </div>
          <button
            className="buttonKorpa"
            onClick={() => {
              if (quantity !== 0) {
                setKorpa((prev) => {
                  // prvo provera da li u prev postoji objekat sa takvim id-em, ako ne postoji stavi u korpu ako postoji update quantity

                  return [
                    ...prev,
                    {
                      name: product.name,
                      quantity: quantity,
                      price: product.price,
                      img: product.img,
                      id: product.id,
                    },
                  ];
                });
                setTotal(`${quantity * product.price}.00 RSD`);

                setShow(true);
                setTimeout(() => {
                  setShow(false);
                }, 2000);
              }
            }}
          >
            Dodaj u kopru
          </button>
        </div>
      </div>
    </DivProduct>
  ) : (
    <DivProduct
      onClick={() => {
        setDiv(!div);
      }}
    >
      {product.info}
    </DivProduct>
  );
}

export default Product;
