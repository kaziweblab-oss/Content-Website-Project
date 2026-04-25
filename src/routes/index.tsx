import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/home";
import Nav from "../components/layouts/nav";
import Footer from "../components/layouts/footer";
import ShopePage from "../components/pages/shope";

function Index() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/shope"} element={<ShopePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Index;
