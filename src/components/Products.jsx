import React from "react";
import { Div } from "./StyledProducts";
import Product from "./Product";

function Products({ products, setKorpa, setShow }) {
  return (
    <Div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          setKorpa={setKorpa}
          setShow={setShow}
        />
      ))}
    </Div>
  );
}

export default Products;
