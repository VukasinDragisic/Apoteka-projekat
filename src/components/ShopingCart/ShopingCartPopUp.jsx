import { DivPop } from "./StyledPopUp";

function ShopingCartPopUp({ show }) {
  return show ? (
    <DivPop>
      <img src={process.env.PUBLIC_URL + "/images/accept.png"} />
    </DivPop>
  ) : null;
}

export default ShopingCartPopUp;
