//import image here
import heropic from "../../assets/home/hero/image/hero.jpg";
import heroPicPhone from "../../assets/home/hero/image/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a 3.jpg";
import pic1 from "../../assets/home/hero/image/damian_lynn_-_truth_be_told 1.jpg";
import pic2 from "../../assets/home/hero/image/damian_lynn_-_truth_be_told-1.jpg";
import pic3 from "../../assets/home/hero/image/damian_lynn_-_truth_be_told-2.jpg";
import pic4 from "../../assets/home/hero/image/damian_lynn_-_truth_be_told-3.jpg";
import pic5 from "../../assets/home/hero/image/damian_lynn_-_truth_be_told-4.jpg";

//import icons here
import path1 from "../../assets/home/hero/logo/path-1.png";
import xboxIcon from "../../assets/home/hero/logo/g4146.png";
import stickIcon from "../../assets/home/hero/logo/Retângulo 150200.png";
import keyLogo from "../../assets/home/hero/logo/União 126.png";
import profileIcone from "../../assets/home/hero/logo/path0.png";

import { LiaCartPlusSolid } from "react-icons/lia";

//import style here
import style from "./heroSection.module.css";
import { useEffect, useState } from "react";
import Star from "../star";

function HeroSection() {
  const [phoneView, setPhoneView] = useState(false);
  const handelResize = () => {
    console.log("resize");
    const currentWidth = window.innerWidth;
    if (currentWidth <= 720) {
      setPhoneView(true);
    } else {
      setPhoneView(false);
    }
  };

  useEffect(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 720) {
      setPhoneView(true);
    } else {
      setPhoneView(false);
    }
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  const phone = <img src={heroPicPhone} className={style.heroPicP} alt="" />;
  const desctop = <img src={heropic} className={style.heroPic} alt="" />;
  return (
    <>
      <section className={style.heroSection}>
        <div className={style.heroContaineer}>
          <div className={style.overlay}></div>
          <div className={style.heroImageSection}>
            {phoneView ? phone : desctop}
          </div>
          <div className={style.heroContent}>
            <div className={style.iconSection}>
              <a>
                <img className={style.icon} src={path1} alt="" />
              </a>
              <a>
                <img className={style.icon} src={xboxIcon} alt="" />
              </a>
              <a>
                <img className={style.icon} src={stickIcon} alt="" />
              </a>
              <a>
                <img className={style.icon} src={profileIcone} alt="" />
              </a>
              <a>
                <img className={style.icon} src={keyLogo} alt="" />
              </a>
            </div>
            <div className={style.heroTextSection}>
              <p className={style.heroTitle}>Death Standing</p>
              <p className={style.heroText}>
                From <span>$70</span> to <span>$59,99</span>{" "}
                {!phoneView && (
                  <span className={style.starSection}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                )}
              </p>
              <button className={style.heroBtn}>
                <LiaCartPlusSolid className={style.cartIcon} /> Buy Now
              </button>
            </div>
            <div className={style.imageSection}>
              <img className={style.image} src={pic1} alt="" />
              <img className={style.image} src={pic2} alt="" />
              <img className={style.image} src={pic3} alt="" />
              <img className={style.image} src={pic4} alt="" />
              <img className={style.image} src={pic5} alt="" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
