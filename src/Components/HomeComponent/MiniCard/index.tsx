//import style here
import style from "./miniCard.module.css";

//create interface here
interface miniCardProps {
  img: string;
  cardTitle: string;
  prize: number | false;
  save: number;
  offer: number;
  startsAt: number | false;
}

function MiniCard({
  img,
  cardTitle,
  prize,
  save,
  offer,
  startsAt,
}: miniCardProps) {
  return (
    <>
      <article className={style.cardSection}>
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
