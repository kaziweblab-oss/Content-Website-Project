//import style here
import { useEffect, useRef } from "react";
import ContentCard from "../../contentCard";
import style from "./weeklySection.module.css";

function WeeklyDeals() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
      <section className={style.section}>
        <div className={style.containeer}>
          <div className={style.head}>
            <p className={style.headTitle}>Weekly Deals</p>
            <div>
              <div className={style.hr}></div>
              <button className={style.btn}>Browse All</button>
            </div>
            <p className={style.time}>
              <span>06</span> : <span>24</span> : <span>59</span> :{" "}
              <span>01</span>
            </p>
          </div>
          <div className={style.body} ref={scrollRef}>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default WeeklyDeals;
