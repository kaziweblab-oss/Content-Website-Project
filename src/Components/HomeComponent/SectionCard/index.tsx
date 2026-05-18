import { useEffect, useRef, useState } from "react";

//import style here
import style from "./sectionCard.module.css";

//import Component here
import ContentCard from "../../ContentCard";
import MiniCard from "../MiniCard";

//import React Icon here
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

//create interface here
interface sectionCardProps {
  type: "section" | "miniCard";
  sectionTitle: string;
  time: boolean;
  btn: "left" | "right";
  moveArrow: boolean;
  icon: 5 | 3 | false;
  releaseDate: false | string;
  readTime: false | number;
  border: boolean;
  miniCardImage1: string | false;
  miniCardImage2: string | false;
  miniCardImage3: string | false;
  miniCardImage4: string | false;
  miniCardImage5: string | false;
  miniCard1Title: string | false;
  miniCard2Title: string | false;
  miniCard3Title: string | false;
  miniCard4Title: string | false;
  miniCard5Title: string | false;
  prize: number | false;
  startsAt: number | false;
}

function SectionCard({
  type,
  sectionTitle,
  time,
  btn,
  moveArrow,
  border,
  miniCardImage1,
  miniCardImage2,
  miniCardImage3,
  miniCardImage4,
  miniCardImage5,
  miniCard1Title,
  miniCard2Title,
  miniCard3Title,
  miniCard4Title,
  miniCard5Title,
  prize,
  startsAt,
  readTime,
  releaseDate,
}: sectionCardProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [width, useWidth] = useState(Number);

  useEffect(() => {
    useWidth(window.innerWidth);
    const handelResize = () => {
      useWidth(window.innerWidth);
    };

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
      if (width >= 720) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          slider.scrollLeft += e.deltaY;
        }
      }
    };

    window.addEventListener("resize", handelResize);

    slider.addEventListener("mousedown", handelMouseDown);
    slider.addEventListener("mousemove", handelMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("wheel", handelWheel);

    return () => {
      window.removeEventListener("resize", handelResize);
      slider.removeEventListener("mousedown", handelMouseDown);
      slider.removeEventListener("mousemove", handelMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("wheel", handelWheel);
    };
  }, [width]);

  const handelLeftArrowClick = () => {
    const slider: HTMLElement | null = scrollRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handelRightArrowClick = () => {
    const slider: HTMLElement | null = scrollRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {border ? (
        <section className={style.section1}>
          <div className={style.containeer}>
            <div className={style.head}>
              <p className={style.headTitle}>{sectionTitle}</p>
              {btn === "right" && (
                <div className={style.leftBtn}>
                  <div className={style.hr}></div>
                  <button className={style.btn}>Browse All</button>
                </div>
              )}
              {btn === "left" && (
                <div className={style.rightBtn}>
                  <div className={style.hr}></div>
                  <button className={style.btn}>Browse All</button>
                </div>
              )}
              {time && (
                <p className={style.time}>
                  <span>06</span> : <span>24</span> : <span>59</span> :{" "}
                  <span>01</span>
                </p>
              )}
            </div>
            <div className={style.body} ref={scrollRef}>
              <ContentCard offer={true} />
              <ContentCard offer={false} />
              <ContentCard offer={false} />
              <ContentCard offer={true} />
              <ContentCard offer={true} />
              <ContentCard offer={false} />
              <ContentCard offer={false} />
              <ContentCard offer={true} />
              <ContentCard offer={true} />
              <ContentCard offer={false} />
              <ContentCard offer={false} />
              <ContentCard offer={true} />
            </div>
          </div>
        </section>
      ) : (
        <>
          {type === "miniCard" && (
            <section className={style.miniCard}>
              <div className={style.head}>
                <p className={style.miniCardTitle}>{sectionTitle}</p>
                {btn === "right" && (
                  <div className={style.leftBtn}>
                    <div className={style.hr}></div>
                    <button className={style.btn}>Browse All</button>
                  </div>
                )}
                {btn === "left" && (
                  <div className={style.rightBtn}>
                    <div className={style.hr}></div>
                    <button className={style.btn}>Browse All</button>
                  </div>
                )}
                {time && (
                  <p className={style.time}>
                    <span>06</span> : <span>24</span> : <span>59</span> :{" "}
                    <span>01</span>
                  </p>
                )}
              </div>
              <div className={style.bodyContaineer}>
                {moveArrow && (
                  <IoIosArrowDropleft
                    className={`${sectionTitle === "Blog Articles" ? style.moveArrowBlog : style.moveArrow}`}
                    onClick={handelLeftArrowClick}
                  />
                )}
                <div className={style.miniCardSection}>
                  {miniCardImage1 && miniCard1Title && (
                    <MiniCard
                      img={miniCardImage1}
                      cardTitle={miniCard1Title}
                      prize={prize}
                      save={25}
                      offer={70}
                      startsAt={startsAt}
                      readTime={readTime}
                      releaseDate={releaseDate}
                    />
                  )}
                  {miniCardImage2 && miniCard2Title && (
                    <MiniCard
                      img={miniCardImage2}
                      cardTitle={miniCard2Title}
                      prize={prize}
                      save={25}
                      offer={70}
                      startsAt={startsAt}
                      readTime={readTime}
                      releaseDate={releaseDate}
                    />
                  )}
                  {miniCardImage3 && miniCard3Title && (
                    <MiniCard
                      img={miniCardImage3}
                      cardTitle={miniCard3Title}
                      prize={prize}
                      save={25}
                      offer={70}
                      startsAt={startsAt}
                      readTime={readTime}
                      releaseDate={releaseDate}
                    />
                  )}{" "}
                  {miniCardImage4 && miniCard4Title && (
                    <MiniCard
                      img={miniCardImage4}
                      cardTitle={miniCard4Title}
                      prize={prize}
                      save={25}
                      offer={70}
                      startsAt={startsAt}
                      readTime={readTime}
                      releaseDate={releaseDate}
                    />
                  )}
                  {miniCardImage5 && miniCard5Title && (
                    <MiniCard
                      img={miniCardImage5}
                      cardTitle={miniCard5Title}
                      prize={prize}
                      save={25}
                      offer={70}
                      startsAt={startsAt}
                      readTime={readTime}
                      releaseDate={releaseDate}
                    />
                  )}
                </div>
                {moveArrow && (
                  <IoIosArrowDropright
                    className={`${sectionTitle === "Blog Articles" ? style.moveArrowBlog : style.moveArrow}`}
                    onClick={handelRightArrowClick}
                  />
                )}
              </div>
            </section>
          )}
          {type === "section" && (
            <section className={style.section2}>
              <div className={style.head}>
                <p className={style.headTitle}>{sectionTitle}</p>
                {btn === "right" && (
                  <div className={style.leftBtn}>
                    <div className={style.hr}></div>
                    <button className={style.btn}>Browse All</button>
                  </div>
                )}
                {btn === "left" && (
                  <div className={style.rightBtn}>
                    <div className={style.hr}></div>
                    <button className={style.btn}>Browse All</button>
                  </div>
                )}
                {time && (
                  <p className={style.time}>
                    <span>06</span> : <span>24</span> : <span>59</span> :{" "}
                    <span>01</span>
                  </p>
                )}
              </div>
              <div className={style.bodyContaineer}>
                {moveArrow && (
                  <IoIosArrowDropleft
                    className={style.moveArrow}
                    onClick={handelLeftArrowClick}
                  />
                )}
                <div className={style.body} ref={scrollRef}>
                  <ContentCard offer={true} />
                  <ContentCard offer={false} />
                  <ContentCard offer={false} />
                  <ContentCard offer={true} />
                  <ContentCard offer={true} />
                  <ContentCard offer={false} />
                  <ContentCard offer={false} />
                  <ContentCard offer={true} />
                  <ContentCard offer={true} />
                  <ContentCard offer={false} />
                  <ContentCard offer={false} />
                  <ContentCard offer={true} />
                </div>
                {moveArrow && (
                  <IoIosArrowDropright
                    className={style.moveArrow}
                    onClick={handelRightArrowClick}
                  />
                )}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default SectionCard;
