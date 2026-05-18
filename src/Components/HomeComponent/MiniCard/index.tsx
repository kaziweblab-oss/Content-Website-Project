//import style here
import { GoClockFill } from "react-icons/go";
import style from "./miniCard.module.css";

//create interface here
interface miniCardProps {
  img: string;
  cardTitle: string;
  prize: number | false;
  save: number;
  offer: number;
  startsAt: number | false;
  releaseDate: false | string;
  readTime: false | number;
}

function MiniCard({
  img,
  cardTitle,
  prize,
  save,
  offer,
  startsAt,
  releaseDate,
  readTime,
}: miniCardProps) {
  return (
    <>
      <article
        className={`${prize ? style.cardSection : style.miniCardWithoutPrize}`}
      >
        <img src={img} alt={cardTitle + " Image"} className={style.cardImage} />
        <div className={style.containeer}>
          <p className={style.title}>{cardTitle}</p>
          <div className={style.offerBody}>
            {prize && offer && (
              <>
                <div className={style.offerSection}>
                  <p>From</p>
                  <p className={style.offer}>
                    <span>${offer}</span> to
                  </p>
                </div>
                <div className={style.prizeSection}>
                  <p className={style.prize}>${prize}</p>
                </div>
              </>
            )}
            {startsAt && (
              <>
                <div>
                  <p className={style.startsAt}>
                    Starts At <span>${startsAt}</span>
                  </p>
                </div>
              </>
            )}
            <div className={`${readTime && releaseDate && style.timeSection}`}>
              {releaseDate && (
                <div className={style.releaseDate}>
                  <p>{releaseDate}</p>
                </div>
              )}
              {readTime && (
                <div className={style.readTime}>
                  <p>
                    <GoClockFill className={style.clockIcon} />
                  </p>
                  <p>{readTime} min read</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {prize && (
          <div className={style.btnSection}>
            <button className={style.btn}>save {save}%</button>
          </div>
        )}
      </article>
    </>
  );
}

export default MiniCard;
