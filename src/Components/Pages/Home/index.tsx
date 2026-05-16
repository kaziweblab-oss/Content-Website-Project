import { Helmet } from "react-helmet-async";

//import style here
import style from "./home.module.css";

//import logo here
import logo from "../../../Assets/Home/Logo/icon.svg";

//import image here
import deal_pic_1 from "../../../Assets/Home/DealCard/the-last-of-us-2-3j68e8vqs6dqnwhn 4.jpg";
import deal_pic_2 from "../../../Assets/Home/DealCard/the-last-of-us-1 1.jpg";

//import Sections here
import HeroSection from "../../HomeComponent/HeroSection";
import ReviewSection from "../../HomeComponent/Review";
import DealCard from "../../HomeComponent/DealCard";
import SectionCard from "../../HomeComponent/SectionCard";

//import special offer Card image here
import specialOfferCardImage1 from "../../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told-3.jpg";
import specialOfferCardImage2 from "../../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told-4.jpg";
import specialOfferCardImage3 from "../../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told-1.jpg";
import specialOfferCardImage4 from "../../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told-2.jpg";
import specialOfferCardImage5 from "../../../Assets/Home/Hero/Image/damian_lynn_-_truth_be_told 1.jpg";

//import gift card image here
import googlePlayIcon from "../../../Assets/Home/MiniCard/Vector.png";
import amagonIcon from "../../../Assets/Home/MiniCard/Vector4.png";
import nithendoEshopIcon from "../../../Assets/Home/MiniCard/Vector (1).png";
import XboxLiveIcon from "../../../Assets/Home/MiniCard/Vector (2).png";
import playStationNetworkIcon from "../../../Assets/Home/MiniCard/Vector (3).png";

//import Softwar Deals image here
import adobeAcrobatIcon from "../../../Assets/Home/MiniCard/block_64dbc4f1c05855-89879030-17642490 (4).png";
import autoDeskIcon from "../../../Assets/Home/MiniCard/block_-1.svg";
import maya2024Icon from "../../../Assets/Home/MiniCard/block_-2.svg";
import aliadAutoStudioIcon from "../../../Assets/Home/MiniCard/block_-3.png";
import _3DsMax2024Icon from "../../../Assets/Home/MiniCard/block_-4.png";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Content Website Project</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      {/* Hero Section Start Here */}
      <HeroSection />
      {/* Hero Section Ends Here */}

      {/* Review Section Start Here */}
      <ReviewSection />
      {/* Review Section Ends Here */}

      {/* Weekly Section Start Here */}
      <SectionCard
        type="section"
        sectionTitle="Weekly Deals"
        time={true}
        btn="left"
        moveArrow={false}
        icon={5}
        releaseDate={false}
        readTime={false}
        views={false}
        border={true}
        prize={false}
        startsAt={false}
        miniCardImage1={false}
        miniCardImage2={false}
        miniCardImage3={false}
        miniCardImage4={false}
        miniCardImage5={false}
        miniCard1Title={false}
        miniCard2Title={false}
        miniCard3Title={false}
        miniCard4Title={false}
        miniCard5Title={false}
      />
      {/* Weekly Section Ends Here */}

      {/* Deal Card 1 Section Start Here */}
      <DealCard img={deal_pic_1} txt="The Last of Us Part II" />
      {/* Deal Card 1 Section Ends Here */}

      {/* New Arrivals Section Starts Here */}
      <SectionCard
        type="section"
        sectionTitle="New Arrivals"
        time={false}
        btn="right"
        moveArrow={false}
        icon={5}
        releaseDate={false}
        readTime={false}
        views={false}
        border={false}
        prize={false}
        startsAt={false}
        miniCardImage1={false}
        miniCardImage2={false}
        miniCardImage3={false}
        miniCardImage4={false}
        miniCardImage5={false}
        miniCard1Title={false}
        miniCard2Title={false}
        miniCard3Title={false}
        miniCard4Title={false}
        miniCard5Title={false}
      />
      {/* New Arrivals Section Ends Here */}

      {/* Deal Card 2 Section Start Here */}
      <DealCard img={deal_pic_2} txt="RE4 Remake DLC" />
      {/* Deal Card 2 Section Ends Here */}

      {/* Coming Soon Section Starts Here */}
      <SectionCard
        type="section"
        sectionTitle="Coming Soon"
        time={false}
        btn="right"
        moveArrow={true}
        icon={5}
        releaseDate={false}
        readTime={false}
        views={false}
        border={false}
        prize={false}
        startsAt={false}
        miniCardImage1={false}
        miniCardImage2={false}
        miniCardImage3={false}
        miniCardImage4={false}
        miniCardImage5={false}
        miniCard1Title={false}
        miniCard2Title={false}
        miniCard3Title={false}
        miniCard4Title={false}
        miniCard5Title={false}
      />
      {/* Coming Soon Section Ends Here */}

      {/* Mini Card Section Starts Here */}

      <div className={style.miniCardSection}>
        {/* Special Offers Section Starts Here */}
        <SectionCard
          type="miniCard"
          sectionTitle="Special Offers"
          time={false}
          btn={"right"}
          moveArrow={false}
          icon={false}
          releaseDate={false}
          readTime={false}
          views={false}
          border={false}
          prize={5999}
          startsAt={false}
          miniCardImage1={specialOfferCardImage1}
          miniCardImage2={specialOfferCardImage2}
          miniCardImage3={specialOfferCardImage3}
          miniCardImage4={specialOfferCardImage4}
          miniCardImage5={specialOfferCardImage5}
          miniCard1Title="Far Cry 5"
          miniCard2Title="The Devil in Me"
          miniCard3Title="Ghost Runner"
          miniCard4Title="Sekiro shadows ..."
          miniCard5Title="Death Stranding"
        />
        {/* Special Offers Section Ends Here */}

        {/* Gift Card Section Starts Here */}
        <SectionCard
          type="miniCard"
          sectionTitle="Gift Card"
          time={false}
          btn={"right"}
          moveArrow={false}
          icon={false}
          releaseDate={false}
          readTime={false}
          views={false}
          border={false}
          prize={false}
          startsAt={999}
          miniCardImage1={googlePlayIcon}
          miniCardImage2={amagonIcon}
          miniCardImage3={nithendoEshopIcon}
          miniCardImage4={XboxLiveIcon}
          miniCardImage5={playStationNetworkIcon}
          miniCard1Title="Google Play"
          miniCard2Title="Amazone"
          miniCard3Title="Nintendo Eshop"
          miniCard4Title="Xbox Live"
          miniCard5Title="Playstation Networks"
        />
        {/* Gift Card Section Ends Here */}

        {/* Gift Card Section Starts Here */}
        <SectionCard
          type="miniCard"
          sectionTitle="Software Deals"
          time={false}
          btn={"right"}
          moveArrow={false}
          icon={false}
          releaseDate={false}
          readTime={false}
          views={false}
          border={false}
          prize={5999}
          startsAt={false}
          miniCardImage1={adobeAcrobatIcon}
          miniCardImage2={autoDeskIcon}
          miniCardImage3={maya2024Icon}
          miniCardImage4={aliadAutoStudioIcon}
          miniCardImage5={_3DsMax2024Icon}
          miniCard1Title="Adobe Acrobat"
          miniCard2Title="Auto Desk"
          miniCard3Title="Maya 2024"
          miniCard4Title="Alid AutoStudio"
          miniCard5Title="3DS MAX 2024"
        />
        {/* Gift Card Section Ends Here */}
      </div>

      {/* Mini Card Section Ends Here */}
    </>
  );
}

export default HomePage;
