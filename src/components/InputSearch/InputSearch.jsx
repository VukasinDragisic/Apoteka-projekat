import React from "react";
import { Input } from "./StyledInputSearch";

function InputSearch({ setInputSearch }) {
  return (
    <Input
      type="text"
      placeholder="Pretrazite proizvod..."
      onChange={(e) => {
        setInputSearch(e.target.value);
      }}
    />
  );
}

export default InputSearch;
