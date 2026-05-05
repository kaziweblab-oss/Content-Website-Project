import { Helmet } from "react-helmet-async";

//import logo here
import logo from "../../../assets/home/logo/icon.svg";

//import Sections here
import HeroSection from "../../homeComponent/heroSection";
import ReviewSection from "../../homeComponent/review";
import WeeklyDeals from "../../homeComponent/weeklySection";
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Content Website Project</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      <HeroSection />
      <ReviewSection />
      <WeeklyDeals />
    </>
  );
}

export default HomePage;
