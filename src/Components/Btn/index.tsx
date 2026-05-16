//import style here
import style from "./btn.module.css";

//import icon here
import { LiaCartPlusSolid } from "react-icons/lia";

function Btn() {
  return (
    <button className={style.btn}>
      <LiaCartPlusSolid className={style.cartIcon} /> Buy Now
    </button>
  );
}

export default Btn;
