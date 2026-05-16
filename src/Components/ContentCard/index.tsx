//import style here
import style from "./contentCard.module.css";

//import image here
import image from "../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told 1.jpg";

//import icons here
import Star from "../Star";
import path1 from "../../Assets/Home/Hero/Logo/path-1.png";
import xboxIcon from "../../Assets/Home/Hero/Logo/g4146.png";
import stickIcon from "../../Assets/Home/Hero/Logo/Retângulo 150200.png";
import keyLogo from "../../Assets/Home/Hero/Logo/União 126.png";
import profileIcone from "../../Assets/Home/Hero/Logo/path0.png";

//creating interface here
interface contentCardProps {
  offer: boolean;
}

function ContentCard({ offer }: contentCardProps) {
  return (
    <>
      <article className={style.article}>
        <div className={style.overlay}></div>
        <div className={style.imageSection}>
          <img src={image} alt="Weekly deals image" />
          <p>-25%</p>
        </div>
        <div className={style.articleBody}>
          <p className={style.articleTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa
            blanditiis minima cumque! Esse est minus distinctio, animi
            consequatur aliquam.
          </p>
          {offer && (
            <div className={style.offerSection}>
              <div className={style.articleHead}>
                <div className={style.discount}>
                  <p>From </p>
                  <p>$70 to</p>
                </div>
                <p className={style.prize}>$59,99</p>
              </div>
              <p className={style.starSection}>
                <Star width="20" height="20" />
                <Star width="20" height="20" />
                <Star width="20" height="20" />
                <Star width="20" height="20" />
                <Star width="20" height="20" />
              </p>
            </div>
          )}
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
        </div>
      </article>
    </>
  );
}

export default ContentCard;
