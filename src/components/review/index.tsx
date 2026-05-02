//import components here
import { useEffect, useRef } from "react";
import ReviewsCard from "../reviewsCard";

//import icon here
import Star from "../star";

//import style here
import style from "./reviews.module.css";
import { useSelector } from "react-redux";

//create interface here
interface ReviewData {
  id: number;
  userName: string;
  userPic: string;
  rating: number;
  reviewMessage: string;
}

//create component here
function ReviewSection() {
  const reviews: ReviewData[] = useSelector(
    (state: any) => state.reviewsR.reviews,
  );
  const scrollRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const slider: HTMLElement | null = scrollRef.current;
    if (!slider) return;

    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    const handelMouseDown = (e: any) => {
      e.preventDefault();
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handelMouseMove = (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handelWheel = (e: any) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };

    slider.addEventListener("mousedown", handelMouseDown);
    slider.addEventListener("mousemove", handelMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("wheel", handelWheel);

    return () => {
      slider.removeEventListener("mousedown", handelMouseDown);
      slider.removeEventListener("mousemove", handelMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("wheel", handelWheel);
    };
  }, []);

  return (
    <>
      <section className={style.reviewSection} ref={scrollRef}>
        <div className={style.reviewsHead}>
          <h2 className={style.reviewsTitle}>Trustpilot Reviews</h2>
          <p>
            5.0 <Star />
          </p>
        </div>
        <div className={style.reviewsCards}>
          {reviews.map((review: ReviewData, index: number) => {
            return <ReviewsCard key={index} review={review} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ReviewSection;
