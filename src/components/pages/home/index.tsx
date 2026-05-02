import { Helmet } from "react-helmet-async";

//import logo here
import logo from "../../../assets/home/logo/icon.svg";

//import Sections here
import HeroSection from "../../heroSection";
import ReviewSection from "../../review";
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Content Website Project</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      <HeroSection />
      <ReviewSection />
    </>
  );
}

export default HomePage;
