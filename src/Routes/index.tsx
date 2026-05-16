import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Components/Pages/Home";
import Nav from "../Components/Layouts/Nav";
import Footer from "../Components/Layouts/Footer";
import ShopePage from "../Components/Pages/Shop";

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
