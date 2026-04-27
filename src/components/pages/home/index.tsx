import { Helmet } from "react-helmet-async";

//import logo
import logo from "../../../assets/home/logo/icon.svg";
import HeroSection from "../../heroSection";
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Content Website Project</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      <HeroSection />
    </>
  );
}

export default HomePage;
