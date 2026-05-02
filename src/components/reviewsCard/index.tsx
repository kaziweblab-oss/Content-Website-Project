//import star icon here
import Star from "../star";

//makeing interface here
interface ReviewData {
  id: number;
  userName: string;
  userPic: string;
  rating: number;
  reviewMessage: string;
}

interface ReviewProps {
  review: ReviewData;
}

//import style here
import style from "./reviewsCard.module.css";

//create component here
function ReviewsCard({ review }: ReviewProps) {
  const { userName, userPic, rating, reviewMessage } = review;
  return (
    <>
      <section className={style.reviewCard}>
        <div className={style.reviewContainer}>
          <div className={style.ratingSection}>
            <img
              className={style.reviewerPic}
              src={userPic}
              alt="reviewerPic"
            />
            <div>
              <p className={style.reviewerName}>{userName}</p>
              <div className={style.starSection}>
                {" "}
                {Array.from({ length: rating }, (_, index) => {
                  return <Star key={index} />;
                })}
              </div>
            </div>
          </div>
          <p className={style.reviewerMessage}>{reviewMessage}</p>
        </div>
      </section>
    </>
  );
}

export default ReviewsCard;
