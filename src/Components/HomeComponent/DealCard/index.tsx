import { useEffect, useState } from "react";

// import style here
import style from "./dealCard.module.css";

// import icons here
import icon1 from "../../../Assets/Home/Hero/Logo/path-1.png";
import icon2 from "../../../Assets/Home/Hero/Logo/g4146.png";
import icon3 from "../../../Assets/Nav/Icon/União 89.svg";
import icon4 from "../../../Assets/Home/Hero/Logo/Retângulo 150200.png";
import icon5 from "../../../Assets/Home/Hero/Logo/path0.png";
import icon6 from "../../../Assets/Home/Hero/Logo/União 126.png";
import shape from "../../../Assets/Home/DealCard/União 112.png";
import Btn from "../../Btn";
import Star from "../../Star";

//Create interface here
interface DealCardProps {
  img: string;
  txt: string;
}

function DealCard({ img, txt }: DealCardProps) {
  const [starSize, useStarSize] = useState<string>("0");
  useEffect(() => {
    if (window.innerWidth <= 850) {
      useStarSize("15");
    } else {
      useStarSize("20");
    }

    const handelResize = () => {
      if (window.innerWidth <= 850) {
        useStarSize("15");
      } else {
        useStarSize("20");
      }
    };
    window.addEventListener("resize", handelResize);

    return window.removeEventListener("resize", handelResize);
  }, []);

  return (
    <>
      <section className={style.dealSection}>
        <img src={img} alt={img} className={style.dealImage} />
        <div className={style.main}>
          <div className={style.container}>
            <div className={style.iconSection}>
              <img src={icon1} alt="icon" className={style.icon} />
              <img src={icon2} alt="icon" className={style.icon} />
              <img src={icon3} alt="icon" className={style.icon} />
              <img src={icon4} alt="icon" className={style.icon} />
              <img src={icon5} alt="icon" className={style.icon} />
              <img src={icon6} alt="icon" className={style.icon} />
            </div>
            <div className={style.save}>
              <div className={style.saveContaineer}>
                <img src={shape} alt="shape" className={style.saveShape} />
                <p className={style.saveText}>
                  <span>Save</span>
                  <span>25%</span>
                </p>
              </div>
            </div>
            <p className={style.sectionTitle}>{txt}</p>
            <div className={style.sectionBody}>
              <p className={style.offer}>
                From <span>$70</span> to <span>$59,99</span>
              </p>
              <div className={style.starSection}>
                <Star width={starSize} height={starSize} />
                <Star width={starSize} height={starSize} />
                <Star width={starSize} height={starSize} />
                <Star width={starSize} height={starSize} />
                <Star width={starSize} height={starSize} />
              </div>
            </div>
            <Btn />
          </div>
        </div>
      </section>
    </>
  );
}

export default DealCard;
