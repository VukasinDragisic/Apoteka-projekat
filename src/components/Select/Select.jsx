import { Selectstyle } from "./StyledSelect";

function Select({ brands, setOptions }) {
  return (
    <Selectstyle
      onChange={(e) => {
        setOptions(e.target.value);
        console.log(e.target.value);
      }}
    >
      <option hidden value="">
        Pretrazi proizvodjaca
      </option>
      {brands.map((brand) => (
        <option value={brand} key={brand}>
          {brand}
        </option>
      ))}
    </Selectstyle>
  );
}

export default Select;
