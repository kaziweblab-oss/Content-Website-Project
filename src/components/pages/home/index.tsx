import { Helmet } from "react-helmet-async";

//import logo
import logo from "../../../assets/home/logo/icon.svg";
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Content Website Project</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      <div>Home Page</div>
    </>
  );
}

export default HomePage;
