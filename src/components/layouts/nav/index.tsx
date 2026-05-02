//import style
import style from "./nav.module.css";

//import icons
import { HiOutlineMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

//import logo
import logo from "../../../assets/home/logo/União 108.svg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Nav() {
  return (
    <>
      <nav className={style.navSection}>
        <div className={style.navContaineer}>
          <div className={style.logoSection}>
            <HiOutlineMenuAlt2 className={style.hambargurMenu} />
            <img src={logo} alt="logo" />
          </div>
          <div className={style.iconSection}>
            <input type="text" className={style.searchbox} />
            <IoSearch className={style.searchicon} />
            <AiOutlineDollarCircle className={style.dollarIcon} />
            <FaRegHeart className={style.icon} />
            <HiOutlineShoppingBag className={style.icon} />
            <CgProfile className={style.icon} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
